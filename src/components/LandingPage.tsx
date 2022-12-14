import React, { FC, ReactNode } from 'react'
import Head from 'next/head'

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
}

const LandingPage: FC<Props> = ({ title, description, children }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <>{children}</>
        </div>
    )
}

LandingPage.defaultProps = defaultProps

export default LandingPage
