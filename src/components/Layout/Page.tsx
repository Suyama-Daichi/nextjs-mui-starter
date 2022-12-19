import React, { FC, ReactNode } from 'react'
import Head from 'next/head'
import { MiniSideNavBar } from '@/components/Layout'
import { Box } from '@mui/material'
import { SWRConfig } from 'swr'

interface Props {
    title: string
    className?: string
    description: string
    navbarLinks?: ReactNode
    navbarMenu?: boolean
    children?: ReactNode
    slideNavbar?: boolean
    fallback?: {
        [key: string]: any
    }
}

const defaultProps: Props = {
    title: '',
    description: '',
    navbarLinks: undefined,
    navbarMenu: false,
    slideNavbar: false,
}

export const Page: FC<Props> = ({ title, description, children, fallback }) => {
    return (
        <SWRConfig value={{ fallback }}>
            <Box width={'100vw'} height={'100vh'}>
                <Head>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                </Head>
                <MiniSideNavBar>{children}</MiniSideNavBar>
            </Box>
        </SWRConfig>
    )
}

Page.defaultProps = defaultProps
