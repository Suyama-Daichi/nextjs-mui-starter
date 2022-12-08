import type { NextPage } from 'next'
import React from 'react'

import Page from '@components/Page'
import { literals } from '@/ui/Literals'

const Blog: NextPage = () => {
    return (
        <Page
            title={`${literals.brand} - Dashboard`}
            description="Dashboard"
        ></Page>
    )
}

export default Blog
