import { useState } from 'react'
import { VisibilityOff, Visibility } from '@mui/icons-material'
import {
    Button,
    Card,
    IconButton,
    InputAdornment,
    Link,
    TextField,
    Typography,
    Unstable_Grid2,
} from '@mui/material'
import Head from 'next/head'
import { literals } from '../src/ui/Literals'
import { useAuth } from '../src/hooks/useAuth'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginInput, schema } from '../src/schema/forms/login'

const Login = () => {
    const [visiblePassword, setVisiblePassword] = useState(false)
    const { loginHandler } = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginInput>({
        resolver: yupResolver(schema),
    })

    const handleClickShowPassword = () => {
        setVisiblePassword(!visiblePassword)
    }

    const onSubmit: SubmitHandler<LoginInput> = async (data) => {
        const result = await loginHandler(data)
        console.log(result)
    }

    return (
        <>
            <Head>
                <title>ログイン</title>
                <meta name="description" content="ログインページ" />
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
                            ログイン
                        </Typography>
                    </Unstable_Grid2>
                    <Unstable_Grid2 mb={4}>
                        <Typography>
                            {literals.brand}
                            のご利用には、アカウント登録が必要です。
                            <Link href="/contact" underline="none">
                                お問い合わせ
                            </Link>
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
                    <Unstable_Grid2 mb={3}>
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
                            {errors.email?.message}
                        </Typography>
                    </Unstable_Grid2>
                    <Unstable_Grid2
                        mb={4}
                        display="flex"
                        justifyContent="center"
                    >
                        <Link href="/forgot-password" underline="hover">
                            パスワードを忘れた場合
                        </Link>
                    </Unstable_Grid2>
                    <Unstable_Grid2 display="flex" justifyContent="center">
                        <Button
                            size="large"
                            variant="contained"
                            sx={{ borderRadius: '25px' }}
                            onClick={handleSubmit(onSubmit)}
                        >
                            {'ログイン'}
                        </Button>
                    </Unstable_Grid2>
                </Unstable_Grid2>
            </Card>
        </>
    )
}

export default Login
