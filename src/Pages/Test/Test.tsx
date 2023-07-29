import { MouseEventHandler, Suspense, useEffect, useRef, useState } from "react"
import { useLoaderData, useNavigate } from "react-router-dom"
import Time from "./Components/Time"
import Api from "../../Functions/Api"
import Spinner from "../../Components/Spinner"

const Test = () => {
    const navigate = useNavigate()
    const refQuestionParent = useRef<HTMLDivElement>(null)
    const refNavigationNumber = useRef<HTMLDivElement>(null)
    const { Question, next, categoryName } = useLoaderData() as TestLoader
    const [question, setQuestion] = useState<Api.Result>()
    const [errorMessage, setErrorMessage] = useState<string>()
    const [loading, setLoading] = useState<boolean>(true)

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
        Api.handle(`exam/${categoryName}/do-the-exam`, {
            method: "POST"
        })
            .then((res) => {
                if (res.status === 200) {
                    refNavigationNumber.current?.firstElementChild?.classList.add(
                        "active"
                    )

                    setQuestion(res.result)
                }
                if ("message" in res.result) {
                    setErrorMessage(res.result.message)
                }
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className="container my-5">
            {loading && <Spinner />}

            {question && (
                <>
                    <div className="row justify-content-between">
                        {question.deadline && (
                            <Time
                                deadline={question.deadline.deadline}
                                onTimeOut={() => navigate(next)}
                            />
                        )}
                        <div className="col-md-5 d-flex justify-content-end mb-5">
                            <div
                                className="navigation-number row gap-2"
                                ref={refNavigationNumber}
                                onClick={handleNavigation}
                            >
                                {question.questions &&
                                    question.questions.map(
                                        (
                                            {
                                                id,
                                                answer
                                            }: {
                                                id: number
                                                answer: string | null
                                            },
                                            i: number
                                        ) => (
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
                                        )
                                    )}
                            </div>
                        </div>
                    </div>

                    <div
                        className="col-md-8 mx-auto my-4"
                        ref={refQuestionParent}
                    >
                        {question.questions && (
                            <Suspense>
                                <Question questions={question.questions} />
                            </Suspense>
                        )}
                    </div>
                </>
            )}

            {errorMessage && (
                <div className="col-md-8 mx-auto text-center">
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                </div>
            )}

            <div className="text-end my-5">
                <button
                    onClick={() => navigate(next)}
                    className="btn btn-warning"
                >
                    Lanjutkan
                </button>
            </div>
        </div>
    )
}

export default Test
