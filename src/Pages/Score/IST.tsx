import { useLoaderData } from "react-router-dom"
import Classification from "./IST/Classification"

const IST = () => {
    const data = useLoaderData() as Api.Result | null
    if (!data) return <></>

    const { classification, iq } = data

    return (
        <div className="ist-score">
            <h4 className="fw-bold mb-5">Hasil IST</h4>

            <div className="row justify-content-between">
                {classification && (
                    <Classification classification={classification} />
                )}
                {iq && (
                    <div className="col-md-5">
                        <div className="border mx-auto text-center p-2 rounded-3">
                            <h1 className="text-primary fs-5">IQ</h1>
                            <h3
                                className={`fs-1 text-${
                                    iq.norma.iq > 70 ? "success" : "danger"
                                }`}
                            >
                                {iq.norma.iq}
                            </h3>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default IST
