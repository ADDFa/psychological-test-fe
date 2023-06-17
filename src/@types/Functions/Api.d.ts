declare namespace Api {
    interface Response {
        ok: boolean
        status: number
        statusText: string
        result: Record<string, any>
    }

    type MethodT = "GET" | "POST"
}
