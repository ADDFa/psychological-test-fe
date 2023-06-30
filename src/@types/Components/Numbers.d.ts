namespace Numbers {
    interface onSelectProps {
        childs: HTMLSpanElement[]
        selected: string
    }

    type onSelect = (props: onSelectProps) => void
}

interface NumberC {
    text: string
    active?: boolean
}

interface Numbers {
    defaultSelect?: number
    onSelect?: Numbers.onSelect
}
