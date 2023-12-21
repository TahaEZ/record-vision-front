// module
import { ElementType, useCallback } from 'react'
import {
    DatePicker as MuiDatePicker,
    DatePickerProps as MuiDatePickerProps,
    LocalizationProvider,
} from '@mui/x-date-pickers'
import { useTranslation } from 'react-i18next'
import { PopperProps, TextFieldProps } from '@mui/material'
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali'
import { Controller, Path, UseFormReturn, get } from 'react-hook-form'
// custom
import { DatePickerPopper, DatepickerInput } from './styled-components'
import ArrowDown from '../../../icons/arrow-down'
import CALENDAR_WEEKDAYS from '../../../../enums/calendar-weekdays'
import FormField from '../../tools/form-field'

const textFieldRenderer: ElementType<TextFieldProps> = props => (
    <DatepickerInput {...props} />
)
const popperRenderer: ElementType<PopperProps> = props => (
    <DatePickerPopper {...props} />
)

type DatePickerProps<EntityModel extends Record<string, any>, TDate> = {
    data: UseFormReturn<EntityModel>
    label: JSX.Element | string
    name: Path<EntityModel>
} & MuiDatePickerProps<TDate>

const DatePicker = <EntityModel extends Record<string, any>, TDate>({
    data,
    label,
    name,
    ...rest
}: DatePickerProps<EntityModel, TDate>) => {
    const { t } = useTranslation()

    const formatDayOfWeek = useCallback((day: string) => {
        switch (day) {
            case CALENDAR_WEEKDAYS.saturday:
                return t('sat')
            case CALENDAR_WEEKDAYS.sunday:
                return t('sun')
            case CALENDAR_WEEKDAYS.monday:
                return t('mon')
            case CALENDAR_WEEKDAYS.tuesday:
                return t('tue')
            case CALENDAR_WEEKDAYS.wednesday:
                return t('wed')
            case CALENDAR_WEEKDAYS.thursday:
                return t('thu')
            case CALENDAR_WEEKDAYS.friday:
                return t('fri')
            default:
                return ''
        }
    }, [])

    const error = get(data.formState.errors, name)

    return (
        <FormField label={label} error={error?.message}>
            <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
                <Controller
                    name={name as Path<EntityModel>}
                    control={data.control}
                    render={({ field: { value, onChange, onBlur } }) => (
                        <MuiDatePicker
                            localeText={{
                                fieldDayPlaceholder: () =>
                                    t('datepickerFieldDayPlaceholder'),
                                fieldMonthPlaceholder: () =>
                                    t('datepickerFieldMonthPlaceholder'),
                                fieldYearPlaceholder: () =>
                                    t('datepickerFieldYearPlaceholder'),
                                okButtonLabel: t('ok'),
                                cancelButtonLabel: t('cancel'),
                            }}
                            closeOnSelect={false}
                            slots={{
                                openPickerIcon: () => <ArrowDown />,
                                textField: textFieldRenderer,
                                popper: popperRenderer,
                            }}
                            slotProps={{
                                actionBar: {
                                    actions: ['cancel', 'accept'],
                                },
                                layout: {
                                    className: 'datepicker-layout',
                                },
                                calendarHeader: {
                                    className: 'datepicker-header',
                                    classes: {
                                        labelContainer:
                                            'datepicker-header-label-container',
                                    },
                                },
                                popper: {
                                    placement: 'bottom',
                                },
                                previousIconButton: {
                                    className:
                                        'datepicker-header-previous-month',
                                },
                                nextIconButton: {
                                    className: 'datepicker-header-next-month',
                                },
                                textField: {
                                    fullWidth: true,
                                    onBlur: onBlur,

                                    placeholder: t('datepickerPlaceholder'),
                                },
                            }}
                            views={['year', 'month', 'day']}
                            dayOfWeekFormatter={formatDayOfWeek}
                            value={value}
                            onChange={onChange}
                            {...rest}
                        />
                    )}
                />
            </LocalizationProvider>
        </FormField>
    )
}

export default DatePicker
