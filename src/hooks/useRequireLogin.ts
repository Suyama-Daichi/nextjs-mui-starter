import { useAuth } from '@/hooks/useAuth'
import { useEffect } from 'react'

export const useRequireLogin = () => {
    const { redirectHandler } = useAuth()
    useEffect(() => {
        redirectHandler()
    }, [])
}
