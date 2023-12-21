// module
import { ReactNode } from 'react'
// custom
import FormGroupError from './form-group-error'
import FormGroupLabel from './form-group-label'
import Wrapper, { WrapperProps } from './form-group-wrapper'

type FormFieldProps = {
    children?: ReactNode | Array<ReactNode>
    label: string | JSX.Element
    style?: WrapperProps['style']
    error?: string
}

const FormField = ({ children, label, error, style }: FormFieldProps) => {
    return (
        <Wrapper style={style}>
            <FormGroupLabel>{label}</FormGroupLabel>
            {children}
            <FormGroupError>{error}</FormGroupError>
        </Wrapper>
    )
}

export default FormField
