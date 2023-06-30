import Api from "../../../Functions/Api"
import useFormBuilder from "../../../Hooks/useFormBuilder"

const useSaveAnswer = () => {
    const formBuilder = useFormBuilder()

    return ({ answer, category, question_id }: Test.SaveAnswer) => {
        const form = formBuilder(
            ["category", "question_id", "answer"],
            [category, question_id, answer]
        )
        Api.post("answer", form).then(() => {
            // set color ke navigation number dipilih
            const btnNavNum = document.querySelector(
                `[data-name="navigation-number"][data-id="${question_id}"]`
            )
            btnNavNum?.classList.add(`btn-primary`)
        })
    }
}

export default useSaveAnswer
