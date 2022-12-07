import { yupResolver } from '@hookform/resolvers/yup'
import {
    Button,
    Card,
    TextField,
    Typography,
    Unstable_Grid2,
} from '@mui/material'
import Head from 'next/head'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAuth } from '../src/hooks/useAuth'
import { ForgotPasswordEmail, schema } from '../src/schema/forms/forgotPassword'
import { useRouter } from 'next/router'

const ForgotPassword = () => {
    const { forgotPasswordHandler } = useAuth()
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm<ForgotPasswordEmail>({
        resolver: yupResolver(schema),
    })
    const router = useRouter()

    const onSubmit: SubmitHandler<ForgotPasswordEmail> = async (data) => {
        const destinationAddress = await forgotPasswordHandler(data)
        if (!destinationAddress) return
        router.push('/ResetPassword', { query: { email: getValues('email') } })
    }

    return (
        <>
            <Head>
                <title>パスワードを忘れたとき</title>
                <meta name="description" content="パスワードを忘れたとき" />
            </Head>
            <Card
                sx={{
                    minWidth: '50%',
                    maxWidth: '80%',
                    py: '4rem',
                    px: '12rem',
                    borderRadius: '20px',
                }}
            >
                <Unstable_Grid2>
                    <Unstable_Grid2
                        mb={2}
                        display="flex"
                        justifyContent="center"
                    >
                        <Typography fontSize={22} fontWeight="bold">
                            パスワードを忘れたとき
                        </Typography>
                    </Unstable_Grid2>
                    <Unstable_Grid2 mb={4}>
                        <Typography>
                            登録しているメールアドレスを入力してください
                        </Typography>
                    </Unstable_Grid2>
                    <Unstable_Grid2 mb={2}>
                        <TextField
                            {...register('email')}
                            required
                            id="email"
                            type={'email'}
                            label="メールアドレス"
                            placeholder="aaa@gmail.com"
                            fullWidth={true}
                            InputLabelProps={{ shrink: true }}
                        />
                        <Typography fontSize={2} color={'error'}>
                            {errors.email?.message}
                        </Typography>
                    </Unstable_Grid2>
                    <Unstable_Grid2 display="flex" justifyContent="center">
                        <Button
                            size="large"
                            variant="contained"
                            sx={{ borderRadius: '25px' }}
                            onClick={handleSubmit(onSubmit)}
                        >
                            {'送信'}
                        </Button>
                    </Unstable_Grid2>
                </Unstable_Grid2>
            </Card>
        </>
    )
}

export default ForgotPassword
