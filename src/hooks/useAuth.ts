import { useCallback } from 'react'
import { login } from '../../pages/api/auth'
import { LoginDto } from '../models/loginFormInput.dto'

export const useAuth = () => {
    const loginHandler = useCallback(async (loginInput: LoginDto) => {
        const { name, password } = loginInput
        return await login(name, password)
    }, [])

    return { loginHandler }
}
