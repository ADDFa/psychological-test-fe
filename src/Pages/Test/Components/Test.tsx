import { useRef } from "react"

const Test = () => {
    const hourRef = useRef<HTMLSpanElement>(null)
    const minuteRef = useRef<HTMLSpanElement>(null)
    const secondRef = useRef<HTMLSpanElement>(null)

    return (
        <div className="container">
            <div className="exam-duration">
                <span ref={hourRef}>00</span>
                <span> : </span>
                <span ref={minuteRef}>00</span>
                <span> : </span>
                <span ref={secondRef}>00</span>
            </div>

            <div className="navigation-number row gap-2">
                <button className={`number text-center active`}>1</button>
            </div>
        </div>
    )
}

export default Test
