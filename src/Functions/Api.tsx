import { Alert } from "./Alert"
import Auth from "./Auth"

class Api {
    static base_api = "http://127.0.0.1:8000/api"
    static endpoint = ""
    static method: Api.MethodT = "GET"
    static body: BodyInit
    static form: HTMLFormElement

    public static fetcingData(): Promise<Api.Response> {
        return new Promise((resolve, reject) => {
            fetch(`${this.base_api}/${this.endpoint}`, {
                method: this.method,
                body: this.body,
                headers: {
                    Authorization: `Bearer ${Auth.token_access}`
                }
            })
                .then(async (res) => ({
                    ok: res.ok,
                    status: res.status,
                    statusText: res.statusText,
                    result: await res.json()
                }))
                .then((res) => {
                    res.ok ? resolve(res) : reject(res)
                })
        })
    }

    public static handleRequest = async () => {
        try {
            const res = await this.fetcingData()

            if ("message" in res.result) {
                Alert.fire({
                    icon: "success",
                    text: res.result.message
                })
            }
            return res
        } catch (e: any) {
            const result = e.result
            if (!result) return e as Api.Response

            if ("errors" in result) {
                const { errors } = result
                for (const err in errors) {
                    const elementE = this.form.querySelector(`[name="${err}"]`)
                    elementE?.classList.add("is-invalid")
                    const errorFeedbackE = document.createElement("p")
                    errorFeedbackE.textContent = errors[err]
                    errorFeedbackE.classList.add("invalid-feedback")
                    elementE?.parentElement?.append(errorFeedbackE)
                }
            }
            if ("message" in result) {
                if (e.status >= 400 && e.status < 500) {
                    Alert.fire({
                        icon: "warning",
                        text: result.message
                    })
                }
                if (e.status >= 500) {
                    Alert.fire({
                        icon: "error",
                        text: result.message
                    })
                }
            }

            return e as Api.Response
        }
    }

    public static get(endpoint: string) {
        this.method = "GET"
        this.endpoint = endpoint
        return this.handleRequest()
    }

    public static post(endpoint: string, body: HTMLFormElement) {
        this.method = "POST"
        this.endpoint = endpoint
        this.form = body
        this.body = new FormData(body)
        return this.handleRequest()
    }
}

export default Api
