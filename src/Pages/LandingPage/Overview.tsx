import { Link } from "react-router-dom"
import logo from "../../Assets/logo-sp.webp"
import Input from "../../Components/Input"
import InputCheck from "../../Components/InputCheck"
import { useRef } from "react"

const Overview = () => {
    const loginRef = useRef<HTMLDivElement>(null)
    const registerRef = useRef<HTMLDivElement>(null)
    const goTo = (target: "login" | "register") => {
        let oneE = loginRef
        let twoE = registerRef

        if (target === "login") {
            oneE = registerRef
            twoE = loginRef
        }

        oneE.current?.classList.add("d-none")
        twoE.current?.classList.remove("d-none")
    }

    return (
        <div className="landing-page">
            <section className="overview text-center text-light bg-primary">
                <div className="pt-5">
                    <h1>Tes Psikologi</h1>
                    <img src={logo} alt="Psichological Test" />
                </div>
                <p className="fs-3 mb-0">
                    Kami menyediakan Tes IST, MSDT & PAPI
                </p>
            </section>
            <div className="background" />
            <section className="row container justify-content-end mx-auto mb-5 mh-25">
                <div className="col-md-5"></div>
                <div className="col-md-5" ref={loginRef}>
                    <h1 className="text-center">LOGIN</h1>

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
                            <Link to="#" onClick={() => goTo("register")}>
                                registrasi sekarang
                            </Link>
                        </p>
                        <button type="submit" className="btn btn-primary">
                            Sign In
                        </button>
                    </form>
                </div>
                <div className="col-md-5 d-none" ref={registerRef}>
                    <h1 className="text-center">REGISTER</h1>

                    <form>
                        <Input id="name" label="Nama" name="name" />
                        <Input
                            id="birthplace"
                            label="Tempat Lahir"
                            name="birthplace"
                        />
                        <Input
                            id="date_of_birth"
                            type="date"
                            label="Tanggal Lahir"
                            name="date_of_birth"
                        />
                        <Input
                            id="Pendidikan Umum"
                            label="general_education"
                            name="Pendidikan Umum"
                        />
                        <Input
                            id="Pendidikan Khusus"
                            label="special_education"
                            name="Pendidikan Khusus"
                        />
                        <Input
                            id="username-reg"
                            label="Username"
                            name="username"
                        />
                        <div>
                            <label className="col-md-12">Jenis Kelamin</label>

                            <div className="d-flex gap-3">
                                <InputCheck
                                    id="laki-laki"
                                    label="Laki-laki"
                                    name="gender"
                                    type="radio"
                                />
                                <InputCheck
                                    id="perempuan"
                                    label="Perempuan"
                                    name="gender"
                                    type="radio"
                                />
                            </div>
                        </div>
                        <Input
                            id="password-reg"
                            type="password"
                            label="Password"
                            name="password"
                        />
                        <p>
                            Sudah memiliki akun?{" "}
                            <Link to="#" onClick={() => goTo("login")}>
                                Sign In sekarang
                            </Link>
                        </p>
                        <button type="submit" className="btn btn-primary">
                            Sign In
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Overview
