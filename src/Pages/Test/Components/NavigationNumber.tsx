import { FC, memo } from "react"

const NavigationNumber: FC<Test.NavigationNumber> = ({
    indexNoSoal,
    setIndexNoSoal,
    totalQuestion
}) => {
    const numbers: number[] = []
    for (let i = 1; i <= totalQuestion; i++) {
        numbers.push(i)
    }

    return (
        <div className="navigation-number row gap-2">
            {numbers.map((number, i) => (
                <button
                    key={number}
                    className={`number text-center ${
                        indexNoSoal === i ? "active" : ""
                    }`}
                    onClick={() => setIndexNoSoal(i)}
                >
                    {number}
                </button>
            ))}
        </div>
    )
}

export default memo(NavigationNumber)
