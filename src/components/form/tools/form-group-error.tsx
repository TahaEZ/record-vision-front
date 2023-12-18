// module
import { useTheme } from '@mui/material'
import styled from '@emotion/styled'

const FormGroupError = styled.div(() => {
    const theme = useTheme()

    return {
        boxSizing: 'border-box',
        width: '100%',
        height: '20px',
        paddingInline: '12px',
        textAlign: 'right',
        fontSize: '12px',
        fontWeight: 400,
        marginTop: '4px',
        color: theme.palette.error.main
    }
})

export default FormGroupError
