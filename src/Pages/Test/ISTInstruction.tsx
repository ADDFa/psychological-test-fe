import { useSearchParams } from "react-router-dom"
import { MouseEventHandler, Suspense, lazy } from "react"

const SeExample = lazy(() => import("./Example/Se"))
const WaExample = lazy(() => import("./Example/Wa"))
const AnExample = lazy(() => import("./Example/An"))
const GeExample = lazy(() => import("./Example/Ge"))
const RaExample = lazy(() => import("./Example/Ra"))
const ZrExample = lazy(() => import("./Example/Zr"))
const FaExample = lazy(() => import("./Example/Fa"))
const WuExample = lazy(() => import("./Example/Wu"))
const MeExample = lazy(() => import("./Example/Me"))

const SeDescription = lazy(() => import("./Description/Se"))
const WaDescription = lazy(() => import("./Description/Wa"))
const AnDescription = lazy(() => import("./Description/An"))
const GeDescription = lazy(() => import("./Description/Ge"))
const RaDescription = lazy(() => import("./Description/Ra"))
const ZrDescription = lazy(() => import("./Description/Zr"))
const FaDescription = lazy(() => import("./Description/Fa"))
const WuDescription = lazy(() => import("./Description/Wu"))
const MeDescription = lazy(() => import("./Description/Me"))

const ISTInstruction = () => {
    const [searchParams] = useSearchParams()
    const category = searchParams.get("category")

    const instructions: Record<string, Test.Instruction> = {
        se: {
            directionsTo: "Petunjuk Subtes 1 (SE)",
            task: "Melengkapi Kalimat",
            Example: SeExample,
            next: "/test/ist/se",
            Description: SeDescription
        },
        wa: {
            directionsTo: "Petunjuk Subtes 2 (WA)",
            task: "Carilah satu kata yang berbeda sendiri, dari lima kata yang diberikan...",
            Example: WaExample,
            next: "",
            Description: WaDescription
        },
        an: {
            directionsTo: "Petunjuk Subtes 3 (AN)",
            task: "Mencari kata yang tepat untuk mengganti tanda tanya (kata ke4) dengan kata yang tepat sesuai dengan Perbandingan yang sama (antara kata pertama & kedua)",
            Example: AnExample,
            next: "",
            Description: AnDescription
        },
        ge: {
            directionsTo: "Petunjuk Subtes 4 (GE)",
            task: "Tentukan Kata Umum dari 2 kata yang diberikan pada setiap nomor....",
            Example: GeExample,
            next: "",
            Description: GeDescription
        },
        ra: {
            directionsTo: "Petunjuk Subtes 5 (RA)",
            task: "Menyelesaikan soal Hitungan...",
            Example: RaExample,
            next: "",
            Description: RaDescription
        },
        zr: {
            directionsTo: "Petunjuk Subtes 6 (ZR)",
            task: "Melanjutkan deret angka sesuai dengan pola pembentukan deret tsb...",
            Example: ZrExample,
            next: "",
            Description: ZrDescription
        },
        fa: {
            directionsTo: "Petunjuk Subtes 7 (FA)",
            task: "Menyusun potongan-potongan gambar sampai menjadi bentuk utuh yang sama seperti gambar pada pilihan jawaban",
            Example: FaExample,
            next: "",
            Description: FaDescription
        },
        wu: {
            directionsTo: "Petunjuk Subtes 8 (WU)",
            task: "Anda rubah posisi kubus pada soal..(Anda gulingkan kubus tsb, anda rotasikan kubus tsb, atau anda balik posisi kubus tsb...)Agar letak dari tanda-tanda yang ada pada sisi-sisi kubusnya bisa menjadi sama persis seperti salah satu dari pilihan jawabannya...",
            Example: WuExample,
            next: "",
            Description: WuDescription
        },
        me: {
            directionsTo: "Petunjuk Subtes 9 (ME)",
            task: "HAFALKAN kata-kata dibawah ini... Karena kata-kata tsb yang akan menjadi soal utk Subtes 9 ini... 3 menit waktu untuk menghafalkan...",
            Example: MeExample,
            next: "",
            Description: MeDescription
        }
    }
    const instruction: Test.Instruction = instructions[category || "se"]
    if (!instruction) return <h1>404 Not Found</h1>

    const { directionsTo, next, task, Description, Example } = instruction

    const registerTest: MouseEventHandler<HTMLButtonElement> = () => {
        console.log(next)
    }

    return (
        <div className="container my-5 col-md-7">
            <div>
                <h1 className="fs-3 text-center mb-5">
                    Petunjuk {directionsTo}
                </h1>
                <p>Tugas : {task}</p>
                {/* <p>Waktu : {questionCategory.time / 60} Menit</p> */}
            </div>

            <div className="my-5">
                <Suspense>
                    <Description />
                </Suspense>
            </div>

            <div>
                <p>Contoh :</p>

                <div className="ms-5">
                    <Suspense>
                        <Example />
                    </Suspense>
                </div>

                <div className="d-flex justify-content-end">
                    <button
                        className="btn btn-primary text-light"
                        onClick={registerTest}
                    >
                        Kerjakan Tes
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ISTInstruction
