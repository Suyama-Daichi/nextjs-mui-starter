import { useAuth } from '@/hooks/useAuth'
import { useEffect } from 'react'
import useSWR from 'swr'
import Cookies from 'js-cookie'
import { verifyAccessToken } from '@/pages/api/auth'
import { useRouter } from 'next/router'

const accessToken = Cookies.get('accessToken')

export const useRequireLogin = () => {
    const { refreshToken } = useAuth()
    const router = useRouter()
    const { data } = useSWR(['', accessToken], verifyAccessToken, {
        onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
            // TODO: ちゃんとハンドリングする
            if (error.response.status === 403) alert('権限がありません')
            if (error.response.status === 401) refreshToken()
        },
    })
    useEffect(() => {
        if (!Cookies.get('refreshToken')) router.replace('/login')
        if (typeof data === 'boolean' && !data) router.replace('/login')
    }, [data])
}
