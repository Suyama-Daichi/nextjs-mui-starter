import { yupResolver } from '@hookform/resolvers/yup'
import { Button, TextField, Typography, Unstable_Grid2 } from '@mui/material'
import Head from 'next/head'
import { SubmitHandler, useForm } from 'react-hook-form'
import { PasswordForm } from '@components/PasswordForm'
import { useAuth } from '@hooks/useAuth'
import { ResetPasswordInput, schema } from '@/schema/forms/resetPassword'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { AuthCard } from '@components/Auth.Card'

const ResetPassword = () => {
    const { restPasswordHandler, forgotPasswordHandler } = useAuth()
    const router = useRouter()
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<ResetPasswordInput>({
        resolver: yupResolver(schema),
    })
    const [email, setEmail] = useState('')
    const [resendComplete, setResendComplete] = useState('')

    useEffect(() => {
        if (router.query.email && typeof router.query.email === 'string') {
            setEmail(router.query.email)
        }
    }, [router])

    const resendCode = async () => {
        const destination = await forgotPasswordHandler({ email })
        setResendComplete(destination)
    }

    const onSubmit: SubmitHandler<ResetPasswordInput> = async (data) => {
        try {
            const result = await restPasswordHandler({ ...data }, email)
            if (result === 'SUCCESS') {
                router.push('/login')
            }
        } catch (error) {
            setError('code', {
                type: 'validate',
                message: 'コードを確認してください',
            })
        }
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
                        sm={8}
                        smOffset={2}
                        mb={4}
                        display="flex"
                        justifyContent="center"
                    >
                        <Typography>新しいパスワードを設定します</Typography>
                    </Unstable_Grid2>
                    <Unstable_Grid2 xs={12} sm={8} smOffset={2} mb={2}>
                        <TextField
                            {...register('code')}
                            required
                            id="code"
                            type={'text'}
                            label="コード"
                            placeholder="000000"
                            fullWidth={true}
                            InputLabelProps={{ shrink: true }}
                        />
                        <Typography fontSize={2} color={'error'}>
                            {errors.code?.message}
                        </Typography>
                        <Typography
                            fontSize={2}
                            color={'InfoText'}
                            justifySelf="center"
                        >
                            コードが届かない場合
                            <Button
                                disabled={!!resendComplete}
                                sx={{ ml: 2 }}
                                variant="outlined"
                                size="small"
                                onClick={resendCode}
                            >
                                再送
                            </Button>
                            {resendComplete &&
                                `${resendComplete}に再送しました`}
                        </Typography>
                    </Unstable_Grid2>
                    <Unstable_Grid2 xs={12} sm={8} smOffset={2} mb={2}>
                        <PasswordForm
                            id="password"
                            label="新しいパスワード"
                            register={{ ...register('password') }}
                        />
                        <Typography fontSize={2} color={'error'}>
                            {errors.password?.message}
                        </Typography>
                    </Unstable_Grid2>
                    <Unstable_Grid2 xs={12} sm={8} smOffset={2} mb={2}>
                        <PasswordForm
                            id="passwordConfirm"
                            label="新しいパスワード(確認)"
                            register={{ ...register('passwordConfirm') }}
                        />
                        <Typography fontSize={2} color={'error'}>
                            {errors.passwordConfirm?.message}
                        </Typography>
                    </Unstable_Grid2>
                    <Unstable_Grid2
                        xs={12}
                        sm={8}
                        smOffset={2}
                        display="flex"
                        justifyContent="center"
                    >
                        <Button
                            size="large"
                            variant="contained"
                            sx={{ borderRadius: '25px' }}
                            onClick={handleSubmit(onSubmit)}
                        >
                            {'変更'}
                        </Button>
                    </Unstable_Grid2>
                </Unstable_Grid2>
            </AuthCard>
        </>
    )
}

export default ResetPassword
