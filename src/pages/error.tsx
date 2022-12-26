import { Button } from '@/components/Button'
import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/router'

const ErrorPage = () => {
    const router = useRouter()
    const referrer = router.query.referrer
    return (
        <Box>
            <Typography>エラーが発生しました</Typography>
            <Button
                onClick={() =>
                    typeof referrer === 'string'
                        ? router.push(referrer)
                        : router.replace('dashboard')
                }
            >
                再読み込み
            </Button>

            <Button onClick={() => router.replace('dashboard')}>
                ダッシュボードに戻る
            </Button>
        </Box>
    )
}

export default ErrorPage
