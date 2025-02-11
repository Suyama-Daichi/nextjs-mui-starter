import type { NextPage } from 'next'
import React from 'react'

import { Page } from '@/components/Layout'
import { literals } from '@/constants'

const Privacy: NextPage = () => {
    return (
        <Page
            title={`${literals.brand} - Privacy`}
            description="Your privacy description"
        >
            <h1>Your privacy statement</h1>
        </Page>
    )
}

export default Privacy
