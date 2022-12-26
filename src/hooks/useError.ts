import { useRouter } from 'next/router'
import { useCallback } from 'react'

export const useError = () => {
    const router = useRouter()

    const handleError = useCallback(() => {
        router.push({
            pathname: 'error',
            query: { referrer: router.pathname },
        })
    }, [])

    return handleError
}
