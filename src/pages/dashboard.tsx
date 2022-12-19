import type { NextPage } from 'next'
import React from 'react'

import { Page } from '@/components/Layout'
import { literals } from '@/constants'
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
