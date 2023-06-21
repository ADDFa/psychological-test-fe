import Instruction from "./Instruction"
import Tr from "./Tr"

const PAPI = () => {
    return (
        <Instruction
            title="PAPI (Personality and Preference Inventory)"
            toNextTest="/test/papi"
        >
            <table className="table">
                <tbody>
                    <Tr head="Jenis Tes" content="Kepribadian" />
                    <Tr
                        head="Tujuan"
                        content="Mengukur persepsi seseorang terhadap diri sendiri yang mempengaruhi"
                    />
                    <Tr
                        head=""
                        content="kecendrungan individu dalam bersikap dan berprilaku di lingkungan kerja"
                    />
                    <Tr
                        head="Petunjuk"
                        content="Setiap soal terdiri dari 2 pernyataan sikap (a dan b), pilihlah 1 pernyataan"
                    />
                    <Tr
                        head=""
                        content="yang paling sesuai dengan kepribadian anda."
                    />
                </tbody>
            </table>
        </Instruction>
    )
}

export default PAPI
