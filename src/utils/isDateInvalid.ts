const isValidDate = (date: any) => {
    return date === null || (date instanceof Date && isNaN(date.getTime()))
}

export default isValidDate
