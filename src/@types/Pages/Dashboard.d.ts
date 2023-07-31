namespace Dashboard {
    interface CardT {
        title: string
        to: string
        active?: boolean
    }

    interface CardAdminT {
        title: string
        content: string
        to: string
        textLink?: string
    }
}
