import Card from "./Card"
import Api from "../../Functions/Api"
import { useEffect, useState } from "react"
import Spinner from "../../Components/Spinner"

const Dashboard = () => {
    const [exams, setExams] = useState<Api.Result[]>()

    useEffect(() => {
        Api.handle("exam")
            .then((res) => {
                if (res.status === 200) setExams(res.result)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className="row gap-3" id="dashboard">
            {!exams && (
                <div className="my-5">
                    <Spinner />
                </div>
            )}
            {exams?.map(({ exam, active, id }) => (
                <Card
                    key={id}
                    title={exam}
                    to={exam}
                    active={parseInt(active) === 0 ? false : true}
                />
            ))}
        </div>
    )
}

export default Dashboard
