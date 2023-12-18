// module
import { ChangeEvent, ComponentProps } from 'react'
import {
    Controller,
    ControllerRenderProps,
    Path,
    UseFormReturn,
    get,
} from 'react-hook-form'
// custom
import FormField from '../../tools/form-field'
import { NumericInputWrapper } from './styled-components'

type NumericInputProps<EntityModel extends Record<string, any>> = {
    data: UseFormReturn<EntityModel>
    label: JSX.Element | string
    name: Path<EntityModel>
} & ComponentProps<'input'>

const NumericInput = <EntityModel extends Record<string, any>>({
    data,
    label,
    name,
    ...rest
}: NumericInputProps<EntityModel>) => {
    const onNumericInputChange = (
        value: number,
        onChange: ControllerRenderProps['onChange'],
    ) => {
        const updatedValue: number | '' = isNaN(value) ? '' : value
        onChange(updatedValue)
    }

    const error = get(data.formState.errors, name)

    return (
        <FormField label={label} error={error?.message}>
            <Controller
                control={data.control}
                name={name as Path<EntityModel>}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                    <NumericInputWrapper
                        type="number"
                        key={name.toString()}
                        onBlur={onBlur}
                        ref={inputRef => {
                            ref(inputRef)
                        }}
                        onWheel={event => {
                            ;(event.target as HTMLInputElement).blur()
                        }}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            onNumericInputChange(
                                event.target.valueAsNumber,
                                onChange,
                            )
                        }
                        value={value}
                        {...rest}
                    />
                )}
            />
        </FormField>
    )
}

export default NumericInput
