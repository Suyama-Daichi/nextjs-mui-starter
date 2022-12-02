import React, { FC, ReactNode } from 'react'
import { Button, ButtonProps } from '@mui/material'
import { Palette, PaletteColor, styled } from '@mui/material/styles'
import styles from '../styles/MainButton.module.scss'

interface Props {
    className?: string
    children?: ReactNode
}

// TODO: wait resolve
// link: https://github.com/mui/material-ui/issues/35319
type TempPalette = Palette & { inherit: PaletteColor }

const MainButton: FC<Props & ButtonProps> = ({
    className,
    children,
    ...rest
}) => {
    const color = rest.color ? rest.color : 'primary'

    const StyledButton = styled(Button)(
        ({ theme }) => `
            background-color: ${(theme.palette as TempPalette)[color].main};
            &:hover,
            &:focus {
                background-color: ${(theme.palette as TempPalette)[color].dark};
            }
      `
    )

    return (
        <StyledButton
            {...rest}
            className={styles.dialogButton + ' ' + className}
        >
            {children}
        </StyledButton>
    )
}

export default MainButton
