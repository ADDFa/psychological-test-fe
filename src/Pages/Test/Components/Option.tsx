import { FC, MouseEventHandler } from "react"

const Option: FC<Test.Option> = ({ name, text, autoSave, active }) => {
    const handleClick: MouseEventHandler<HTMLDivElement> = (evt) => {
        evt.currentTarget.parentElement
            ?.querySelector(`[data-name="option"] .active`)
            ?.classList.remove("active")
        evt.currentTarget.firstElementChild?.classList.add(`active`)

        if (autoSave) autoSave({ name, text })
    }

    return (
        <div className="option" data-name="option" onClick={handleClick}>
            <span
                className={`box-border ${active ? "active" : ""}`}
            >{`${name} ) `}</span>
            <span>{text}</span>
        </div>
    )
}

export default Option
