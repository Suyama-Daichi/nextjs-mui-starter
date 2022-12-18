import Page from '@/components/Page'
import { literals } from '@/ui/Literals'
import { Button, TextField, Typography, Unstable_Grid2 } from '@mui/material'
import useUser from '@/hooks/useUser'
import { AuthCard } from '@/components/Auth.Card'
import { User } from '@/models/User.response'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '@/schema/forms/editUser'
import { useEffect } from 'react'
import { updateUser } from '@/pages/api/user.api'
import { getIdFromIdToken } from '@/utils/jwtHelper'
import { useRequireLogin } from '@/hooks/useRequireLogin'
import { Spinner } from '@/components/Spinner'

const MyProfile = () => {
    useRequireLogin()
    const id = getIdFromIdToken()
    const { user, isLoading, isError } = useUser(id)

    // TODO: エラー画面を実装する
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

    const onSubmit: SubmitHandler<User> = async (data) => {
        const id = getIdFromIdToken()
        if (!id) {
            alert('更新に失敗しました')
            return
        }
        const result = await updateUser(id, data).catch((e) => {
            console.error(e)
            alert('更新に失敗しました')
        })
        if (result) alert('更新しました')
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
                <Button variant="contained" onClick={handleSubmit(onSubmit)}>
                    変更
                </Button>
            </Unstable_Grid2>
        </Unstable_Grid2>
    )
}
