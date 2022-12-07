import { useCallback } from 'react'
import { login } from '../../pages/api/auth'
import { LoginInput } from '../schema/forms/login'

export const useAuth = () => {
    const loginHandler = useCallback(async (loginInput: LoginInput) => {
        const { email: name, password } = loginInput
        return await login(name, password)
    }, [])

    return { loginHandler }
}
