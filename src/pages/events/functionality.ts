// module
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
// custom
import instance from '../../crud-service/instance'
import api from '../../crud-service/api'
import EventEntity from '../../entities/evnet-entity'
import { TFunction } from 'i18next'

export type EventTab = 'ALL' | 'UNFINISHED' | 'ARRIVED'

export const tabHandleChange = (
    newValue: EventTab,
    setEventTab: Dispatch<SetStateAction<EventTab>>,
) => {
    setEventTab(newValue)
}

const fetchEvents = async (
    apiUri: string,
    setEvents: Dispatch<SetStateAction<EventEntity[]>>,
    t: TFunction,
) => {
    try {
        const { data } = await instance.get(apiUri)
        setEvents(data)
    } catch (e) {
        toast.error(t('fetchingEventsFailed'), { toastId: 'fetch-events' })
    }
}

export const useEvents = (
    eventType: EventTab,
): [EventEntity[], Dispatch<SetStateAction<EventEntity[]>>] => {
    const { t } = useTranslation()
    const [events, setEvents] = useState<EventEntity[]>([])

    useEffect(() => {
        const eventsGetApiUri: string = api.getEvents(eventType)
        fetchEvents(eventsGetApiUri, setEvents, t)
    }, [eventType])

    return [events, setEvents]
}

export const onEventRemove = async (
    id: number,
    setEvents: Dispatch<SetStateAction<EventEntity[]>>,
    t: TFunction,
): Promise<void> => {
    const eventDeleteApiUri: string = api.removeEvent(id)
    try {
        await instance.delete(eventDeleteApiUri)
        setEvents(previousEvents => {
            return previousEvents.filter(event => event.id !== id)
        })
    } catch (e) {
        toast.error(t('removingEventFailed'), { toastId: 'remove-event' })
    }
}
