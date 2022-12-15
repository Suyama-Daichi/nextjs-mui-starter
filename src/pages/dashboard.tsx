import type { NextPage } from 'next'
import React from 'react'

import Page from '@components/Page'
import { literals } from '@/ui/Literals'
import { useRequireLogin } from '@/hooks/useRequireLogin'

const Dashboard: NextPage = () => {
    useRequireLogin()
    return (
        <Page title={`${literals.brand} - Dashboard`} description="Dashboard">
            <h1>ここはダッシュボード画面です</h1>
        </Page>
    )
}

export default Dashboard
