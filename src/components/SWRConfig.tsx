import { SWRConfig as SWRConfigOrg } from 'swr'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/router'
import { PropsWithChildren } from 'react'

const SWRConfig = ({ children }: PropsWithChildren) => {
    const { refreshToken } = useAuth()
    const router = useRouter()

    return (
        <SWRConfigOrg
            value={{
                onErrorRetry: (
                    error,
                    key,
                    config,
                    revalidate,
                    { retryCount }
                ) => {
                    if (error.response.status === 403) alert('権限がありません')
                    if (error.response.status === 401)
                        refreshToken().catch(() => {
                            // NOTE: リフレッシュトークンの期限切れ時は再ログインさせる
                            router.replace('/login')
                        })
                },
            }}
        >
            {children}
        </SWRConfigOrg>
    )
}

export default SWRConfig
