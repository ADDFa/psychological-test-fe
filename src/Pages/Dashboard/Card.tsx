import { Link } from "react-router-dom"

const Card: React.FC<Dashboard.CardT> = ({
    active = false,
    title,
    to,
    totalTest
}) => {
    return (
        <Link to={`/test/${to}`} className="col-md-3 p-3 rounded-3">
            <h4>{title}</h4>
            <p>Jumlah Tes : {totalTest}</p>
            <div className="status text-end">
                {active ? "Active" : "Tidak Aktif"}
            </div>
        </Link>
    )
}

export default Card
