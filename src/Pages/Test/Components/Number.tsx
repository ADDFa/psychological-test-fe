import { FC, MouseEventHandler } from "react"

const Number: FC<NumberC> = ({ text, active }) => {
    const handleClick: MouseEventHandler<HTMLSpanElement> = (evt) => {
        evt.currentTarget.classList.toggle("active")
    }

    return (
        <span
            onClick={handleClick}
            className={`box-border ${active ? "active" : ""}`}
        >
            {text}
        </span>
    )
}

export default Number
