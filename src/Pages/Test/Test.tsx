import { MouseEventHandler, Suspense, useEffect, useRef } from "react"
import { useLoaderData, useNavigate } from "react-router-dom"
import Time from "./Components/Time"

const Test = () => {
    const navigate = useNavigate()
    const refQuestionParent = useRef<HTMLDivElement>(null)
    const refNavigationNumber = useRef<HTMLDivElement>(null)
    const { questions, deadline, Question, next } =
        useLoaderData() as TestLoader

    const showQuestion = (question?: Element | null) => {
        question?.classList.remove("d-none")
        question?.classList.add("active")
    }

    const hiddenQuestion = (question?: Element | null) => {
        question?.classList.remove("active")
        question?.classList.add("d-none")
    }

    const handleNavigation: MouseEventHandler<HTMLDivElement> = (evt) => {
        const currTarget = evt.currentTarget
        const target = evt.target as HTMLButtonElement

        if (!target.classList.contains("number")) return

        currTarget.querySelector(".active")?.classList.remove("active")
        target.classList.add("active")

        const { id } = target.dataset
        hiddenQuestion(
            refQuestionParent.current?.querySelector(
                `[data-name="question"].active`
            )
        )
        showQuestion(
            refQuestionParent.current?.querySelector(
                `[data-name="question"][data-id="${id}"]`
            )
        )

        evt.target.dispatchEvent(
            new Event("navigate", {
                bubbles: true
            })
        )
    }

    useEffect(() => {
        refNavigationNumber.current?.firstElementChild?.classList.add("active")
    }, [])

    return (
        <div className="container my-5">
            <div className="row justify-content-between">
                {deadline && (
                    <Time
                        deadline={deadline.deadline}
                        onTimeOut={() => navigate(next)}
                    />
                )}
                <div className="col-md-5 d-flex justify-content-end mb-5">
                    <div
                        className="navigation-number row gap-2"
                        ref={refNavigationNumber}
                        onClick={handleNavigation}
                    >
                        {questions &&
                            questions.map(({ id, answer }, i) => (
                                <button
                                    key={id}
                                    className={`number text-center btn ${
                                        answer ? "btn-primary" : ""
                                    }`}
                                    data-id={id}
                                    data-name="navigation-number"
                                >
                                    {++i}
                                </button>
                            ))}
                    </div>
                </div>
            </div>

            <div className="col-md-8 mx-auto my-4" ref={refQuestionParent}>
                {questions && (
                    <Suspense>
                        <Question questions={questions} />
                    </Suspense>
                )}
            </div>
        </div>
    )
}

export default Test
