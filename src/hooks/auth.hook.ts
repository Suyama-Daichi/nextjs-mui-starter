import { useCallback } from 'react'
import { login } from '../../pages/api/auth'

export type LoginDto = {
    name: string
    password: string
}

export const useAuth = () => {
    const loginHandler = useCallback(async (loginInput: LoginDto) => {
        const { name, password } = loginInput
        login(name, password)
    }, [])

    return { loginHandler }
}
