import { FC } from "react"
import ImageQuestion from "./Components/ImageQuestion"

const Wu: FC<Test.Question> = ({ questions }) => {
    return <ImageQuestion questions={questions} category="wu" />
}

export default Wu
