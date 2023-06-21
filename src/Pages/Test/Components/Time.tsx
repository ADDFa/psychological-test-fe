import { FC, useEffect, useRef } from "react"

const Time: FC<Test.Time> = ({ time }) => {
    const date = new Date()
    const endTestTime = Math.ceil(date.getTime() / 1000) + time
    const hourRef = useRef<HTMLSpanElement>(null)
    const minuteRef = useRef<HTMLSpanElement>(null)
    const secondRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date()
            const now = Math.ceil(date.getTime() / 1000)

            if (endTestTime >= now) {
                const testTime = endTestTime - now
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="exam-duration">
            <span ref={hourRef}>00</span>
            <span> : </span>
            <span ref={minuteRef}>00</span>
            <span> : </span>
            <span ref={secondRef}>00</span>
        </div>
    )
}

export default Time
