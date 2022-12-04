import React, { FC, ReactNode } from 'react'
import styles from '../styles/Page.module.scss'
import Head from 'next/head'
import ShortHeader from './ShortHeader'
import DefaultNavbarLinks from './DefaultNavbarLinks'
import { Card } from '@mui/material'
import Navbar from './Navbar'
import { useRouter } from 'next/router'

interface Props {
    title: string
    className?: string
    description: string
    navbarLinks?: ReactNode
    navbarMenu?: boolean
    header?: ReactNode
    children?: ReactNode
    slideNavbar?: boolean
}

const defaultProps: Props = {
    title: '',
    description: '',
    header: <ShortHeader />,
    navbarLinks: <DefaultNavbarLinks />,
    navbarMenu: false,
    slideNavbar: false,
}

// TODO: ヘッダー、サイドバーコンポーネント(ログイン時のみ)などはここから呼び出す
const Page: FC<Props> = ({
    title,
    description,
    className,
    children,
    navbarLinks,
    navbarMenu,
    slideNavbar,
}) => {
    const router = useRouter()

    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            {/* TODO: 複数あるときは配列に切り出してincludeで評価する */}
            {router.pathname !== '/login' && (
                <Navbar
                    navbarLinks={navbarLinks}
                    navbarMenu={navbarMenu}
                    slideNavbar={slideNavbar}
                />
            )}
            <Card className={styles.main}>
                <div className={className ? className : styles.mainContent}>
                    {children}
                </div>
            </Card>
        </div>
    )
}

Page.defaultProps = defaultProps

export default Page
