import { FC } from "react"

const AnswersRow: FC<{ answers?: Api.Result[]; category: string }> = ({
    answers,
    category
}) => {
    if (!answers) return <></>

    return (
        <>
            {answers.map(({ answer, correct, point }, i) => (
                <tr key={i}>
                    <th className="text-center" scope="row">
                        {++i}
                    </th>
                    <td className="text-center">{answer}</td>
                    <td className="text-center">{correct || point}</td>
                    <td className="text-center">{category}</td>
                </tr>
            ))}
        </>
    )
}

export default AnswersRow
