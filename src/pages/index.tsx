import { Button } from '@mui/material'
import type { NextPage } from 'next'

import { literals } from '@/ui/Literals'
import LandingPage from '@/components/LandingPage'

const Landing: NextPage = () => {
    return (
        <LandingPage
            title={literals.brand}
            description={literals.defaultPageDescription}
        >
            <Button href={'/dashboard'}>ダッシュボード</Button>
            <Button variant="contained" href={'/login'}>
                ログイン
            </Button>
        </LandingPage>
    )
}

export default Landing
