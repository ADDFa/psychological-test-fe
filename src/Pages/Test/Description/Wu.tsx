import { memo } from "react"

const Wu = () => {
    return (
        <>
            <p>
                Ditentukan 5 (lima) buah kubus a,b,c,d,e. Pada tiap-tiap kubus
                terdapat enam tanda yang berlainan pada setiap sisinya, Tiga
                dari tanda itu dapat diliht.
            </p>
            <p>
                Kubus-kubus yang ditentukan itu (a,b,c,d,e) ialah kubus-kubus
                yang berbeda. Artinya kubus-kubus itu dapat mempunyai
                tanda-tanda yang sama, akan tetapi susunannya berlainan. Setiap
                soal memperlihatkan salah satu kubus yang ditentukan di dalam
                kedudukan yang berbeda.
            </p>
            <p>
                Carilah kubus yang dimaksudkan itu dan pilihlah jawaban yang
                sesuai.
            </p>
            <p>
                Pikirkan bahwa setiap kubus dapat diputar maupun digulingkan,
                sehingga akan terlihat suatu tanda yang baru.
            </p>
        </>
    )
}

export default memo(Wu)
