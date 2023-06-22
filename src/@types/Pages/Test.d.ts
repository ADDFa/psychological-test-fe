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
        task: string | React.ReactNode
    }

    interface NavigationNumber {
        totalQuestion: number
        indexNoSoal: number
        setIndexNoSoal: React.Dispatch<React.SetStateAction>
    }

    interface Test extends NavigationNumber {
        children?: React.ReactNode
        next:
            | "se"
            | "wa"
            | "an"
            | "ge"
            | "ra"
            | "zr"
            | "fa"
            | "wu"
            | "me"
            | "msdt"
            | "papi"
            | "result-ist"
    }
}
