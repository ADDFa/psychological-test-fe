import { FC, MouseEventHandler } from "react"
import Number from "./Number"

const Numbers: FC<Numbers> = ({ onSelect, defaultSelect }) => {
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

    const handleSelect = (number: string): boolean => {
        if (defaultSelect) {
            const selected = defaultSelect.toString()
            const selects = selected.split("") || []
            const select = selects.find((select) => number === select)
            return select ? true : false
        }
        return false
    }

    const handleClick: MouseEventHandler<HTMLDivElement> = (evt) => {
        const childNodes: HTMLSpanElement[] = []
        let selected = ""
        evt.currentTarget.childNodes.forEach((node) => {
            const child = node as HTMLSpanElement
            if (child.classList.contains("active")) {
                childNodes.push(child)
                selected += child.textContent
            }
        })

        if (onSelect)
            onSelect({
                childs: childNodes,
                selected
            })
    }

    return (
        <div className={`numbers`} onClick={handleClick}>
            {numbers.map((number) => (
                <Number
                    text={number}
                    key={number}
                    active={handleSelect(number)}
                />
            ))}
        </div>
    )
}

export default Numbers
