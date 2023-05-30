import { Toast } from "./alerts"
import { el } from "./global"

const errorMessage = (message: string) => {
    Toast.fire({
        icon: "error",
        text: message
    })
}

const errors = (errors: Record<string, string[]>) => {
    const showInvalid = (
        element: HTMLElement,
        name: string,
        message: string
    ) => {
        const id = `${name}Feedback`
        element.classList.add("is-invalid")
        element.setAttribute("aria-describedby", id)

        // cek apakah element sebelumnya sudah ada atau belum
        const oldElementInvalid =
            element.parentElement?.querySelector("p.invalid-feedback")
        if (oldElementInvalid) {
            oldElementInvalid.textContent = message
            return
        }

        const invalidFeedbackElement = document.createElement("p")
        invalidFeedbackElement.id = id
        invalidFeedbackElement.classList.add(
            "invalid-feedback",
            "text-light",
            "border-bottom",
            "border-danger"
        )
        invalidFeedbackElement.textContent = message

        element.parentElement?.append(invalidFeedbackElement)
        element.addEventListener("input", () => {
            element.classList.remove("is-invalid")
            element.parentElement?.querySelector("p.invalid-feedback")?.remove()
        })
    }

    for (const error in errors) {
        const element = el(`[name="${error}"]`)
        if (element) showInvalid(element, error, errors[error][0])
    }
}

const handleErrors = (res: Api.Response) => {
    if ("message" in res.data) errorMessage(res.data.message)
    if ("errors" in res.data) errors(res.data.errors)
}

export default handleErrors
