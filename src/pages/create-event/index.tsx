// module
import { useState } from 'react'
import { Breadcrumbs, Button, Typography } from '@mui/material'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
// custom
import DatePicker from '../../components/date-picker'
import { BreadcrumbsLink, Container, FormWrapper } from './styled-components'
import ArrowLeft from '../../components/icons/arrow-left'
import isValidDate from '../../utils/isDateInvalid'

const CreateEvent = () => {
    const { t } = useTranslation()
    const [eventDate, setEventDate] = useState<Date | null>(null)

    const submit = async () => {
        if (isValidDate(eventDate)) {
            toast.error(t('enterAValidDate'))
            return
        }

        console.log(eventDate)
    }

    return (
        <Container>
            <FormWrapper>
                <Breadcrumbs separator={<ArrowLeft />}>
                    <BreadcrumbsLink to="/">{t('events')}</BreadcrumbsLink>
                    <Typography variant="h6" fontSize="16px">
                        {t('createEvent')}
                    </Typography>
                </Breadcrumbs>
                <DatePicker value={eventDate} onChange={setEventDate} />
                <Button size="large" onClick={submit}>
                    {t('create')}
                </Button>
            </FormWrapper>
        </Container>
    )
}

export default CreateEvent
