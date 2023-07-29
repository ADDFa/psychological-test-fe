type ActivedButton = () => void

type ButtonLoaderAction = (
    event: React.MouseEvent<HTMLButtonElement>,
    activedButton: ActivedButton
) => void

interface ButtonLoader extends HTMLAttributes<HTMLButtonElement> {
    text: string
    action?: ButtonLoaderAction
}
