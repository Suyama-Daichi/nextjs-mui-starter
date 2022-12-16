import { getUser } from '@/pages/api/user.api'
import useSWR from 'swr'
import { useAuth } from '@/hooks/useAuth'

const useUser = (id?: string) => {
    const { refreshToken } = useAuth()
    const { data, error, isLoading } = useSWR(id, getUser, {
        onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
            // TODO: ちゃんとハンドリングする
            if (error.response.status === 403) alert('権限がありません')
            if (error.response.status === 401) refreshToken()
        },
    })

    return {
        user: data,
        isLoading,
        isError: error,
    }
}

export default useUser
