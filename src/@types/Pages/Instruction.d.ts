namespace Instruction {
    interface Instruction {
        title: string
        children: React.ReactNode
        toNextTest: string
    }

    interface Tr {
        head: string
        content: string
    }
}
