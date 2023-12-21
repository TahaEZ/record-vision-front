// module
import { Popper, TextField, styled, useTheme } from '@mui/material'

export const DatepickerInput = styled(TextField)(() => {
    const theme = useTheme()

    return {
        backgroundColor: (theme.palette.background as any)['surface2'],
        border: `1px solid ${(theme.palette.secondary as any)[900]}`,
        borderRadius: '8px',
        boxSizing: 'border-box',
        height: '48px',
        overflow: 'hidden',
        padding: 0,
        width: '100%',

        input: {
            boxSizing: 'border-box',
            fontFamily: "'iranyekan', sans-serif",
            padding: `0 ${theme.spacing(1.5)}`,
            height: '48px',
        },

        fieldset: {
            border: 'none',
        },

        '.MuiInputBase-root': {
            height: '48px',
            borderRadius: theme.spacing(1),
            padding: `0 0 0 ${theme.spacing(1.75)}`,

            '.MuiInputBase-input': {
                fontSize: '0.875rem',
                paddingBottom: 0,
                paddingTop: 0,

                '::placeholder': {
                    color: (theme.palette.secondary as any)[600],
                    opacity: 1,
                },
            },

            '.MuiIconButton-root': {
                marginLeft: theme.spacing(-1.5),
                marginRight: 0,
            },

            '.MuiInputAdornment-root': {
                marginLeft: 0,
                marginRight: theme.spacing(1),
            },
        },

        '.MuiAutocomplete-endAdornment': {
            right: '9px',
        },
    }
})

export const DatePickerPopper = styled(Popper)(() => {
    const theme = useTheme()

    return {
        '.datepicker-layout': {
            backgroundColor: (theme.palette.background as any)['surface2'],
        },

        '.datepicker-header-label-container': {
            marginRight: 'unset',
            marginLeft: 'auto',
        },

        '.datepicker-header-previous-month': {
            transform: 'rotate(180deg)',
            marginRight: 'unset',
            marginLeft: theme.spacing(-1.5),
        },

        '.datepicker-header-next-month': {
            transform: 'rotate(180deg)',
            marginLeft: 'unset',
            marginRight: theme.spacing(-1.5),
        },
    }
})
