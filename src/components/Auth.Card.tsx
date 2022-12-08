import {
    Card,
    CardContent,
    CardProps,
    Typography,
    Unstable_Grid2,
} from '@mui/material'

type Props = {
    children: React.ReactNode
    title: string
}
export const AuthCard = ({ children, title, ...rest }: Props & CardProps) => {
    return (
        <Unstable_Grid2 container>
            <Unstable_Grid2 xs={10} xsOffset={1} sm={8} smOffset={2}>
                <Card {...rest} sx={{ borderRadius: '20px' }}>
                    <CardContent>
                        <Unstable_Grid2
                            mb={2}
                            display="flex"
                            justifyContent="center"
                        >
                            <Typography fontSize={22} fontWeight="bold">
                                {title}
                            </Typography>
                        </Unstable_Grid2>
                        {children}
                    </CardContent>
                </Card>
            </Unstable_Grid2>
        </Unstable_Grid2>
    )
}
