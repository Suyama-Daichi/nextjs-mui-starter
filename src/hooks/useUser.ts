import { getUser } from '@/pages/api/user.api'
import useSWR from 'swr'

const useUser = (id?: string) => {
    const { data, error, isLoading } = useSWR(id, getUser)

    return {
        user: data,
        isLoading,
        isError: error,
    }
}

export default useUser
