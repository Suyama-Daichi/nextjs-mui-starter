import { useSnack } from '@/hooks/useSnack'
import { Alert, Snackbar, SnackbarProps } from '@mui/material'

export const SnackBar = ({ ...rest }: SnackbarProps) => {
    const { openSnack, closeSnackHandler } = useSnack()

    return (
        <Snackbar
            {...rest}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            autoHideDuration={3000}
            onClose={closeSnackHandler}
            open={openSnack.open}
        >
            <Alert
                onClose={closeSnackHandler}
                severity={openSnack.severity}
                sx={{ width: '100%' }}
            >
                {openSnack.message}
            </Alert>
        </Snackbar>
    )
}
