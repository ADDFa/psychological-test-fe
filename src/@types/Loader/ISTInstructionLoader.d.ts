interface ISTInstructionLoader {
    name: string
    task: string | React.ReactNode
    InstructionC: React.LazyExoticComponent<React.FC>
    next: string
    categoryName: string
    // category: Api.Result
}
