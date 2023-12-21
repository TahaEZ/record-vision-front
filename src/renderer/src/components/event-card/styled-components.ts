// module
import { Box, Typography, styled, useTheme } from '@mui/material'

type WrapperProps = { density?: 'standard' | 'comfortable'; isLarge?: boolean }

export const Wrapper = styled(Box, {
    shouldForwardProp: prop => prop !== 'isLarge' && prop !== 'density',
})<WrapperProps>(({ density, isLarge }) => {
    const theme = useTheme()

    return {
        backgroundColor: (theme.palette.background as any)['surface2'],
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: density === 'comfortable' ? theme.spacing(3) : theme.spacing(1.5),
        minWidth: isLarge ? '400px' : '275px',
        padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
    }
})

export const EventCardRow = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
})

type EventCardTextProps = { primaryColor?: boolean }

export const EventCardText = styled(Typography, {
    shouldForwardProp: prop => prop !== 'primaryColor',
})<EventCardTextProps>(({ primaryColor }) => {
    const theme = useTheme()

    return {
        color: primaryColor
            ? (theme.palette.primary as any)[400]
            : (theme.palette.secondary as any)[200],
        fontSize: '16px',
    }
})

export const EventCardTextButton = styled(Typography)(() => {
    const theme = useTheme()

    return {
        color: (theme.palette.primary as any)[500],
        cursor: 'pointer',
        ':hover': {
            color: (theme.palette.primary as any)[300],
        },
    }
})

export const ModalContainer = styled(Box)({
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    pointerEvents: 'none',
    width: '100vw',
})
