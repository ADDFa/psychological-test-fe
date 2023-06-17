import { Link, useNavigate } from "react-router-dom"
import Input from "../../Components/Input"
import Api from "../../Functions/Api"
import { FC, memo } from "react"

const Login: FC<LandingPage.LoginC> = ({ loginRef, handleForm }) => {
    const navigate = useNavigate()

    const login: React.FormEventHandler<HTMLFormElement> = async (evt) => {
        evt.preventDefault()
        Api.post("login", evt.currentTarget).then((res) => {
            if (res.ok) return navigate("/dashboard")
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
                <button type="submit" className="btn btn-primary">
                    Sign In
                </button>
            </form>
        </div>
    )
}

export default memo(Login)
