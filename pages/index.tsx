import { Link } from '@mui/material'
import type { NextPage } from 'next'

import Page from '../components/Page'
import { literals } from '../src/ui/Literals'

const Landing: NextPage = () => {
    return (
        <Page
            title={literals.brand}
            description={literals.defaultPageDescription}
        >
            <Link style={{ backgroundColor: 'red' }} href={'/login'}>
                ログインページへ
            </Link>
            {/* TODO: ページ固有のコンポーネントはここから呼び出す */}
        </Page>
    )
}

export default Landing
