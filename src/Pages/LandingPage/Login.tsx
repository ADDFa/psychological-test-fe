import { Link, useNavigate } from "react-router-dom"
import Input from "../../Components/Input"
import { FC, memo } from "react"
import Api from "../../Functions/Api"
import Auth from "../../Functions/Auth"
import HandleError from "../../Functions/HandleError"
import ButtonLoader from "../../Components/ButtonLoader"

const Login: FC<LandingPage.LoginC> = ({ loginRef, handleForm }) => {
    const navigate = useNavigate()

    const login: ButtonLoaderAction = (evt, activedButton) => {
        const form = evt.currentTarget.form as HTMLFormElement

        Api.post("login", form).then((res) => {
            if (!res.ok) {
                activedButton()
                return new HandleError(res, form).show()
            }
            Auth.setAuth(res)

            if (Auth.auth?.role === "admin") {
                console.log("admin login")
                return navigate("/admin/dashboard")
            }

            navigate("/dashboard")
        })
    }

    return (
        <div ref={loginRef}>
            <h1 className="text-center mb-5">LOGIN</h1>

            <form>
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

                <ButtonLoader action={login} text="Login" />
            </form>
        </div>
    )
}

export default memo(Login)
