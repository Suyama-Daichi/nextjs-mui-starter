import { Alert, AlertProps, Modal } from '@mui/material'

// TODO: 簡易実装中(デザイン待ち)
export const ErrorAlert = ({ ...rest }: AlertProps) => {
    return (
        <Modal open={true}>
            <Alert severity="error" {...rest}>
                {rest.children}
            </Alert>
        </Modal>
    )
}

export default ErrorAlert
