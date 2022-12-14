import { BACKEND_URL } from '@/constants'
import { axiosClient } from '@/libs/axios'
import { User } from '@/models/User.response'

export const getUser = async (email: string) => {
    return await axiosClient
        .get(`${BACKEND_URL}/user/${email}`)
        .then((res) => res.data)
}

export const updateUser = async (email: string, user: User) => {
    return await axiosClient
        .post(`${BACKEND_URL}/user/${email}`, user)
        .then((res) => res.data)
}
