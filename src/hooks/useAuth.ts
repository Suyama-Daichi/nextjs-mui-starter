import { login, verifyAccessToken } from '../../pages/api/auth'
import { LoginInput } from '../schema/forms/login'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

export const useAuth = () => {
    const router = useRouter()
    const loginHandler = async (loginInput: LoginInput) => {
        const { email: name, password } = loginInput
        const {
            accessToken: { jwtToken: accessJwt },
        } = (await login(name, password)).data
        Cookies.set('accessToken', accessJwt)
        return accessJwt
    }

    const verifyToken = async (
        accessToken?: string,
        redirectTo = '/dashboard'
    ) => {
        try {
            await verifyAccessToken(accessToken)
            router.push(redirectTo)
        } catch (error) {
            router.replace('/login')
        }
    }

    return { loginHandler, verifyToken }
}
