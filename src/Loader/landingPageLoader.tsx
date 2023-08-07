import { redirect } from "react-router-dom"
import Auth from "../Functions/Auth"

const landingPageLoader = () => {
    if (Auth.token_access) {
        const role = Auth.auth?.role
        const path = role === "admin" ? "/admin/dashboard" : "/dashboard"

        return redirect(path)
    }
    return null
}

export default landingPageLoader
