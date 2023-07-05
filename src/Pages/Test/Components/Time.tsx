import { FC, useCallback, useEffect, useRef } from "react"

const Time: FC<Test.Time> = ({ deadline, onTimeOut }) => {
    const durationRef = useRef<HTMLDivElement>(null)
    const hourRef = useRef<HTMLSpanElement>(null)
    const minuteRef = useRef<HTMLSpanElement>(null)
    const secondRef = useRef<HTMLSpanElement>(null)

    const getTimeFormat = useCallback((time: number) => {
        time = Math.floor(time)
        return time <= 9 ? `0${time}` : `${time}`
    }, [])

    const setText = useCallback(
        (time: number, setTo: HTMLSpanElement | null) => {
            if (!setTo) return
            setTo.textContent = getTimeFormat(time)
        },
        [getTimeFormat]
    )

    useEffect(() => {
        const interval = setInterval(() => {
            let now = new Date().getTime()
            now = Math.ceil(now / 1000)

            let time = deadline - now
            if (time < 60) {
                const durationClasses = durationRef.current?.classList
                if (!durationClasses?.contains("text-danger")) {
                    durationClasses?.add("text-danger")
                }
            }

            if (time < 0) {
                clearInterval(interval)
                if (onTimeOut) onTimeOut()

                return
            }
            const hour = time / 3600
            const minute = (time % 3600) / 60
            const second = time % 60

            setText(hour, hourRef.current)
            setText(minute, minuteRef.current)
            setText(second, secondRef.current)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [deadline, setText, onTimeOut])

    return (
        <div className="col-md-5 mb-5">
            <div className="exam-duration fs-5 fw-bold" ref={durationRef}>
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
