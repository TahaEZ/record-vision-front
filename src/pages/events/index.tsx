// module
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
// custom
import { Button, Tab, Tabs } from '@mui/material'
import EventCard from '../../components/event-card'
import { Container, EventsContainer, TopBar } from './styled-components'
import { Link } from 'react-router-dom'
import {
    EventTab,
    onEventRemove,
    tabHandleChange,
    useEvents,
} from './functionality'

const Events = () => {
    const { t } = useTranslation()

    const [eventTab, setEventTab] = useState<EventTab>('ALL')

    const [events, setEvents] = useEvents(eventTab)

    return (
        <Container>
            <TopBar>
                <Tabs
                    value={eventTab}
                    onChange={(_event, newValue) =>
                        tabHandleChange(newValue, setEventTab)
                    }
                >
                    <Tab value="ALL" label={t('all')} />
                    <Tab value="UNFINISHED" label={t('UNFINISHED')} />
                    <Tab value="ARRIVED" label={t('ARRIVED')} />
                </Tabs>
                <Link to="/create-event">
                    <Button color="primary" variant="contained">
                        {t('createEvent')}
                    </Button>
                </Link>
            </TopBar>
            <EventsContainer>
                {events.map(event => (
                    <EventCard
                        key={event.id}
                        event={event}
                        onRemove={id => onEventRemove(id, setEvents, t)}
                    />
                ))}
            </EventsContainer>
        </Container>
    )
}

export default Events
