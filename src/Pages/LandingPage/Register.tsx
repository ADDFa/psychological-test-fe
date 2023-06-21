import { Link } from "react-router-dom"
import Input from "../../Components/Input"
import InputCheck from "../../Components/InputCheck"
import { FC, FormEventHandler, memo } from "react"
import usePost from "../../Hooks/usePost"

const Register: FC<LandingPage.RegisterC> = ({ registerRef, handleForm }) => {
    const create = usePost()

    const register: FormEventHandler<HTMLFormElement> = async (evt) => {
        evt.preventDefault()
        create("register", evt.currentTarget)
    }

    return (
        <div ref={registerRef} className="d-none">
            <h1 className="text-center">REGISTER</h1>

            <form onSubmit={register}>
                <Input id="name" label="Nama" name="name" />
                <Input id="birthplace" label="Tempat Lahir" name="birthplace" />
                <Input
                    id="date_of_birth"
                    type="date"
                    label="Tanggal Lahir"
                    name="date_of_birth"
                    defaultValue="2000-01-01"
                />
                <Input
                    id="general_education"
                    label="Pendidikan Umum"
                    name="general_education"
                />
                <div>
                    <label className="col-md-12">Jenis Kelamin</label>

                    <div className="d-flex gap-3">
                        <InputCheck
                            id="laki-laki"
                            label="Laki-laki"
                            name="gender"
                            type="radio"
                            value={"L"}
                        />
                        <InputCheck
                            id="perempuan"
                            label="Perempuan"
                            name="gender"
                            type="radio"
                            value={"P"}
                        />
                    </div>
                </div>
                <Input
                    id="special_education"
                    label="Pendidikan Khusus"
                    name="special_education"
                />
                <Input id="username-reg" label="Username" name="username" />
                <Input
                    id="password-reg"
                    type="password"
                    label="Password"
                    name="password"
                />
                <p>
                    Sudah memiliki akun?{" "}
                    <Link to="#" onClick={handleForm}>
                        Sign In sekarang
                    </Link>
                </p>
                <button type="submit" className="btn btn-primary">
                    Registrasi
                </button>
            </form>
        </div>
    )
}

export default memo(Register)
