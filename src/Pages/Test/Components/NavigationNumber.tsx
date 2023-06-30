import { FC, MouseEventHandler, memo } from "react"

const NavigationNumber: FC<Test.NavigationNumber> = ({
    total = 1,
    onClick,
    category,
    ...rest
}) => {
    console.log(category)
    const numbers: number[] = []
    for (let i = 1; i <= total; i++) {
        numbers.push(i)
    }

    const setActive: MouseEventHandler<HTMLButtonElement> = (evt) => {
        if (onClick) onClick(evt)

        evt.currentTarget.parentElement
            ?.querySelector(".active")
            ?.classList.remove("active")
        evt.currentTarget.classList.add("active")
    }

    return (
        <div className="col-md-5 d-flex justify-content-end">
            <div className="navigation-number row gap-2">
                {numbers.map((number, i) => (
                    <button
                        key={number}
                        className={`number text-center ${
                            number === 1 ? "active" : ""
                        }`}
                        onClick={setActive}
                        data-index={i}
                        {...rest}
                    >
                        {number}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default memo(NavigationNumber)
