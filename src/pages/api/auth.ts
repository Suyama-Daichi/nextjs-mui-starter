import { BACKEND_URL } from '@/constants'
import { axiosClient } from '@/libs/axios'
import { CodeDeliveryDetail } from '@/models/CodeDeliveryDetail'
import { CognitoUserSession } from '@/models/CognitoUserSession'
import { Token } from '@/models/Tokens'
import { UserAttribute } from '@/models/UserAttribute.request'
import Cookies from 'js-cookie'

export const login = async (name: string, password: string) => {
    const result = await axiosClient.post<CognitoUserSession>(
        `${BACKEND_URL}/auth/authenticate`,
        {
            name,
            password,
        }
    )
    return result
}

export const createUser = async (
    email: string,
    password: string,
    attribute: UserAttribute
) => {
    const result = await axiosClient.post<CognitoUserSession>(
        `${BACKEND_URL}/auth/register`,
        {
            email,
            password,
            ...attribute,
        }
    )
    return result
}

export const forgotPassword = async (name: string) => {
    const result = await axiosClient.post<CodeDeliveryDetail>(
        `${BACKEND_URL}/auth/forgot-password`,
        {
            name,
        }
    )
    return result
}

export const resetPassword = async (
    name: string,
    password: string,
    code: number
) => {
    const result = await axiosClient.post<'SUCCESS'>(
        `${BACKEND_URL}/auth/reset-password`,
        {
            name,
            code,
            password,
        }
    )
    console.log('reset-password', result)
    return result
}

export const getLocalTokens = () => {
    const accessToken = Cookies.get('accessToken')
    const idToken = Cookies.get('idToken')
    const refreshToken = Cookies.get('refreshToken')
    return { accessToken, idToken, refreshToken }
}

export const verifyAccessToken = async ([key, accessToken]: [
    string,
    string
]) => {
    const result = await axiosClient
        .post<boolean>(`${BACKEND_URL}/auth/verify-access-token`, {
            accessToken,
        })
        .then((res) => res.data)
    return result
}

export const getNewToken = async (refreshToken: string) => {
    const result = await axiosClient.post(`${BACKEND_URL}/auth/token`, {
        refreshToken,
    })
    return result
}

export const setNewToken = (token: Token) => {
    token.AccessToken
        ? Cookies.set('accessToken', token.AccessToken)
        : Cookies.remove('accessToken')
    token.IdToken
        ? Cookies.set('idToken', token.IdToken)
        : Cookies.remove('idToken')
}
