import { Typography, TypographyProps } from '@mui/material'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

export const Logout = ({ ...rest }: TypographyProps) => {
    const router = useRouter()
    const onClickLogout = () => {
        Cookies.remove('accessToken')
        Cookies.remove('idToken')
        Cookies.remove('refreshToken')
        router.replace('/login')
    }
    return (
        <Typography {...rest} m={0} onClick={onClickLogout}>
            ログアウト
        </Typography>
    )
}
