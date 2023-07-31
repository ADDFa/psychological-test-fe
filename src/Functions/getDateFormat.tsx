export const getDateFormat = (testDateValue?: string) => {
    if (!testDateValue) return

    const testDate = new Date(testDateValue)

    const setZero = (number: number) => {
        return number < 10 ? `0${number}` : number
    }

    const date = setZero(testDate.getDate())
    const month = setZero(testDate.getMonth() + 1)
    const year = setZero(testDate.getFullYear())

    return `${date}-${month}-${year}`
}
