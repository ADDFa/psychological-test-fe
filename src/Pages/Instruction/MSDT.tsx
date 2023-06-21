import Instruction from "./Instruction"
import Tr from "./Tr"

const MSDT = () => {
    return (
        <Instruction
            title="MSDT (Management Style Diagnostic Test)"
            toNextTest="/test/msdt"
        >
            <table className="table">
                <tbody>
                    <Tr
                        head="Tujuan"
                        content="Untuk mengetahui sekaligus menguji gaya kepemimpinan yang dimiliki oleh seseorang."
                    />
                    <Tr
                        head="Petunjuk"
                        content="Setiap soal terdiri dari 2 pernyataan sikap (a dan b), pilihlah 1 pernyataan"
                    />
                    <Tr
                        head=""
                        content="yang paling sesuai atau mencerminkan pribadi anda"
                    />
                </tbody>
            </table>
        </Instruction>
    )
}

export default MSDT
