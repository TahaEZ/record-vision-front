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
    deadlineStatus: 'arrived' | 'unfinished'
}

export default EventEntity
