import { useEffect } from 'react'
import useSWR from 'swr'
import Cookies from 'js-cookie'
import { verifyAccessToken } from '@/pages/api/auth'
import { useRouter } from 'next/router'

const accessToken = Cookies.get('accessToken')

export const useRequireLogin = () => {
    const router = useRouter()
    const { data } = useSWR(['', accessToken], verifyAccessToken)

    useEffect(() => {
        if (typeof data === 'boolean' && !data) router.replace('/login')
    }, [data])
}
