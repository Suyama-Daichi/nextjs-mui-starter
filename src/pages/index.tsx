import { Button } from '@mui/material'
import type { NextPage } from 'next'

import { literals } from '@/constants'
import Head from 'next/head'

const Landing: NextPage = () => {
    return (
        <>
            <Head>
                <title>{literals.brand}</title>
                <meta
                    name="description"
                    content={literals.defaultPageDescription}
                />
            </Head>
            <Button href={'/dashboard'}>ダッシュボード</Button>
            <Button variant="contained" href={'/login'}>
                ログイン
            </Button>
        </>
    )
}

export default Landing
