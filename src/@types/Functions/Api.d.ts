namespace Api {
    type Result = Record<string, any>

    interface Response {
        status: number
        result: any
        ok: boolean
    }
}
