import { axiosClient } from '../../src/libs/axios'

export const login = async (name: string, password: string) => {
    const result = await axiosClient
        .post('http://localhost:3001/auth/authenticate', { name, password })
        .catch((e) => {
            console.log(e)
        })
    console.log(result)
    return result
}
