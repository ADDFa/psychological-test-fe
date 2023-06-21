import { memo } from "react"

const An = () => {
    return (
        <>
            <p>Ditentukan 3 (tiga) kata.</p>
            <p>
                Antara kata pertama dan kata kedua memiliki hubungan tertentu.
            </p>
            <p>
                Antara kata ketiga dan salah satu diantara lima kata pilihan
                harus pula terdapat hubungan yang sama itu. Carilah kata
                tersebut!
            </p>
        </>
    )
}

export default memo(An)
