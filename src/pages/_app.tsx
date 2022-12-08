import '@/styles/globals.css'
import { AppProps } from 'next/app'
import React, { FC, ReactElement } from 'react'
import { StyledEngineProvider } from '@mui/material/styles'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '../ui/redux/store'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import ChangeTheme from '../components/ChangeTheme'
import { CssBaseline } from '@mui/material'
import Background from '../components/Background'
import { RecoilRoot } from 'recoil'

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
                    <ReduxProvider store={store}>
                        <Background>
                            <RecoilRoot>
                                <Component {...pageProps} />
                            </RecoilRoot>
                        </Background>
                    </ReduxProvider>
                </ChangeTheme>
            </CacheProvider>
        </StyledEngineProvider>
    )
}
export default MyApp
