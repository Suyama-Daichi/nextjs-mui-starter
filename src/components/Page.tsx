import React, { FC, ReactNode } from 'react'
import Head from 'next/head'
import ShortHeader from '@components/ShortHeader'
import MiniVariantDrawer from '@/components/MiniVariantDrawer'
import { Box } from '@mui/material'

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
    navbarLinks: undefined,
    navbarMenu: false,
    slideNavbar: false,
}

const Page: FC<Props> = ({ title, description, children }) => {
    return (
        <Box width={'100vw'} height={'100vh'}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <MiniVariantDrawer>{children}</MiniVariantDrawer>
        </Box>
    )
}

Page.defaultProps = defaultProps

export default Page
