import { ButtonProps } from '@mui/material'
import { LoadingButton } from '@mui/lab'

type Props = {
    loading?: boolean
}
export const Button = ({ loading, ...rest }: Props & ButtonProps) => {
    return (
        <LoadingButton loading={loading} {...rest}>
            {rest.children}
        </LoadingButton>
    )
}

export default Button
