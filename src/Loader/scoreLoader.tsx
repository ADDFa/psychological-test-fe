import Api from "../Functions/Api"

const scoreLoader = async () => {
    let istScore: Api.Result | null = null

    try {
        const exams = await Api.handle(`exam`)
        const istExam = exams.result.find(
            (exam: Api.Result) => exam.exam === "ist"
        )
        let examId: number
        if (!istExam) throw new Error("Id Exam Not Found")

        examId = istExam.id
        await Api.handle(`exam/${examId}/score`).then((res) => {
            istScore = res.result
        })
    } catch (e: any) {
        console.log(e)
    }

    return istScore
}

export default scoreLoader
