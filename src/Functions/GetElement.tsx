export const el = <T extends HTMLElement>(element: string) => {
    return document.querySelector(element) as T
}

export const elAll = <T extends HTMLElement>(element: string) => {
    return document.querySelectorAll(element) as NodeListOf<T>
}
