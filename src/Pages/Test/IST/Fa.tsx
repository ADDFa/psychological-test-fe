import { FC } from "react"
import ImageQuestion from "./Components/ImageQuestion"

const Fa: FC<Test.Question> = ({ questions }) => {
    return <ImageQuestion questions={questions} category="fa" />
}

export default Fa
