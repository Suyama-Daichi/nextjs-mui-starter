import axios, { AxiosError } from 'axios'
import { APIErrorHandler } from '@/utils/APIErrorHandler'
import Cookies from 'js-cookie'

export class ApiError extends Error {
    status?: string
    url?: string
}

// デフォルト config の設定
export const axiosClient = axios.create({
    timeout: 30000,
})

axiosClient.interceptors.request.use(async (config) => {
    config.headers = {
        Authorization: Cookies.get('accessToken'),
        idToken: Cookies.get('idToken'),
    }
    return config
})

axiosClient.interceptors.response.use(
    async (res) => {
        return res
    },
    (e: AxiosError) => {
        APIErrorHandler(e)
        throw e
    }
)
