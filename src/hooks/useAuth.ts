import {
    login,
    verifyAccessToken,
    forgotPassword,
    resetPassword,
} from '@/pages/api/auth'
import { LoginInput } from '@/schema/forms/login'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { ForgotPasswordEmail } from '@/schema/forms/forgotPassword'
import { ResetPasswordInput } from '@/schema/forms/resetPassword'

export const useAuth = () => {
    const router = useRouter()
    const loginHandler = async (loginInput: LoginInput) => {
        const { email: name, password } = loginInput
        const {
            accessToken: { jwtToken: accessJwt },
        } = (await login(name, password)).data
        Cookies.set('accessToken', accessJwt)
        return accessJwt
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

    const verifyToken = async (
        accessToken?: string,
        redirectTo = '/dashboard'
    ) => {
        const isVerified = (await verifyAccessToken(accessToken))?.data
        isVerified ? router.push(redirectTo) : router.replace('/login')
    }

    return {
        loginHandler,
        forgotPasswordHandler,
        restPasswordHandler,
        verifyToken,
    }
}
