import { Typography, TypographyProps } from '@mui/material'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

const Logout = ({ ...rest }: TypographyProps) => {
    const router = useRouter()
    const onClickLogout = () => {
        Cookies.remove('accessToken')
        router.replace('/login')
    }
    return (
        <Typography {...rest} m={0} onClick={onClickLogout}>
            ログアウト
        </Typography>
    )
}

export default Logout
