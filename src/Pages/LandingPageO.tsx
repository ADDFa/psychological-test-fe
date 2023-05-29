import { Col, Container, Row } from "react-bootstrap"
import logo from "../Assets/logo-sp.webp"
import Navbar from "../Partials/Navbar"

const LandingPageO = () => {
    return (
        <>
            <header className="position-sticky top-0">
                <Navbar />
            </header>

            <Container>
                <Row className="align-items-center gap-3 justify-content-between mb-5">
                    <Col md={5}>
                        <p className="fw-bold text-danger">
                            SELAMAT DATANG DI WEBSITE SAHABAT PSIKOLOGI
                        </p>
                        <h1 className="fw-bold my-4">
                            Kami menyediakan layanan tes <span>IST</span>,{" "}
                            <span>MSDT</span>, & <span>PAPI</span>
                        </h1>
                        <p>
                            Tes yang dilaksanakan untuk mengukur kecerdasan
                            secara umum, kepribadian yang mengidentifikasi
                            karakteristik individu dalam konteks pekerjaan,
                            serta kemampuan spesifik yang mengevaluasi
                            keterampilan teknis dan mekanis.
                        </p>
                    </Col>
                    <Col md={5}>{/*  */}</Col>
                </Row>

                <Row className="align-items-center gap-3 justify-content-between">
                    <Col md={5}>
                        <h2 className="fw-bold text-center text-dark text-opacity-75">
                            Langkah-langkah Melakukan Tes
                        </h2>
                    </Col>
                    <Col md={5}>
                        <p>
                            Klik tombol login, lalu pilih link daftar sekarang
                        </p>
                        <p>Buat atau registrasi Akun</p>
                        <p>Login ke akun Anda</p>
                        <p>
                            Pilih menu Tes dan pilih Tes yang ingin anda
                            kerjakan
                        </p>
                        <p>Kerjakan Tes</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LandingPageO
