import axios, { AxiosError } from 'axios'
import { APIErrorHandler } from '@/utils/APIErrorHandler'

export class ApiError extends Error {
    status?: string
    url?: string
}

// デフォルト config の設定
export const axiosClient = axios.create({
    timeout: 30000,
})

axiosClient.interceptors.request.use(async (config) => {
    // TODO: recoilなどからjwtを取得する
    // const token = await auth?.currentUser?.getIdToken()
    // config.headers = {
    //     Authorization: token || '',
    // }
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
