// module
import { ElementType, useCallback } from 'react'
import {
    DatePicker as MuiDatePicker,
    DatePickerProps,
    LocalizationProvider,
} from '@mui/x-date-pickers'
import { useTranslation } from 'react-i18next'
import { PopperProps, TextFieldProps } from '@mui/material'
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali"
// custom
import { DatePickerPopper, DatepickerInput } from './styled-components'
import ArrowDown from '../icons/arrow-down'
import CALENDAR_WEEKDAYS from '../../enums/calendar-weekdays'

const textFieldRenderer: ElementType<TextFieldProps> = props => (
    <DatepickerInput {...props} />
)
const popperRenderer: ElementType<PopperProps> = props => (
    <DatePickerPopper {...props} />
)

const DatePicker = <TDate,>(props: DatePickerProps<TDate>) => {
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

    return (
        <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
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
                            labelContainer: 'datepicker-header-label-container',
                        },
                    },
                    popper: {
                        placement: 'bottom',
                    },
                    previousIconButton: {
                        className: 'datepicker-header-previous-month',
                    },
                    nextIconButton: {
                        className: 'datepicker-header-next-month',
                    },
                    textField: {
                        fullWidth: true,
                        placeholder: t('datepickerPlaceholder'),
                    },
                }}
                views={['year', 'month', 'day']}
                dayOfWeekFormatter={formatDayOfWeek}
                {...props}
            />
        </LocalizationProvider>
    )
}

export default DatePicker
