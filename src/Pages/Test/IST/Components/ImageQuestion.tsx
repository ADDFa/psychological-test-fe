import { FC, useCallback, useEffect, useRef } from "react"
import Api from "../../../../Functions/Api"
import Spinner from "../../../../Components/Spinner"
import QuestionImageOptions from "../../Components/QuestionImageOptions"
import useSaveAnswer from "../../Hooks/useSaveAnswer"

const ImageQuestion: FC<ImageQuestion> = ({ questions, category }) => {
    const saveAnswer = useSaveAnswer()
    const refQuestion = useRef<HTMLImageElement>(null)
    const refSubQuestion = useRef<HTMLImageElement>(null)
    const spinnerRef = useRef<HTMLDivElement>(null)
    const subSpinnerRef = useRef<HTMLDivElement>(null)
    const optionRef = useRef<Test.QuestionImageOptionRef>(null)

    const setImage = useCallback(
        ({
            imgName,
            imgRef,
            showSpinner,
            spinnerRef,
            then
        }: FaTest.SetImage) => {
            if (showSpinner) {
                imgRef.current?.classList.add("d-none")
                spinnerRef?.current?.classList.remove("d-none")
            }

            Api.image(imgName)
                .then((res) => {
                    imgRef.current?.setAttribute("src", res)
                    spinnerRef?.current?.classList.add("d-none")
                    imgRef.current?.classList.remove("d-none")
                    imgRef.current?.setAttribute("data-fileName", imgName)

                    if (then) then(res)
                })
                .catch((e) => console.log(e))
        },
        []
    )

    const handleSelect: Test.QuestionImageOptions.onSelect = ({
        questionId,
        value
    }) => {
        saveAnswer({
            answer: value,
            category,
            question_id: `${questionId}`
        })
        const question = questions.find(({ id }) => id === questionId)
        if (question) question.answer = value
    }

    const handleNavigate: EventListener = useCallback(
        (evt) => {
            const target = evt.target as HTMLElement
            const { id } = target.dataset

            const questionRes = questions.find(
                (question) => question.id === parseInt(id as string)
            )
            if (!questionRes) return

            const {
                question,
                question_image,
                id: questionId,
                answer
            } = questionRes
            setImage({
                imgName: question_image,
                imgRef: refQuestion,
                spinnerRef
            })
            optionRef.current?.optionRef?.classList.add("d-none")
            setImage({
                imgName: question,
                imgRef: refSubQuestion,
                spinnerRef: subSpinnerRef,
                showSpinner: true,
                then: () => {
                    optionRef.current?.reset({
                        no: parseInt(target.textContent as string),
                        questionId,
                        active: answer
                    })
                    optionRef.current?.optionRef?.classList.remove("d-none")
                }
            })
        },
        [questions, setImage]
    )

    useEffect(() => {
        optionRef.current?.optionRef?.classList.add("d-none")

        const { question_image, question } = questions[0]
        setImage({
            imgName: question_image,
            imgRef: refQuestion,
            spinnerRef
        })
        setImage({
            imgName: question,
            imgRef: refSubQuestion,
            spinnerRef: subSpinnerRef,
            then: () => {
                optionRef.current?.optionRef?.classList.remove("d-none")
            }
        })

        document.addEventListener("navigate", handleNavigate)
        return () => document.removeEventListener("navigate", handleNavigate)
    }, [questions, setImage, handleNavigate])

    return (
        <>
            <div className="mb-5">
                <img
                    className="d-none w-100"
                    alt="Pertanyaan"
                    ref={refQuestion}
                />

                <Spinner ref={spinnerRef} />
            </div>

            <div className="text-center">
                <img
                    className="d-none"
                    alt="Sub Pertanyaan"
                    ref={refSubQuestion}
                />

                <Spinner ref={subSpinnerRef} />
            </div>

            <QuestionImageOptions
                no={1}
                questionId={1}
                onSelect={handleSelect}
                ref={optionRef}
                active={questions[0].answer}
            />
        </>
    )
}

export default ImageQuestion
