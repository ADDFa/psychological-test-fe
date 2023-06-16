export const el = <T extends HTMLElement>(element: string) =>
    document.querySelector(element) as T
