// module
import { TFunction } from 'i18next'
import * as yup from 'yup'
import { getYear, getMonth, getDate } from 'date-fns-jalali'
import { toast } from 'react-toastify'
// custom
import instance from '../../crud-service/instance'
import api from '../../crud-service/api'
import { CreateEventEntity } from '../../entities/evnet-entity'

export type CreateEventForm = {
    startDate: Date | null
    visionDate: Date | null
    grouping: number | ''
}

export const createEventFormInitialData: CreateEventForm = {
    startDate: null,
    visionDate: null,
    grouping: '',
}

export const getCreateEventFormValidation = (t: TFunction) =>
    yup.object({
        startDate: yup
            .date()
            .typeError(t('enterAValidDate'))
            .required(t('fillingTheFieldIsMandatory')),
        visionDate: yup
            .date()
            .typeError(t('enterAValidDate'))
            .required(t('fillingTheFieldIsMandatory')),
        grouping: yup
            .number()
            .typeError(t('valueMustBeANumber'))
            .min(1, t('groupingMustBeGreaterThanOrEqualToOne'))
            .required(t('fillingTheFieldIsMandatory')),
    })

const formData2ServerData = (data: CreateEventForm): CreateEventEntity => {
    return {
        day: getDate(data.startDate!),
        month: getMonth(data.startDate!) + 1,
        year: getYear(data.startDate!),
        vision: {
            day: getDate(data.visionDate!),
            month: getMonth(data.visionDate!) + 1,
            year: getYear(data.visionDate!),
            grouping: data.grouping as number,
        },
    }
}

export const submit = async (data: CreateEventForm, t: TFunction) => {
    const apiUri = api.createEvent()
    const payload = formData2ServerData(data)
    try {
        await instance.post(apiUri, payload)
        toast.success(t('eventCreatedSuccessfully'))
    } catch (e) {
        console.log(e)
        toast.error(t('eventCreationWasFailed'))
    }
}
