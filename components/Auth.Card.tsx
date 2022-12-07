import { Card, CardProps, Typography, Unstable_Grid2 } from '@mui/material'

type Props = {
    children: React.ReactNode
    title: string
}
export const AuthCard = ({ children, title, ...rest }: Props & CardProps) => {
    return (
        <Card
            {...rest}
            sx={{
                minWidth: '50%',
                maxWidth: '80%',
                py: '4rem',
                px: '12rem',
                borderRadius: '20px',
            }}
        >
            <Unstable_Grid2>
                <Unstable_Grid2 mb={2} display="flex" justifyContent="center">
                    <Typography fontSize={22} fontWeight="bold">
                        {title}
                    </Typography>
                </Unstable_Grid2>
                {children}
            </Unstable_Grid2>
        </Card>
    )
}
