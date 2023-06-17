import { memo } from "react"
import logo from "../../Assets/logo-sp.webp"

const Overview = () => {
    return (
        <section className="overview text-center text-light bg-primary">
            <div className="pt-5">
                <h1>Tes Psikologi</h1>
                <img src={logo} alt="Psichological Test" />
            </div>
            <p className="fs-3 mb-0">Kami menyediakan Tes IST, MSDT & PAPI</p>
        </section>
    )
}

export default memo(Overview)
