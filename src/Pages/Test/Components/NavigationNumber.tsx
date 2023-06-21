import { FC } from "react"

const NavigationNumber: FC<Test.NavigationNumber> = ({
    total,
    setIndex,
    index
}) => {
    const numbers = []

    for (let i = 1; i <= total; i++) {
        numbers.push(i)
    }

    const actived = (i: number) => (i === index ? "active" : "")

    return (
        <div className="navigation-number row gap-2">
            {numbers.map((number, i) => (
                <button
                    key={number}
                    className={`number text-center ${actived(i)}`}
                    onClick={() => setIndex(i)}
                >
                    {number}
                </button>
            ))}
        </div>
    )
}

export default NavigationNumber
