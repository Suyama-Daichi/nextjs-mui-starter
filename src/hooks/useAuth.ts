import {
    login,
    verifyAccessToken,
    forgotPassword,
    resetPassword,
    getNewToken,
    getLocalTokens,
    createUser,
} from '@/pages/api/auth'
import { LoginInput } from '@/schema/forms/login'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { ForgotPasswordEmail } from '@/schema/forms/forgotPassword'
import { ResetPasswordInput } from '@/schema/forms/resetPassword'
import { useCallback } from 'react'
import { AddUserInput } from '@/schema/forms/addUser'

export const useAuth = () => {
    const router = useRouter()
    const loginHandler = async (loginInput: LoginInput) => {
        const { email: name, password } = loginInput
        const {
            accessToken: { jwtToken: accessJwt },
            idToken: { jwtToken: idToken },
            refreshToken: { token: refreshToken },
        } = (await login(name, password)).data
        Cookies.set('accessToken', accessJwt)
        Cookies.set('idToken', idToken)
        Cookies.set('refreshToken', refreshToken)
        return accessJwt
    }

    const addUserHandler = async (loginInput: AddUserInput) => {
        const { email, password, last_name, first_name } = loginInput
        return await createUser(email, password, {
            last_name,
            first_name,
        }).then((res) => res.data)
    }

    const forgotPasswordHandler = async (input: ForgotPasswordEmail) => {
        const { email: name } = input
        const response = (await forgotPassword(name)).data
        return response.CodeDeliveryDetails.Destination
    }

    const restPasswordHandler = async (
        input: ResetPasswordInput,
        email: string
    ) => {
        const { password, code } = input
        const response = (await resetPassword(email, password, code)).data
        console.log(response)
        return response
    }

    const redirectHandler = useCallback(async (redirectTo = '/dashboard') => {
        const { accessToken } = getLocalTokens()
        const isVerified = await verifyAccessToken(accessToken).then(
            (res) => res?.data
        )
        isVerified ? router.push(redirectTo) : router.replace('/login')
    }, [])

    const refreshToken = async () => {
        const { refreshToken } = getLocalTokens()
        if (!refreshToken) return
        const token = await getNewToken(refreshToken).then((res) => res.data)
        Cookies.set('accessToken', token.AccessToken)
        Cookies.set('idToken', token.IdToken)
    }

    return {
        loginHandler,
        addUserHandler,
        forgotPasswordHandler,
        restPasswordHandler,
        redirectHandler,
        refreshToken,
    }
}
