import { useState } from 'react'
import { VisibilityOff, Visibility } from '@mui/icons-material'
import {
    IconButton,
    InputAdornment,
    Link,
    TextField,
    Typography,
    Unstable_Grid2,
} from '@mui/material'
import Head from 'next/head'
import { literals } from '@/ui/Literals'
import { useAuth } from '@hooks/useAuth'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginInput, schema } from '@/schema/forms/login'
import { useRouter } from 'next/router'
import { AuthCard } from '@/components/Auth.Card'
import Button from '@/components/Button'

const Login = () => {
    const [visiblePassword, setVisiblePassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const { loginHandler } = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginInput>({
        resolver: yupResolver(schema),
    })
    const router = useRouter()

    const handleClickShowPassword = () => {
        setVisiblePassword(!visiblePassword)
    }

    const onSubmit: SubmitHandler<LoginInput> = async (data) => {
        setLoading(true)
        const jwt = await loginHandler(data).catch(() => {
            alert('ログインに失敗しました')
            setLoading(false)
        })
        if (!jwt) return
        setLoading(false)
        router.push('/dashboard')
    }

    return (
        <>
            <Head>
                <title>ログイン</title>
                <meta name="description" content="ログインページ" />
            </Head>
            <AuthCard title="ログイン">
                <Unstable_Grid2 container>
                    <Unstable_Grid2
                        xs={12}
                        mb={4}
                        display="flex"
                        justifyContent="center"
                    >
                        <Typography>
                            {literals.brand}
                            のご利用には、アカウント登録が必要です。
                            <Link href="/contact" underline="none">
                                お問い合わせ
                            </Link>
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
                    <Unstable_Grid2 xs={12} sm={8} smOffset={2} mb={3}>
                        <TextField
                            {...register('password')}
                            required
                            id="password"
                            type={visiblePassword ? 'text' : 'password'}
                            label="パスワード"
                            placeholder="password"
                            fullWidth={true}
                            InputLabelProps={{ shrink: true }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            {visiblePassword ? (
                                                <Visibility />
                                            ) : (
                                                <VisibilityOff />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Typography fontSize={2} color={'error'}>
                            {errors.password?.message}
                        </Typography>
                    </Unstable_Grid2>
                    <Unstable_Grid2
                        xs={12}
                        mb={4}
                        display="flex"
                        justifyContent="center"
                    >
                        <Link href="/forgot-password" underline="hover">
                            パスワードを忘れた場合
                        </Link>
                    </Unstable_Grid2>
                    <Unstable_Grid2
                        display="flex"
                        justifyContent="center"
                        xs={12}
                    >
                        <Button
                            loading={loading}
                            size="large"
                            variant="contained"
                            onClick={handleSubmit(onSubmit)}
                        >
                            {'ログイン'}
                        </Button>
                    </Unstable_Grid2>
                </Unstable_Grid2>
            </AuthCard>
        </>
    )
}

export default Login
