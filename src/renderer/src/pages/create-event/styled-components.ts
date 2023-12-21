// module
import { Box, styled, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'

export const Container = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
})

export const FormWrapper = styled(Box)(() => {
    const theme = useTheme()

    return {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(3),
        minWidth: '300px',
        width: '40%',
    }
})

export const BreadcrumbsLink = styled(Link)(() => {
    const theme = useTheme()

    return {
        color: (theme.palette.secondary as any)[600],
        fontSize: '16px',
        fontWeight: 700,
        textDecoration: 'none',
    }
})
