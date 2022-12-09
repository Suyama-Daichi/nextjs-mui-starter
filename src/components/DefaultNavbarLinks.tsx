import React, { FC } from 'react'
import styles from '@styles/Default.module.scss'
import { Button } from '@mui/material'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

const DefaultNavbarLinks: FC = () => {
    const router = useRouter()
    const onClickLogout = () => {
        Cookies.remove('accessToken')
        router.replace('/login')
    }
    return (
        <div>
            {Cookies.get('accessToken') && (
                <Button
                    variant="text"
                    className={styles.navbarLink}
                    onClick={onClickLogout}
                >
                    ログアウト
                </Button>
            )}
        </div>
    )
}

export default DefaultNavbarLinks
