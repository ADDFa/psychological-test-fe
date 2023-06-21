import Api from "../Functions/Api"
import HandleError from "../Functions/HandleError"

const usePost = () => {
    return async (
        endpoint: string,
        body: HTMLFormElement,
        action?: (res: Api.Response) => void
    ) => {
        const res = await Api.handle(endpoint, {
            method: "POST",
            body: new FormData(body)
        })
        if (action) action(res)
        console.log(res)
        new HandleError(res, body).show()
    }
}

export default usePost
