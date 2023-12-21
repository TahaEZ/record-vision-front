type EventEntity = {
    id: number
    day: number
    month: number
    year: number
    vision: {
        day: number
        month: number
        year: number
        grouping: number
    }
    deadlineStatus: 'ARRIVED' | 'UNFINISHED'
    groupingNumber: number
    groupingDay: number
    daysToEndGrouping: number
    daysToEndVision: number
    goneDays: number
}

export default EventEntity

export type CreateEventEntity = {
    day: number
    month: number
    year: number
    vision: {
        day: number
        month: number
        year: number
        grouping: number
    }
}
