type Api = {
    getEvents: (status: 'ALL' | 'UNFINISHED' | 'ARRIVED') => string
    createEvent: () => string
    getEvent: (id: number) => string
    removeEvent: (id: number) => string
}

const api: Api = {
    getEvent: (id: number) => `/get/${id}`,
    createEvent: () => '/create',
    getEvents: (status: 'ALL' | 'UNFINISHED' | 'ARRIVED') =>
        `/getEvents?status=${status}`,
    removeEvent: (id: number) => `/remove/${id}`,
}

export default api
