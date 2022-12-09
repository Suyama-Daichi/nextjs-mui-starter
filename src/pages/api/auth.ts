import { BACKEND_URL } from '@/constants'
import { axiosClient } from '@/libs/axios'
import { CodeDeliveryDetail } from '@/models/CodeDeliveryDetail'
import { CognitoUserSession } from '@/models/CognitoUserSession'

export const login = async (name: string, password: string) => {
    console.log(BACKEND_URL)
    const result = await axiosClient.post<CognitoUserSession>(
        `${BACKEND_URL}/auth/authenticate`,
        {
            name,
            password,
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

export const verifyAccessToken = async (accessToken?: string) => {
    if (!accessToken) return
    const result = await axiosClient.post<string>(
        `${BACKEND_URL}/auth/verify-access-token`,
        {
            accessToken,
        }
    )
    return result
}
