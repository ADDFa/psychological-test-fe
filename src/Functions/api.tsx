import handleErrors from "./handleErrors"

const BASE_API = "http://127.0.0.1:8000/api"

const fetchingData = (endpoint: string, init: RequestInit) => {
    return new Promise((resolve, reject) => {
        fetch(`${BASE_API}/${endpoint}`, init)
            .then(async (res) => {
                const { ok, status, statusText } = res
                return {
                    ok,
                    status,
                    statusText,
                    data: await res.json()
                } as Api.Response
            })
            .then((res) => {
                return res.ok ? resolve(res) : reject(res)
            })
    })
}

const handleRequest = async (endpoint: string, init?: RequestInit) => {
    try {
        const res = await fetchingData(endpoint, {
            ...init,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token_access")}`
            }
        })
        return res
    } catch (e: any) {
        handleErrors(e)
    }
}

export const get = async (endpoint: string) => {
    return await handleRequest(endpoint, {
        method: "GET"
    })
}

export const post = async (endpoint: string, body: HTMLFormElement) => {
    return await handleRequest(endpoint, {
        method: "POST",
        body: new FormData(body)
    })
}
