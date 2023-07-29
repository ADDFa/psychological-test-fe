import { MouseEventHandler, forwardRef } from "react"

const ButtonLoader = forwardRef<HTMLButtonElement, ButtonLoader>(
    ({ text, action, ...rest }, ref) => {
        const handleClick: MouseEventHandler<HTMLButtonElement> = (evt) => {
            const target = evt.currentTarget
            const spinner = target.querySelector(".spinner")

            target.setAttribute("disabled", "")
            spinner?.classList.remove("d-none")

            if (action)
                action(evt, () => {
                    target.removeAttribute("disabled")
                    spinner?.classList.add("d-none")
                })
        }

        return (
            <button
                className="btn btn-primary"
                type="submit"
                ref={ref}
                {...rest}
                onClick={handleClick}
            >
                <span
                    className="spinner-border spinner-border-sm spinner d-none"
                    aria-hidden="true"
                />
                <span role="status"> {text}</span>
            </button>
        )
    }
)

export default ButtonLoader
