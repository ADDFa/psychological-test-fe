import { memo } from "react"

const Fa = () => {
    return (
        <>
            <p>
                Pada persoalan berikutnya, setiap soal memperlihatkan sesuatu
                bentuk tertentu yang terpotong menjadi beberapa bagian.
            </p>
            <p>
                Carilah diantara bentuk-bentuk yang ditentukan (a, b, c, d, e),
                bentuk yang dapat dibangun dengan cara menyusun
                potongan-potongan itu sedemikian rupa, sehingga tidak ada
                kelebihan sudut atau ruang di antaranya.
            </p>
            <p>
                Carilah bentuk-bentuk itu dan pilihlah huruf yang menunjukkan
                bentuk tadi.
            </p>
        </>
    )
}

export default memo(Fa)
