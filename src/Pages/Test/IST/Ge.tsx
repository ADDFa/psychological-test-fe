import { FC, useState } from "react"
import useSaveAnswer from "../Hooks/useSaveAnswer"

const Ge: FC<Test.Question> = ({ questions }) => {
    const saveAnswer = useSaveAnswer()
    const [delayed, setDelayed] = useState<NodeJS.Timeout>()
    const handleSave = (input: HTMLInputElement, id: string) => {
        if (delayed) clearInterval(delayed)

        setDelayed(
            setTimeout(() => {
                saveAnswer({
                    answer: input.value,
                    category: "ge",
                    question_id: id
                })
            }, 500)
        )
    }

    return (
        <>
            {questions.map(({ first_word, second_word, answer, id }, i) => (
                <div
                    className={`my-5 ${i === 0 ? "active" : "d-none"}`}
                    key={i}
                    data-id={id}
                    data-name="question"
                >
                    <p>
                        <span>{first_word}</span>
                        <span className="mx-3">-</span>
                        <span>{second_word}</span>
                    </p>

                    <div className="my-3 answer-ge">
                        <label htmlFor="ge-example-answer">Jawaban</label>
                        <input
                            type="text"
                            id="ge-example-answer"
                            defaultValue={answer}
                            onInput={(evt) => handleSave(evt.currentTarget, id)}
                            autoComplete="off"
                        />
                    </div>
                </div>
            ))}
        </>
    )
}

export default Ge
