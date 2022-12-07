import { axiosClient } from '../../src/libs/axios'
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

export const verifyAccessToken = async (accessToken?: string) => {
    const result = await axiosClient.post<string>(
        'http://localhost:3001/auth/verify-access-token',
        {
            accessToken,
        }
    )
    return result
}
