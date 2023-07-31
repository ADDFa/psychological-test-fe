import CardAdmin from "./CardAdmin"

const Dashboard = () => {
    return (
        <div className="row gap-3">
            <div className="col-md">
                <CardAdmin content="3" to="/admin/exam" title="Jumlah Tes" />
            </div>
            <div className="col-md">
                <CardAdmin
                    content="200"
                    to="/admin/participant"
                    title="Jumlah Peserta"
                />
            </div>
        </div>
    )
}

export default Dashboard
