export const el = (el: string) => {
    const element = document.querySelector(`${el}`)
    return element ? (element as HTMLElement) : null
}
