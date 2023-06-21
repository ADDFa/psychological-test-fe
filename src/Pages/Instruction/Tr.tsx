import { FC } from "react"

const Tr: FC<Instruction.Tr> = ({ content, head }) => {
    return (
        <tr>
            <th className="col-md-2">{head}</th>
            <td>{content}</td>
        </tr>
    )
}

export default Tr
