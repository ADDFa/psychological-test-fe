import { Button, Form } from "react-bootstrap"
import { post } from "../../Functions/api"
import { el } from "../../Functions/global"
import { useContext } from "react"
import { ActiveContext } from "../LandingPage"
import { Toast } from "../../Functions/alerts"

const Register = () => {
    const active = useContext(ActiveContext)

    const register = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()

        const res = await post("register", evt.currentTarget)
        return res
            ? Toast.fire({
                  icon: "success",
                  text: "Berhasil Mendaftar"
              })
            : null
    }

    return (
        <Form className="col-md-10" onSubmit={register}>
            <h1 className="fs-2 text-center my-3">REGISTER</h1>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="name">Nama</Form.Label>
                <Form.Control
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jhon Nie"
                ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="username">Username</Form.Label>
                <Form.Control
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Jhon-Nie123"
                ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Rahasia"
                ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="birthplace">Tempat Lahir</Form.Label>
                <Form.Control
                    id="birthplace"
                    name="birthplace"
                    type="text"
                    placeholder="Kota Bengkulu"
                ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="date_of_birth">Tanggal Lahir</Form.Label>
                <Form.Control
                    id="date_of_birth"
                    name="date_of_birth"
                    type="date"
                ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="general_education">
                    Pendidikan Umum
                </Form.Label>
                <Form.Control
                    id="general_education"
                    name="general_education"
                    type="text"
                    placeholder="SD-SMP-SMA"
                ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="special_education">
                    Pendidikan Khusus
                </Form.Label>
                <Form.Control
                    id="special_education"
                    name="special_education"
                    type="text"
                    placeholder="E-LEARNING"
                ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="gender">Jenis Kelamin</Form.Label>
                <Form.Select name="gender" id="gender">
                    <option value="P">Perempuan</option>
                    <option value="L">Laki-laki</option>
                </Form.Select>
            </Form.Group>
            <div className="d-flex justify-content-end mt-5">
                <Button variant="outline-light" type="submit">
                    Register
                </Button>
            </div>
        </Form>
    )
}

export default Register
