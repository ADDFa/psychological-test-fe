import { FC } from "react"
import { Link } from "react-router-dom"

const CardAdmin: FC<Dashboard.CardAdminT> = ({
    content,
    title,
    to,
    textLink
}) => {
    return (
        <div className="card">
            <div className="card-header">{title}</div>
            <div className="card-body">
                <h1 className="mb-3">{content}</h1>

                <div className="text-end">
                    <Link className="btn btn-primary px-4 text-light" to={to}>
                        {textLink || "Lihat"}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardAdmin
