import { redirect } from "react-router-dom"
import Auth from "../Functions/Auth"

const landingPageLoader = () => {
    return Auth.token_access ? redirect("/dashboard") : null
}

export default landingPageLoader
