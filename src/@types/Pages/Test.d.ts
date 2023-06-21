namespace Test {
    interface Option {
        text: string
        optionName: "a" | "b" | "c" | "d" | "e"
        selected?: boolean
    }

    interface Instruction {
        Example: React.LazyExoticComponent<React.FC>
        Description: React.LazyExoticComponent<React.FC>
        directionsTo: string
        task: string
        next: string
    }

    interface ContainerContext {
        totalNavNum: number
        setTotalNavNum?: React.Dispatch<React.SetStateAction<number>>
    }

    interface Container {
        children?: React.ReactNode
        totalQuestion: number
    }

    interface NavigationNumber {
        total: number
        index: number
        setIndex: React.Dispatch<React.SetStateAction<number>>
    }

    interface Time {
        time: number
    }
}
