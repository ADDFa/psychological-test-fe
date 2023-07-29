import {
    MouseEventHandler,
    forwardRef,
    memo,
    useCallback,
    useEffect,
    useImperativeHandle,
    useRef
} from "react"

const QuestionImageOptions = forwardRef<
    Test.QuestionImageOptionRef,
    Test.QuestionImageOptions
>(({ no, onSelect, onClick, questionId, active, ...rest }, ref) => {
    const optionRef = useRef<HTMLDivElement>(null)
    const numberRef = useRef<HTMLSpanElement>(null)

    const setActiveOption = useCallback(
        (active: Test.OptionName | null | undefined) => {
            if (active) {
                optionRef.current?.childNodes.forEach((childNode) => {
                    if (childNode.textContent === active) {
                        const child = childNode as HTMLSpanElement
                        child.classList.add("active")
                    }
                })
            }
        },
        []
    )

    useEffect(() => {
        setActiveOption(active)
    }, [active, setActiveOption])

    const number = (no: number) => {
        const number = no <= 9 ? `0${no}` : no
        return `${number} )`
    }

    useImperativeHandle(ref, () => {
        return {
            reset({ no, questionId, active }) {
                optionRef.current?.setAttribute(
                    "data-id",
                    questionId.toString()
                )
                optionRef.current
                    ?.querySelector(".active")
                    ?.classList.remove("active")

                if (active) {
                    setActiveOption(active)
                }

                if (numberRef.current) {
                    numberRef.current.textContent = number(no)
                }
            },
            optionRef: optionRef.current
        }
    })

    const handleSelect = (
        target: HTMLSpanElement,
        currentTarget: HTMLDivElement
    ) => {
        const active = currentTarget.querySelector(".active")
        if (active) active.classList.remove("active")

        target.classList.add("active")

        if (!onSelect) return
        onSelect({
            questionId: parseInt(currentTarget.dataset.id as string),
            selected: target,
            value: target.textContent as Test.OptionName
        })
    }

    const handleClick: MouseEventHandler<HTMLDivElement> = (evt) => {
        if (onClick) onClick(evt)

        const target = evt.target as HTMLElement
        if (target.dataset.name === "option") {
            handleSelect(target, evt.currentTarget)
        }
    }

    return (
        <div
            className={`d-flex gap-3 w-fit mx-auto my-5`}
            onClick={handleClick}
            data-id={questionId}
            ref={optionRef}
            {...rest}
        >
            <span
                data-name="number"
                className="border-0 box-border"
                ref={numberRef}
            >
                {number(no)}
            </span>
            <span data-name="option" className="box-border">
                a
            </span>
            <span data-name="option" className="box-border">
                b
            </span>
            <span data-name="option" className="box-border">
                c
            </span>
            <span data-name="option" className="box-border">
                d
            </span>
            <span data-name="option" className="box-border">
                e
            </span>
        </div>
    )
})

export default memo(QuestionImageOptions)
