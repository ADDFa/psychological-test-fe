namespace Question {
    interface Category {
        category: string
        id: number
        time: number
    }

    interface Question {
        category: Category
        questions: Record<string, any>[]
    }
}
