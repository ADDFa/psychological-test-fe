import Auth from "./Auth"

class Api {
    private static baseApi = "http://127.0.0.1:8000/api"

    private static async generateToken() {
        return await this.fetchingData("refresh-token", {
            method: "POST",
            body: JSON.stringify({
                token: Auth.token_refresh
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(async (res) => {
            if (res.status !== 200) {
                localStorage.clear()
                window.location.href = "/"
            }
            Auth.setAuth(res)
        })
    }

    public static get base_api() {
        return this.baseApi
    }

    public static fetchingData(
        endpoint: string,
        { headers, ...rest }: RequestInit
    ): Promise<Api.Response> {
        return new Promise(async (resolve, reject) => {
            let result = await fetch(`${this.baseApi}/${endpoint}`, {
                ...rest,
                headers: {
                    Authorization: `Bearer ${Auth.token_access}`,
                    ...headers
                }
            })

            const response: Api.Response = {
                status: result.status,
                result: await result.json(),
                ok: result.ok
            }

            if (!response.ok) console.log(response)

            return result.ok ? resolve(response) : reject(response)
        })
    }

    private static get isExpired(): boolean {
        const date = new Date()
        const now = Math.ceil(date.getTime() / 1000)
        const auth = Auth.auth
        if (!auth) return false

        return now > auth.exp
    }

    public static async handle(
        endpoint: string,
        init: RequestInit = {}
    ): Promise<Api.Response> {
        try {
            if (this.isExpired) {
                await this.generateToken()
                return this.fetchingData(endpoint, init)
            } else {
                return await this.fetchingData(endpoint, init)
            }
        } catch (e: any) {
            return e
        }
    }

    public static async image(filename: string): Promise<string> {
        return new Promise(async (resolve, reject) => {
            if (this.isExpired) await this.generateToken()

            fetch(`${this.base_api}/question/image/${filename}`, {
                headers: {
                    Authorization: `Bearer ${Auth.token_access}`
                }
            })
                .then(async (res) => {
                    const { ok } = res
                    let response
                    if (ok) {
                        response = {
                            ok,
                            file: await res.blob(),
                            res: null
                        }
                    } else {
                        response = {
                            ok,
                            file: null,
                            res: await res.json()
                        }
                    }
                    return response
                })
                .then((res) => {
                    return res.ok
                        ? resolve(URL.createObjectURL(res.file))
                        : reject(res)
                })
                .catch((res) => {
                    reject(res)
                })
        })
    }

    public static post(
        endpoint: string,
        body: HTMLFormElement
    ): Promise<Api.Response> {
        return this.handle(endpoint, {
            method: "POST",
            body: new FormData(body)
        })
    }
}

export default Api
