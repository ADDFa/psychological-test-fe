import { FC } from "react"
import { getDateFormat } from "../../../Functions/getDateFormat"

const InfoUser: FC<ISTScore.InfoUser> = ({ user, createdTest }) => {
    return (
        <div>
            <table className="table">
                <tbody>
                    <tr>
                        <th scope="col">Nama</th>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <th scope="col">TTL</th>
                        <td>{`${user.birthplace}, ${user.date_of_birth}`}</td>
                    </tr>
                    <tr>
                        <th className="col">Tgl Tes</th>
                        <td>{getDateFormat(createdTest)}</td>
                    </tr>
                    <tr>
                        <th className="col">Pendidikan</th>
                        <td>{user.general_education}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default InfoUser
