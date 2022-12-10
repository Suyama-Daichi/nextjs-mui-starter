import { yupResolver } from '@hookform/resolvers/yup'
import { Button, TextField, Typography, Unstable_Grid2 } from '@mui/material'
import Head from 'next/head'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAuth } from '@hooks/useAuth'
import { ForgotPasswordEmail, schema } from '@/schema/forms/forgotPassword'
import { useRouter } from 'next/router'
import { AuthCard } from '@components/Auth.Card'

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
        router.push(
            {
                pathname: '/ResetPassword',
                query: { email: getValues('email') },
            },
            'ResetPassword'
        )
    }

    return (
        <>
            <Head>
                <title>パスワード再設定</title>
                <meta name="description" content="パスワード再設定" />
            </Head>
            <AuthCard title="パスワード再設定">
                <Unstable_Grid2 container>
                    <Unstable_Grid2
                        xs={12}
                        mb={4}
                        display="flex"
                        justifyContent="center"
                    >
                        <Typography>
                            登録しているメールアドレスを入力してください
                        </Typography>
                    </Unstable_Grid2>
                    <Unstable_Grid2 xs={12} sm={8} smOffset={2} mb={2}>
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
                    <Unstable_Grid2
                        xs={12}
                        display="flex"
                        justifyContent="center"
                    >
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
            </AuthCard>
        </>
    )
}

export default ForgotPassword
