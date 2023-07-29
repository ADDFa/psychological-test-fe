import { FC, useEffect, useRef } from "react"

const ProgressBar: FC<Score.ProgessBar> = ({
    label,
    color = "primary",
    value = "",
    width
}) => {
    const progressBarRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (progressBarRef.current) {
            progressBarRef.current.style.width = `${width}%`
        }
    }, [width])

    return (
        <div className="w-100 mb-3">
            <p className="mb-3">{label}</p>

            <div
                className="progress rounded-5"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
            >
                <div
                    className={`progress-bar ${color ? `bg-${color}` : ""}`}
                    ref={progressBarRef}
                >
                    {value}
                </div>
            </div>
        </div>
    )
}

export default ProgressBar
