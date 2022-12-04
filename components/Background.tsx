type Props = {
    children: React.ReactNode
}
const Background = ({ children }: Props) => {
    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F5F9FE',
                height: '100%',
            }}
        >
            {children}
        </div>
    )
}

export default Background
