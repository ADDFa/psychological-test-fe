import { memo } from "react"

const Zr = () => {
    return (
        <>
            <div className="numbers">
                <span>2</span>
                <span>4</span>
                <span>6</span>
                <span>8</span>
                <span>10</span>
                <span>12</span>
                <span>14</span>
                <span>?</span>
            </div>

            <p className="mb-3 mt-5">
                Pada deret ini angka berikutnya selalu didapat jika angka
                didepannya ditambahkan dengan 2. <br />
                Maka jawabannya ialah 16. <br />
                Oleh karena itu, anka 1 dan 6 harus dipilih.
            </p>

            <div className="numbers">
                <span className="active">1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span className="active">6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
            </div>
        </>
    )
}

export default memo(Zr)
