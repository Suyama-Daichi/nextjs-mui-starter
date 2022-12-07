import { axiosClient } from '../../src/libs/axios'
import { CodeDeliveryDetail } from '../../src/models/CodeDeliveryDetail'
import { CognitoUserSession } from '../../src/models/CognitoUserSession'

export const login = async (name: string, password: string) => {
    const result = await axiosClient.post<CognitoUserSession>(
        'http://localhost:3001/auth/authenticate',
        {
            name,
            password,
        }
    )
    return result
}

export const forgotPassword = async (name: string) => {
    const result = await axiosClient.post<CodeDeliveryDetail>(
        'http://localhost:3001/auth/forgot-password',
        {
            name,
        }
    )
    return result
}

export const resetPassword = async (
    name: string,
    password: string,
    code: string
) => {
    const result = await axiosClient.post<'SUCCESS'>(
        'http://localhost:3001/auth/reset-password',
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
    const result = await axiosClient.post<string>(
        'http://localhost:3001/auth/verify-access-token',
        {
            accessToken,
        }
    )
    return result
}
