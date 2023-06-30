import { useLoaderData } from "react-router-dom"
import Card from "./Card"

const Dashboard = () => {
    const exams = useLoaderData() as Api.Result[]

    return (
        <div className="row gap-3" id="dashboard">
            {exams.map(({ exam, active, id }) => (
                <Card key={id} title={exam} to={exam} active={active} />
            ))}
        </div>
    )
}

export default Dashboard
