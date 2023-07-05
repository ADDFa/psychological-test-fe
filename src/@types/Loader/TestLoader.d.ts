type Question = Api.Result[] | null

type Deadline = Api.Result | null

interface TestLoader {
    questions: Question
    deadline: Deadline
    Question: React.LazyExoticComponent<React.FC<Test.Question>>
    next: string
}
