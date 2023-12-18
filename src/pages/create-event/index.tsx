// module
import { Breadcrumbs, Button, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
// custom
import DatePicker from '../../components/form/elements/date-picker'
import { BreadcrumbsLink, Container, FormWrapper } from './styled-components'
import ArrowLeft from '../../components/icons/arrow-left'
import Form from '../../components/form'
import {
    CreateEventForm,
    createEventFormInitialData,
    getCreateEventFormValidation,
    submit,
} from './functionality'
import NumericInput from '../../components/form/elements/numeric-input'

const CreateEvent = () => {
    const { t } = useTranslation()

    const createEventFormValidation = getCreateEventFormValidation(t)

    return (
        <Container>
            <FormWrapper>
                <Breadcrumbs separator={<ArrowLeft />}>
                    <BreadcrumbsLink to="/">{t('events')}</BreadcrumbsLink>
                    <Typography variant="h6" fontSize="16px">
                        {t('createEvent')}
                    </Typography>
                </Breadcrumbs>
                <Form<CreateEventForm>
                    useFormProps={{
                        defaultValues: createEventFormInitialData,
                    }}
                    validation={createEventFormValidation}
                    fieldsRenderer={data => (
                        <>
                            <DatePicker<CreateEventForm, any>
                                data={data}
                                label={t('startDate')}
                                name="startDate"
                            />
                            <DatePicker<CreateEventForm, any>
                                data={data}
                                label={t('visionDate')}
                                name="visionDate"
                            />
                            <NumericInput<CreateEventForm>
                                data={data}
                                label={t('grouping')}
                                name="grouping"
                            />
                            <Button
                                size="large"
                                onClick={data.handleSubmit(formData =>
                                    submit(formData, t),
                                )}
                            >
                                {t('create')}
                            </Button>
                        </>
                    )}
                />
            </FormWrapper>
        </Container>
    )
}

export default CreateEvent
