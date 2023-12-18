// module
import { SyntheticEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
// custom
import { Button, Tab, Tabs } from '@mui/material'
import EventCard from '../../components/event-card'
import EventEntity from '../../entities/evnet-entity'
import { Container, EventsContainer, TopBar } from './styled-components'
import { Link } from 'react-router-dom'

const eventsData: EventEntity[] = [
    {
        year: 1402,
        month: 10,
        day: 13,
        deadlineStatus: 'arrived',
        id: 1,
        vision: {
            day: 30,
            month: 11,
            year: 1403,
            grouping: 1,
        },
    },
    {
        year: 1402,
        month: 12,
        day: 21,
        deadlineStatus: 'unfinished',
        id: 2,
        vision: {
            day: 12,
            month: 12,
            year: 1404,
            grouping: 1,
        },
    },
    {
        year: 1402,
        month: 12,
        day: 21,
        deadlineStatus: 'unfinished',
        id: 3,
        vision: {
            day: 12,
            month: 12,
            year: 1404,
            grouping: 1,
        },
    },
    {
        year: 1402,
        month: 12,
        day: 21,
        deadlineStatus: 'unfinished',
        id: 4,
        vision: {
            day: 12,
            month: 12,
            year: 1404,
            grouping: 1,
        },
    },
    {
        year: 1402,
        month: 12,
        day: 21,
        deadlineStatus: 'unfinished',
        id: 5,
        vision: {
            day: 12,
            month: 12,
            year: 1404,
            grouping: 1,
        },
    },
    {
        year: 1402,
        month: 12,
        day: 21,
        deadlineStatus: 'unfinished',
        id: 6,
        vision: {
            day: 12,
            month: 12,
            year: 1404,
            grouping: 1,
        },
    },
]

type EventTab = 'all' | 'unfinished' | 'arrived'

const Events = () => {
    const { t } = useTranslation()

    const [eventTab, setEventTab] = useState<EventTab>('all')

    const tabHandleChange = (_event: SyntheticEvent, newValue: EventTab) => {
        setEventTab(newValue)
    }

    const visibleEvents: EventEntity[] =
        eventTab === 'all'
            ? eventsData
            : eventsData.filter(event => event.deadlineStatus === eventTab)

    return (
        <Container>
            <TopBar>
                <Tabs value={eventTab} onChange={tabHandleChange}>
                    <Tab value="all" label={t('all')} />
                    <Tab value="unfinished" label={t('unfinished')} />
                    <Tab value="arrived" label={t('arrived')} />
                </Tabs>
                <Link to='/create-event'>
                <Button color="primary" variant="contained">
                    {t('createEvent')}
                </Button>
                </Link>
            </TopBar>
            <EventsContainer>
                {visibleEvents.map(event => (
                    <EventCard key={event.id} event={event} />
                ))}
            </EventsContainer>
        </Container>
    )
}

export default Events
