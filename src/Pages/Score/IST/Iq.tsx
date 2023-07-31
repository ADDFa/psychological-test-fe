import { FC } from "react"

const Iq: FC<ISTScore.Iq> = ({ iqNorma }) => {
    return (
        <div className="border mx-auto text-center p-2 rounded-3 mb-5">
            <h1 className="text-primary fs-5">IQ</h1>

            <h3
                className={`fs-1 text-${
                    iqNorma.iq > 70 ? "success" : "danger"
                }`}
            >
                {iqNorma.iq}
            </h3>
            <p>{iqNorma.category}</p>
        </div>
    )
}

export default Iq
