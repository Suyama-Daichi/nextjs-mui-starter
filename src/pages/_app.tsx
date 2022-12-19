import '@/styles/globals.css'
import { AppProps } from 'next/app'
import React, { FC, ReactElement } from 'react'
import { StyledEngineProvider } from '@mui/material/styles'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { ChangeTheme, SWRConfig } from '@/components/Config'
import { CssBaseline } from '@mui/material'
import { Background } from '@/components/Layout'
import { RecoilRoot } from 'recoil'
import { SnackBar } from '@/components/Feedback'

const cache = createCache({
    key: 'css',
    prepend: true,
})

const MyApp: FC<AppProps> = ({ Component, pageProps }): ReactElement => {
    return (
        <StyledEngineProvider injectFirst>
            <CacheProvider value={cache}>
                <ChangeTheme>
                    <CssBaseline />
                    <Background>
                        <RecoilRoot>
                            <SWRConfig>
                                <Component {...pageProps} />
                                <SnackBar />
                            </SWRConfig>
                        </RecoilRoot>
                    </Background>
                </ChangeTheme>
            </CacheProvider>
        </StyledEngineProvider>
    )
}
export default MyApp
