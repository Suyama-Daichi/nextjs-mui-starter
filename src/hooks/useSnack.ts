import { AlertColor } from '@mui/material'
import { useCallback } from 'react'
import { atom, useRecoilState } from 'recoil'

type Props = {
    open: boolean
    message?: string
    severity?: AlertColor
}
const snackAtom = atom<Props>({
    key: 'snack',
    default: { open: false, message: undefined, severity: 'success' },
})

export const useSnack = () => {
    const [openSnack, setOpenSnack] = useRecoilState(snackAtom)

    const openSuccessSnackHandler = useCallback((message: string) => {
        setOpenSnack({ open: true, message, severity: 'success' })
    }, [])

    const openErrorSnackHandler = useCallback((message: string) => {
        setOpenSnack({ open: true, message, severity: 'error' })
    }, [])

    const closeSnackHandler = useCallback(() => {
        setOpenSnack({ open: false, message: undefined, severity: undefined })
    }, [])

    return {
        openSnack,
        openSuccessSnackHandler,
        closeSnackHandler,
        openErrorSnackHandler,
    }
}
