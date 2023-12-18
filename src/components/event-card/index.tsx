// custom
import { useTranslation } from 'react-i18next'
import EventEntity from '../../entities/evnet-entity'
import { EventCardRow, EventCardText, Wrapper } from './styled-components'
import { Button } from '@mui/material'

type EventCardProps = {
    event: EventEntity
}

const EventCard = ({ event }: EventCardProps) => {
    const { t } = useTranslation()

    return (
        <Wrapper>
            <EventCardRow>
                <EventCardText>{t('startDate')}:</EventCardText>
                <EventCardText dir="ltr">
                    {event.year} / {event.month} / {event.day}
                </EventCardText>
            </EventCardRow>
            <EventCardRow>
                <EventCardText>{t('vision')}:</EventCardText>
                <EventCardText dir="ltr">
                    {event.vision.year} / {event.vision.month} /{' '}
                    {event.vision.day}
                </EventCardText>
            </EventCardRow>
            <EventCardRow>
                <EventCardText>{t('grouping')}:</EventCardText>
                <EventCardText>{event.vision.grouping}</EventCardText>
            </EventCardRow>
            <EventCardRow>
                <EventCardText>{t('status')}:</EventCardText>
                <EventCardText
                    primaryColor={event.deadlineStatus === 'arrived'}
                >
                    {t(event.deadlineStatus)}
                </EventCardText>
            </EventCardRow>
            <Button color='error'>
                {t('delete')}
            </Button>
        </Wrapper>
    )
}

export default EventCard
