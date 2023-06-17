import Card from "./Card"

const Dashboard = () => {
    return (
        <div className="row gap-3" id="dashboard">
            <Card title="IST" to="/ist" totalTest={20} active />
            <Card title="MSDT" to="/msd" totalTest={10} />
            <Card title="PAPI" to="/papi" totalTest={30} />
        </div>
    )
}

export default Dashboard
