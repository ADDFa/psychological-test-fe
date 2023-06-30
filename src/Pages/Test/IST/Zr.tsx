import { FC } from "react"
import Numbers from "../Components/Numbers"
import useSaveAnswer from "../Hooks/useSaveAnswer"

const Zr: FC<Test.Question> = ({ questions }) => {
    const saveAnswer = useSaveAnswer()

    return (
        <>
            {questions.map(
                (
                    {
                        id,
                        first_number,
                        second_number,
                        thrid_number,
                        fourth_number,
                        fifth_number,
                        sixth_number,
                        seventh_number,
                        answer
                    },
                    i
                ) => (
                    <div
                        className={`my-5 ${i === 0 ? "active" : "d-none"}`}
                        data-id={id}
                        key={id}
                        data-name="question"
                    >
                        <div className="mb-5">
                            <p>Soal</p>
                            <div className="numbers">
                                <span className="box-border">
                                    {first_number}
                                </span>
                                <span className="box-border">
                                    {second_number}
                                </span>
                                <span className="box-border">
                                    {thrid_number}
                                </span>
                                <span className="box-border">
                                    {fourth_number}
                                </span>
                                <span className="box-border">
                                    {fifth_number}
                                </span>
                                <span className="box-border">
                                    {sixth_number}
                                </span>
                                <span className="box-border">
                                    {seventh_number}
                                </span>
                                <span className="box-border">?</span>
                            </div>
                        </div>

                        <div>
                            <p>Jawaban</p>
                            <Numbers
                                defaultSelect={answer}
                                onSelect={({ selected }) =>
                                    saveAnswer({
                                        answer: selected,
                                        category: "zr",
                                        question_id: id
                                    })
                                }
                            />
                        </div>
                    </div>
                )
            )}
        </>
    )
}

export default Zr
