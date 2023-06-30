interface TestLoader {
    questions: Api.Result[] | null
    Question: React.LazyExoticComponent<React.FC<Test.Question>>
    next: string
}
