import useGet from "../../Hooks/useGet"
import Card from "./Card"

const Dashboard = () => {
    const exams = useGet("exam")

    return (
        <div className="row gap-3" id="dashboard">
            {exams.map(({ exam, active }, i) => (
                <Card key={i} title={exam} to={exam} active={active} />
            ))}
        </div>
    )
}

export default Dashboard
