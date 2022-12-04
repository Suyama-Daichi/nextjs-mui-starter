import styles from '../styles/Login.module.scss'
import { Button, Card } from '@mui/material'
import Head from 'next/head'

const Login = () => {
    return (
        <>
            <Head>
                <title>ログイン</title>
                <meta name="description" content="ログインページ" />
            </Head>
            <Card className={styles.main}>
                <Button className={styles.mainContent}>{'ログイン'}</Button>
            </Card>
        </>
    )
}

export default Login
