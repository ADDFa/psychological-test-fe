class Auth {
    public static set token_access(token: string) {
        localStorage.setItem("token_access", token)
    }

    public static get token_access() {
        return localStorage.getItem("token_access") || ""
    }

    public static set token_refresh(token: string) {
        localStorage.setItem("token_refresh", token)
    }

    public static get token_refresh() {
        return localStorage.getItem("token_refresh") || ""
    }
}

export default Auth
