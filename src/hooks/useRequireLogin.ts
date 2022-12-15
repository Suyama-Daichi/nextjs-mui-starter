import { verifyAccessToken } from '@/pages/api/auth'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const checkCookie = () => {
    const accessToken = Cookies.get('accessToken')
    const idToken = Cookies.get('idToken')
    const refreshToken = Cookies.get('refreshToken')

    return !(accessToken || idToken || refreshToken)
}

const validateToken = async () => {
    const isCookieValid = checkCookie()
    if (!isCookieValid) return false
    const isValid = await verifyAccessToken()
    return isValid
}

export const useRequireLogin = () => {
    const route = useRouter()
    const redirectHandler = async () => {
        const isLogin = await validateToken()
        if (!isLogin) route.replace('./login')
    }
    useEffect(() => {
        redirectHandler()
    }, [])
}
