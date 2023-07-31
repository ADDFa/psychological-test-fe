import { FC } from "react"
import ProgressBar from "../Components/ProgressBar"

const Classification: FC<ISTScore.Classification> = ({ classification }) => {
    const {
        comprehension,
        flexibility_of_thinking,
        memory_and_concentration,
        problem_analysis,
        verbal_logic
    } = classification

    const getWidth = (value: string) => {
        const valueNum = parseInt(value)
        if (isNaN(valueNum)) return 0

        return valueNum * 20
    }

    return (
        <>
            <ProgressBar
                label="Daya Tangkap"
                color={comprehension < 3 ? "danger" : "primary"}
                value={comprehension}
                width={getWidth(comprehension)}
            />
            <ProgressBar
                label="Analisa Masalah"
                color={problem_analysis < 3 ? "danger" : "primary"}
                value={problem_analysis}
                width={getWidth(problem_analysis)}
            />
            <ProgressBar
                label="Fleksibilitas Berfikir"
                color={flexibility_of_thinking < 3 ? "danger" : "primary"}
                value={flexibility_of_thinking}
                width={getWidth(flexibility_of_thinking)}
            />
            <ProgressBar
                label="Logika Verbal"
                color={verbal_logic < 3 ? "danger" : "primary"}
                value={verbal_logic}
                width={getWidth(verbal_logic)}
            />
            <ProgressBar
                label="Mengingat dan Konsentrasi"
                color={memory_and_concentration < 3 ? "danger" : "primary"}
                value={memory_and_concentration}
                width={getWidth(memory_and_concentration)}
            />
        </>
    )
}

export default Classification
