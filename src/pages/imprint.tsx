import type { NextPage } from 'next'
import React from 'react'

import { Page } from '@/components/Layout'
import { literals } from '@/ui/Literals'

const Imprint: NextPage = () => {
    return (
        <Page title={`${literals.brand} - Imprint`} description="Imprint">
            <h1>Your Imprint</h1>
        </Page>
    )
}

export default Imprint
