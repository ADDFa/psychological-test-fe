import Tr from "./Tr"
import Instruction from "./Instruction"

const IST = () => {
    // <Instruction
    //     title=""
    //     toNextTest="/test/ist/instruction?category=se"
    // >
    return (
        <table className="table">
            <tbody>
                <Tr
                    head="Jenis Tes"
                    content="Aptitude Intelligence Test (Cognitive Test)"
                />
                <Tr
                    head="Tujuan"
                    content="Untuk mengukur inteligensi secara umum dan khusus"
                />
                <Tr
                    head="Petunjuk"
                    content="Pada tes ini, soal-soal akan dibagi menjadi 9 Subtest"
                />
                <Tr
                    head=""
                    content="Batas waktu pada setiap Subtes berbeda-beda"
                />
                <Tr
                    head=""
                    content="Batas waktu pada setiap Subtes berbeda-beda"
                />
            </tbody>
        </table>
    )
}

export default IST
