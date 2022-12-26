import { Page } from '@/components/Layout'
import { literals } from '@/constants'
import { TextField, Typography, Unstable_Grid2 } from '@mui/material'
import useUser from '@/hooks/useUser'
import { AuthCard } from '@/components/Card'
import { User } from '@/models/User.response'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '@/schema/forms/editUser'
import { useEffect, useState } from 'react'
import { updateUser } from '@/pages/api/user.api'
import { getIdFromIdToken } from '@/utils/jwtHelper'
import { useRequireLogin } from '@/hooks/useRequireLogin'
import { Spinner } from '@/components/Feedback'
import { useSnack } from '@/hooks/useSnack'
import { Button } from '@/components/Button'
import { useError } from '@/hooks/useError'

const MyProfile = () => {
    useRequireLogin()
    const id = getIdFromIdToken()
    const { user, isLoading, isError } = useUser(id)
    const errorHandler = useError()

    useEffect(() => {
        if (isError) errorHandler()
    }, [errorHandler, isError])

    // TODO: `!user`を消したい
    if (isLoading || !user) return <Spinner />
    return (
        <Page title={`${literals.brand} - 自分の情報`} description="my profile">
            <AuthCard title="自分の情報">
                <ListUserDetailData data={user} />
            </AuthCard>
        </Page>
    )
}

export default MyProfile

type Props = {
    data: User
}
const ListUserDetailData = ({ data }: Props) => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<User>({
        resolver: yupResolver(schema),
    })
    const [loading, setLoading] = useState(false)
    const { openSuccessSnackHandler, openErrorSnackHandler } = useSnack()

    const onSubmit: SubmitHandler<User> = async (data) => {
        setLoading(true)
        const id = getIdFromIdToken()
        if (!id) {
            setLoading(false)
            return
        }
        const result = await updateUser(id, data).catch((e) => {
            console.error(e)
            setLoading(false)
            openErrorSnackHandler('更新に失敗しました')
        })
        if (result) openSuccessSnackHandler('更新しました')
        setLoading(false)
    }
    useEffect(() => {
        setValue('last_name', data.last_name)
        setValue('first_name', data.first_name)
    }, [])

    return (
        <Unstable_Grid2 container direction="column" spacing={3}>
            <Unstable_Grid2 xs display="flex" justifyContent="center">
                <Unstable_Grid2>
                    <TextField
                        label="姓"
                        {...register('last_name')}
                        id={'last_name'}
                    />
                    <Typography fontSize={2} color={'error'}>
                        {errors.last_name?.message}
                    </Typography>
                </Unstable_Grid2>
                <Unstable_Grid2>
                    <TextField
                        label="名"
                        {...register('first_name')}
                        id={'first_name'}
                    />
                    <Typography fontSize={2} color={'error'}>
                        {errors.first_name?.message}
                    </Typography>
                </Unstable_Grid2>
            </Unstable_Grid2>
            <Unstable_Grid2 xs display="flex" justifyContent="center">
                <Button
                    loading={loading}
                    variant="contained"
                    onClick={handleSubmit(onSubmit)}
                >
                    変更
                </Button>
            </Unstable_Grid2>
        </Unstable_Grid2>
    )
}
