import { useRef } from "react"

const Time = () => {
    const hourRef = useRef<HTMLSpanElement>(null)
    const minuteRef = useRef<HTMLSpanElement>(null)
    const secondRef = useRef<HTMLSpanElement>(null)

    return (
        <div className="col-md-5">
            <div className="exam-duration">
                <span ref={hourRef}>00</span>
                <span> : </span>
                <span ref={minuteRef}>00</span>
                <span> : </span>
                <span ref={secondRef}>00</span>
            </div>
        </div>
    )
}

export default Time
