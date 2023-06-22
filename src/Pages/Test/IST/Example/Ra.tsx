import { memo } from "react"

const Ra = () => {
    return (
        <>
            <p>
                Sebatang pensil harganya 25 rupiah. Berapakah harga 3 batang?{" "}
                <br />
                Jawabannya ialah : 75{" "}
            </p>
            <p></p>
            <p>
                Untuk menunjukkan jawaban suatu soal, maka pilihlah angka-angka
                yang terdapat dijawaban itu. <br />
                Perhatikan cara menjawab berikut :
            </p>

            <div className="numbers my-3">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span className="active">5</span>
                <span>6</span>
                <span className="active">7</span>
                <span>8</span>
                <span>9</span>
                <span>0</span>
            </div>

            <p>
                Pada contoh diatas, jawaban ialah 75. Oleh karena itu, angka 5
                dan 7 harus dipilih.
            </p>
        </>
    )
}

export default memo(Ra)
