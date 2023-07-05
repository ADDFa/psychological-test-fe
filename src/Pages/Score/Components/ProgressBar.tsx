import { FC } from "react"

const ProgressBar: FC<Score.ProgessBar> = ({
    label,
    color = "primary",
    value = ""
}) => {
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
                    className={`progress-bar w-25 ${
                        color ? `bg-${color}` : ""
                    }`}
                >
                    {value}
                </div>
            </div>
        </div>
    )
}

export default ProgressBar
