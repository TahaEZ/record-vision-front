import { Box, styled, useTheme } from '@mui/material'

export const Container = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
})

export const TopBar = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
})

export const EventsContainer = styled(Box)(() => {
    const theme = useTheme()

    return {
        display: 'flex',
        flexWrap: 'wrap',
        gap: theme.spacing(3),
        padding: theme.spacing(4),
    }
})
