interface ISTInstructionLoader {
    name: string
    task: string | React.ReactNode
    InstructionC: React.LazyExoticComponent<React.FC>
    next: string
    category: Api.Result
}
