interface InputCheckT extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    type: "radio" | "checkbox"
    name: string
    id: string
    col?: number
}
