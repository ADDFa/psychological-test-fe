type Question = Api.Result[] | null

type Deadline = Api.Result | null

interface TestLoader {
    Question: React.LazyExoticComponent<React.FC<Test.Question>>
    next: string
    categoryName: string
}
