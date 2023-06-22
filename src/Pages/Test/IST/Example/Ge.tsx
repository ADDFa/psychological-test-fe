import { memo } from "react"

const Ge = () => {
    return (
        <>
            <p>
                <span>Ayam</span>
                <span className="mx-3">-</span>
                <span>Itik</span>
            </p>

            <div className="my-3 answer-ge">
                <label htmlFor="ge-example-answer">Jawaban</label>
                <input type="text" id="ge-example-answer" />
            </div>
        </>
    )
}

export default memo(Ge)
