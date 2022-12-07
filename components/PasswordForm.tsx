import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
    TextField,
    InputAdornment,
    IconButton,
    TextFieldProps,
} from '@mui/material'
import { useState } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

type Props = {
    register: UseFormRegisterReturn
}
export const PasswordForm = ({ register, ...rest }: Props & TextFieldProps) => {
    const [visiblePassword, setVisiblePassword] = useState(false)
    const handleClickShowPassword = () => {
        setVisiblePassword(!visiblePassword)
    }
    return (
        <TextField
            {...rest}
            {...register}
            required
            type={visiblePassword ? 'text' : 'password'}
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
    )
}
