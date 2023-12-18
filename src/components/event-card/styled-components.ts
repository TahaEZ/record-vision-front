// module
import { Box, Typography, styled, useTheme } from '@mui/material'

export const Wrapper = styled(Box)(() => {
    const theme = useTheme()

    return {
        backgroundColor: (theme.palette.background as any)['surface2'],
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(3),
        minWidth: '275px',
        padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
    }
})

export const EventCardRow = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
})

export const EventCardText = styled(Typography, {
    shouldForwardProp: prop => prop !== 'primaryColor',
})<{ primaryColor?: boolean }>(({ primaryColor }) => {
    const theme = useTheme()

    return {
        color: primaryColor
            ? (theme.palette.primary as any)[400]
            : (theme.palette.secondary as any)[200],
        fontSize: '16px',
    }
})
