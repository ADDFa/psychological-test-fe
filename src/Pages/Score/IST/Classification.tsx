import { FC } from "react"
import ProgressBar from "../Components/ProgressBar"

const Classification: FC<ISTScore.Classification> = ({ classification }) => {
    console.log(classification)
    const {
        comprehension,
        flexibility_of_thinking,
        memory_and_concentration,
        problem_analysis,
        verbal_logic
    } = classification

    return (
        <div className="col-md-5">
            <ProgressBar
                label="Daya Tangkap"
                color={comprehension < 3 ? "danger" : "primary"}
                value={comprehension}
            />
            <ProgressBar
                label="Analisa Masalah"
                color={problem_analysis < 3 ? "danger" : "primary"}
                value={problem_analysis}
            />
            <ProgressBar
                label="Fleksibilitas Berfikir"
                color={flexibility_of_thinking < 3 ? "danger" : "primary"}
                value={flexibility_of_thinking}
            />
            <ProgressBar
                label="Logika Verbal"
                color={verbal_logic < 3 ? "danger" : "primary"}
                value={verbal_logic}
            />
            <ProgressBar
                label="Mengingat dan Konsentrasi"
                color={memory_and_concentration < 3 ? "danger" : "primary"}
                value={memory_and_concentration}
            />
        </div>
    )
}

export default Classification
