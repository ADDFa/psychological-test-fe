import { Button, Form } from "react-bootstrap"
import { post } from "../../Functions/api"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()

    const login = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()

        const data = await post("login", evt.currentTarget)
        if (!data) return

        // navigate to dashboard
        navigate("/dashboard")
    }

    return (
        <Form className="col-md-10" onSubmit={login}>
            <h1 className="text-center my-3 fs-2">LOGIN</h1>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="username">Username</Form.Label>
                <Form.Control
                    id="username"
                    type="text"
                    name="username"
                    required
                    placeholder="Jhon Nie"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control
                    id="password"
                    type="password"
                    name="password"
                    required
                    placeholder="Secret Password"
                />
            </Form.Group>
            <div className="d-flex justify-content-end mt-5">
                <Button variant="outline-light" type="submit">
                    Login
                </Button>
            </div>
        </Form>
    )
}

export default Login
