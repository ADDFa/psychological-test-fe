namespace Test {
    type QuestionCategoryOptions = "se" | "wa" | "an" | "fa" | "wu" | "me"

    type QuestionCategoryNumber = "ra" | "zr"

    type QuestionCategory =
        | "ge"
        | QuestionCategoryOptions
        | QuestionCategoryNumber

    interface Instruction {
        Example: React.LazyExoticComponent<React.FC>
        Description: React.LazyExoticComponent<React.FC>
        directionsTo: string
        task: string | React.ReactNode
    }

    interface NavigationNumber extends React.HTMLAttributes<HTMLButtonElement> {
        total?: number
        category?: string
    }

    interface Question {
        questions: Api.Result[]
    }

    interface QuestionOptions extends React.HTMLAttributes<HTMLDivElement> {
        question: Api.Result
        category: QuestionCategoryOptions
    }

    namespace QuestionImageOptions {
        interface SelectAttributes {
            questionId: number
            value: Test.OptionName
            selected: HTMLSpanElement
        }

        interface onSelect {
            (attributes: Test.QuestionImageOptions.SelectAttributes): void
        }
    }

    interface QuestionImageOptions
        extends React.HTMLAttributes<HTMLDivElement> {
        no: number
        questionId: number
        setQuestionId?: (id: number) => void
        onSelect?: QuestionImageOptions.onSelect
        active?: Test.OptionName
    }

    interface QuestionImageOptionRef {
        reset: (attributes: QuestionImageOptions) => void
        optionRef: HTMLDivElement | null
    }

    type OptionName = "a" | "b" | "c" | "d" | "e"

    interface OptionAttributes {
        name: Test.OptionName
        text: string
    }

    type AutoSave = (attr: OptionAttributes) => void

    interface Option extends OptionAttributes {
        autoSave?: AutoSave
        active?: boolean
    }

    interface SaveAnswer {
        question_id: string
        category: QuestionCategory
        answer: string
    }

    interface TestContext {
        afterNavigate?: Test.AfterNavigate
        setAfterNavigate?: React.Dispatch<
            React.SetStateAction<Test.AfterNavigate | undefined>
        >
    }

    type AfterNavigate = () => void
}
