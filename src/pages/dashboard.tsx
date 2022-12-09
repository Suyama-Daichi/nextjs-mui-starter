import type { NextPage } from 'next'
import React from 'react'

import Page from '@components/Page'
import { literals } from '@/ui/Literals'

const Dashboard: NextPage = () => {
    return (
        <Page title={`${literals.brand} - Dashboard`} description="Dashboard">
            <h1>ここはダッシュボード画面です</h1>
        </Page>
    )
}

export default Dashboard
