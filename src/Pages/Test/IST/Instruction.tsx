import { Suspense, lazy, useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import Api from "../../../Functions/Api"

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

const Instruction = () => {
    const [searchParams] = useSearchParams()
    const category = searchParams.get("category")
    const [questionCategory, setQuestionCategory] =
        useState<Question.Category>()

    useEffect(() => {
        Api.handle(`question-category/${category}`).then((res) => {
            setQuestionCategory(res.result)
        })
    }, [])

    const instructions: Record<string, Test.Instruction> = {
        se: {
            directionsTo: "Petunjuk Subtes 1 (SE)",
            task: "Melengkapi Kalimat",
            Example: SeExample,
            Description: SeDescription
        },
        wa: {
            directionsTo: "Petunjuk Subtes 2 (WA)",
            task: "Carilah satu kata yang berbeda sendiri, dari lima kata yang diberikan...",
            Example: WaExample,
            Description: WaDescription
        },
        an: {
            directionsTo: "Petunjuk Subtes 3 (AN)",
            task: "Mencari kata yang tepat untuk mengganti tanda tanya (kata ke4) dengan kata yang tepat sesuai dengan Perbandingan yang sama (antara kata pertama & kedua)",
            Example: AnExample,
            Description: AnDescription
        },
        ge: {
            directionsTo: "Petunjuk Subtes 4 (GE)",
            task: "Tentukan Kata Umum dari 2 kata yang diberikan pada setiap nomor....",
            Example: GeExample,
            Description: GeDescription
        },
        ra: {
            directionsTo: "Petunjuk Subtes 5 (RA)",
            task: "Menyelesaikan soal Hitungan...",
            Example: RaExample,
            Description: RaDescription
        },
        zr: {
            directionsTo: "Petunjuk Subtes 6 (ZR)",
            task: "Melanjutkan deret angka sesuai dengan pola pembentukan deret tsb...",
            Example: ZrExample,
            Description: ZrDescription
        },
        fa: {
            directionsTo: "Petunjuk Subtes 7 (FA)",
            task: "Menyusun potongan-potongan gambar sampai menjadi bentuk utuh yang sama seperti gambar pada pilihan jawaban",
            Example: FaExample,
            Description: FaDescription
        },
        wu: {
            directionsTo: "Petunjuk Subtes 8 (WU)",
            task: "Anda rubah posisi kubus pada soal..(Anda gulingkan kubus tsb, anda rotasikan kubus tsb, atau anda balik posisi kubus tsb...)Agar letak dari tanda-tanda yang ada pada sisi-sisi kubusnya bisa menjadi sama persis seperti salah satu dari pilihan jawabannya...",
            Example: WuExample,
            Description: WuDescription
        },
        me: {
            directionsTo: "Petunjuk Subtes 9 (ME)",
            task: (
                <>
                    Hafalkan kata-kata dibawah ini...
                    <br />
                    Karena kata-kata tsb yang akan menjadi soal utk Subtes 9
                    ini...
                    <br />3 menit waktu untuk menghafalkan...
                </>
            ),
            Example: MeExample,
            Description: MeDescription
        }
    }
    const instruction: Test.Instruction = instructions[category || "se"]
    if (!instruction) return <h1>404 Not Found</h1>

    const { directionsTo, task, Description, Example } = instruction

    return (
        <div className="container my-5 col-md-7">
            <div>
                <h1 className="fs-3 text-center mb-5">
                    Petunjuk {directionsTo}
                </h1>
                <p>Tugas : {task}</p>
                <p>
                    Waktu :{" "}
                    {questionCategory ? questionCategory.time / 60 : "-"} Menit
                </p>
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
                    <Link
                        className="btn btn-primary text-light"
                        to={`/test/${
                            category === "me" ? "me/words" : category
                        }`}
                    >
                        Kerjakan Tes
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Instruction
