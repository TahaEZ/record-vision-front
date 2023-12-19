// custom
import { useTranslation } from 'react-i18next'
import { Button, Modal } from '@mui/material'
import { useState } from 'react'
// custom
import EventEntity from '../../entities/evnet-entity'
import {
    EventCardRow,
    EventCardText,
    EventCardTextButton,
    ModalContainer,
    Wrapper,
} from './styled-components'

type EventCardProps = {
    event: EventEntity
    onRemove: (id: number) => Promise<void> | void
}

const EventCard = ({ event, onRemove }: EventCardProps) => {
    const { t } = useTranslation()
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

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
                    primaryColor={event.deadlineStatus === 'ARRIVED'}
                >
                    {t(event.deadlineStatus)}
                </EventCardText>
            </EventCardRow>
            <EventCardRow>
                <EventCardTextButton onClick={() => setModalIsOpen(true)}>
                    {t('more')}...
                </EventCardTextButton>
            </EventCardRow>
            <Button color="error" onClick={() => onRemove(event.id)}>
                {t('delete')}
            </Button>
            <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
                <ModalContainer>
                    <Wrapper isLarge density="comfortable">
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
                            <EventCardText>
                                {event.vision.grouping}
                            </EventCardText>
                        </EventCardRow>
                        <EventCardRow>
                            <EventCardText>{t('status')}:</EventCardText>
                            <EventCardText
                                primaryColor={
                                    event.deadlineStatus === 'ARRIVED'
                                }
                            >
                                {t(event.deadlineStatus)}
                            </EventCardText>
                        </EventCardRow>
                        <EventCardRow>
                            <EventCardText>
                                {t('groupingNumber')}:
                            </EventCardText>
                            <EventCardText>
                                {event.groupingNumber}
                            </EventCardText>
                        </EventCardRow>
                        <EventCardRow>
                            <EventCardText>{t('groupingDay')}:</EventCardText>
                            <EventCardText>{event.groupingDay}</EventCardText>
                        </EventCardRow>
                        <EventCardRow>
                            <EventCardText>
                                {t('daysToEndGrouping')}:
                            </EventCardText>
                            <EventCardText>
                                {event.daysToEndGrouping}
                            </EventCardText>
                        </EventCardRow>
                        <EventCardRow>
                            <EventCardText>
                                {t('daysToEndVision')}:
                            </EventCardText>
                            <EventCardText>
                                {event.daysToEndVision}
                            </EventCardText>
                        </EventCardRow>
                        <EventCardRow>
                            <EventCardText>{t('goneDays')}:</EventCardText>
                            <EventCardText>{event.goneDays}</EventCardText>
                        </EventCardRow>
                    </Wrapper>
                </ModalContainer>
            </Modal>
        </Wrapper>
    )
}

export default EventCard
