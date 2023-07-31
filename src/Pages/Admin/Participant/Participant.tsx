import { useEffect, useState } from "react"
import Api from "../../../Functions/Api"
import Spinner from "../../../Components/Spinner"
import { Link } from "react-router-dom"
import { getDateFormat } from "../../../Functions/getDateFormat"

const Participant = () => {
    const [participants, setParticipants] = useState<Api.Result[]>()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        Api.handle("user-test")
            .then((res) => {
                setParticipants(res.result)
            })
            .finally(() => setLoading(false))
    }, [])

    return (
        <>
            <h1 className="fs-4 fw-bold mb-4">Daftar Peserta Tes</h1>

            {loading && <Spinner />}

            {participants && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Jenis Kelamin</th>
                            <th scope="col">Tanggal Lahir</th>
                            <th scope="col">Tanggal Tes</th>
                            <th scope="col">Pendidikan</th>
                            <th scope="col">Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {participants.map(
                            (
                                {
                                    user: {
                                        name,
                                        gender,
                                        date_of_birth,
                                        general_education,
                                        id
                                    },
                                    created_at,
                                    exam_id
                                },
                                i
                            ) => (
                                <tr key={i}>
                                    <th scope="row">{++i}</th>
                                    <td>{name}</td>
                                    <td>{gender}</td>
                                    <td>{date_of_birth}</td>
                                    <td>{getDateFormat(created_at)}</td>
                                    <td>{general_education}</td>
                                    <td>
                                        <Link
                                            to={`/admin/participant/${exam_id}/${id}`}
                                            className="btn btn-primary text-light"
                                        >
                                            <i className="bi bi-eye-fill" />
                                        </Link>
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            )}
        </>
    )
}

export default Participant
