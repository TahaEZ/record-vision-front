// module
import { styled, useTheme } from '@mui/material'

export const NumericInputWrapper = styled('input')(() => {
    const theme = useTheme()

    return {
        boxSizing: 'border-box',
        width: '100%',
        height: '48px',
        borderRadius: '8px',
        padding: theme.spacing(1.5),
        textAlign: 'right',
        fontFamily: 'IRANYekan',
        fontSize: '14px',
        fontWeight: 500,
        border: `1px solid ${(theme.palette.secondary as any)[900]}`,
        backgroundColor: (theme.palette.background as any)['surface2'],
        color: (theme.palette.secondary as any)[50],
        MozAppearance: 'textfield',
        '::placeholder': {
            color: (theme.palette.secondary as any)[500],
            fontSize: '14px',
            fontWeight: 400,
            fontFamily: 'IRANYekan',
        },
        '::-webkit-inner-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
        },
        '::-webkit-outer-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
        },
    }
})
