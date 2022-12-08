import { Link } from '@mui/material'
import type { NextPage } from 'next'

import Page from '@components/Page'
import { literals } from '@/ui/Literals'

const Landing: NextPage = () => {
    return (
        <Page
            title={literals.brand}
            description={literals.defaultPageDescription}
        >
            <Link style={{ backgroundColor: 'blue' }} href={'/dashboard'}>
                ダッシュボード
            </Link>
            <Link style={{ backgroundColor: 'green' }} href={'/login'}>
                ログイン
            </Link>
            {/* TODO: ページ固有のコンポーネントはここから呼び出す */}
        </Page>
    )
}

export default Landing
