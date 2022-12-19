import { useState } from 'react'
import { VisibilityOff, Visibility } from '@mui/icons-material'
import {
    Button,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
    Unstable_Grid2,
} from '@mui/material'
import Head from 'next/head'
import { useAuth } from '@hooks/useAuth'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthCard } from '@/components/Card'
import { AddUserInput, schema } from '@/schema/forms/addUser'
import { useSnack } from '@/hooks/useSnack'

const AddUser = () => {
    const [visiblePassword, setVisiblePassword] = useState(false)
    const { addUserHandler } = useAuth()
    const { openSuccessSnackHandler, openErrorSnackHandler } = useSnack()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AddUserInput>({
        resolver: yupResolver(schema),
    })

    const handleClickShowPassword = () => {
        setVisiblePassword(!visiblePassword)
    }

    const onSubmit: SubmitHandler<AddUserInput> = async (data) => {
        const result = await addUserHandler(data).catch(() => {
            openErrorSnackHandler('ユーザーの追加に失敗しました')
        })
        if (!result) return
        openSuccessSnackHandler(`${data.email}にログイン情報を送信しました`)
    }

    return (
        <>
            <Head>
                <title>ユーザーの追加</title>
                <meta name="description" content="ユーザーの追加" />
            </Head>
            <AuthCard title="ユーザーの追加">
                <Unstable_Grid2 container>
                    <Unstable_Grid2
                        xs={12}
                        mb={4}
                        display="flex"
                        justifyContent="center"
                    >
                        <Typography>ユーザーを追加します</Typography>
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
                            label="仮パスワード"
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
                    <Unstable_Grid2 xs={6} sm={4} smOffset={2} mb={2} pr={1}>
                        <TextField
                            {...register('last_name')}
                            required
                            id="last_name"
                            type={'text'}
                            label="姓"
                            placeholder="田中"
                            fullWidth={true}
                            InputLabelProps={{ shrink: true }}
                        />
                        <Typography fontSize={2} color={'error'}>
                            {errors.last_name?.message}
                        </Typography>
                    </Unstable_Grid2>
                    <Unstable_Grid2 xs={6} sm={4} smOffset={0} mb={2} pl={1}>
                        <TextField
                            {...register('first_name')}
                            required
                            id="first_name"
                            type={'text'}
                            label="名"
                            placeholder="太郎"
                            fullWidth={true}
                            InputLabelProps={{ shrink: true }}
                        />
                        <Typography fontSize={2} color={'error'}>
                            {errors.first_name?.message}
                        </Typography>
                    </Unstable_Grid2>
                    <Unstable_Grid2
                        display="flex"
                        justifyContent="center"
                        xs={12}
                    >
                        <Button
                            size="large"
                            variant="contained"
                            onClick={handleSubmit(onSubmit)}
                        >
                            {'追加'}
                        </Button>
                    </Unstable_Grid2>
                </Unstable_Grid2>
            </AuthCard>
        </>
    )
}

export default AddUser
