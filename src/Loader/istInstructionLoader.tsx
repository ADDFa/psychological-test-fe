import { lazy } from "react"
import { LoaderFunction } from "react-router-dom"
import Api from "../Functions/Api"

const Se = lazy(() => import("../Pages/Test/IST/Instructions/Se"))
const Wa = lazy(() => import("../Pages/Test/IST/Instructions/Wa"))
const An = lazy(() => import("../Pages/Test/IST/Instructions/An"))
const Ge = lazy(() => import("../Pages/Test/IST/Instructions/Ge"))
const Ra = lazy(() => import("../Pages/Test/IST/Instructions/Ra"))
const Zr = lazy(() => import("../Pages/Test/IST/Instructions/Zr"))
const Fa = lazy(() => import("../Pages/Test/IST/Instructions/Fa"))
const Wu = lazy(() => import("../Pages/Test/IST/Instructions/Wu"))
const Me = lazy(() => import("../Pages/Test/IST/Instructions/Me"))

const istInstructionLoader: LoaderFunction = async ({ params }) => {
    const { category } = params

    const name = (number: number) => {
        return `Petunjuk Subtes ${number} (${category?.toUpperCase()})`
    }

    const result: ISTInstructionLoader = {
        name: `Petunjuk Subtes 1 (SE)`,
        task: "Melengkapi Kalimat",
        InstructionC: Se,
        next: `/test/${category}`,
        category: (await Api.handle(`question-category/${category}`)).result
    }

    switch (category) {
        case "wa":
            result.name = name(2)
            result.task = `Carilah satu kata yang berbeda sendiri, dari lima kata yang diberikan...`
            result.InstructionC = Wa
            break

        case "an":
            result.name = name(3)
            result.task = `Mencari kata yang tepat untuk mengganti tanda tanya (kata ke-4) dengan kata yang tepat sesuai dengan perbandingan yang sama (antara kata pertama dan kedua)`
            result.InstructionC = An
            break

        case "ge":
            result.name = name(4)
            result.task = `Tentukan Kata Umum dari 2 kata yang diberikan pada setiap nomor.`
            result.InstructionC = Ge
            break

        case "ra":
            result.name = name(5)
            result.task = `Menyelesaikan soal hitungan...`
            result.InstructionC = Ra
            break

        case "zr":
            result.name = name(6)
            result.task = `Melanjutkan deret angka sesuai dengan pola pembentukan deret tersebut.`
            result.InstructionC = Zr
            break

        case "fa":
            result.name = name(7)
            result.task = `Menyusun potongan-potongan gambar sampai menjadi bentuk utuh yang sama seperti gambar pada pilihan jawaban`
            result.InstructionC = Fa
            break

        case "wu":
            result.name = name(8)
            result.task = `Memilih dadu yang menunjukkan motif tertentu.`
            result.InstructionC = Wu
            break

        case "me":
            result.name = name(9)
            result.task = (
                <>
                    Hafalkan kata-kata dibawah ini...
                    <br />
                    Karena kata-kata tsb yang akan menjadi soal utk Subtes 9
                    ini...
                    <br />3 menit waktu untuk menghafalkan...
                </>
            )
            result.InstructionC = Me
            result.next = `/exam/ist/score`
            break
    }

    return result
}

export default istInstructionLoader
