import { Link, useNavigate } from "react-router-dom"
import Input from "../../Components/Input"
import { FC, FormEventHandler, memo } from "react"
import Api from "../../Functions/Api"
import Auth from "../../Functions/Auth"
import HandleError from "../../Functions/HandleError"

const Login: FC<LandingPage.LoginC> = ({ loginRef, handleForm }) => {
    const navigate = useNavigate()

    const login: FormEventHandler<HTMLFormElement> = async (evt) => {
        evt.preventDefault()
        const form = evt.currentTarget

        Api.post("login", form).then((res) => {
            if (!res.ok) return new HandleError(res, form).show()

            Auth.setAuth(res)
            navigate("/dashboard")
        })
    }

    return (
        <div ref={loginRef}>
            <h1 className="text-center mb-5">LOGIN</h1>

            <form onSubmit={login}>
                <Input id="username" label="Username" name="username" />
                <Input
                    id="password"
                    type="password"
                    label="Password"
                    name="password"
                />
                <p>
                    Belum memiliki akun?{" "}
                    <Link to="#" onClick={handleForm}>
                        registrasi sekarang
                    </Link>
                </p>
                <button className="btn btn-primary">Sign In</button>
            </form>
        </div>
    )
}

export default memo(Login)
