import { Button } from '@mui/material'
import type { NextPage } from 'next'

import Page from '@components/Page'
import { literals } from '@/ui/Literals'

const Landing: NextPage = () => {
    return (
        <Page
            title={literals.brand}
            description={literals.defaultPageDescription}
        >
            <Button href={'/dashboard'}>ダッシュボード</Button>
            <Button variant="contained" href={'/login'}>
                ログイン
            </Button>
            {/* TODO: ページ固有のコンポーネントはここから呼び出す */}
        </Page>
    )
}

export default Landing
