import { ForwardedRef, forwardRef } from "react"

const Button = forwardRef(
    (
        {
            children,
            outline = false,
            color = "primary",
            className = "",
            ...rest
        }: ButtonT,
        ref: ForwardedRef<HTMLButtonElement>
    ) => {
        return (
            <button
                className={`btn btn-${
                    outline ? "outline-" : ""
                }${color} ${className}`}
                {...rest}
                ref={ref}
            >
                {children}
            </button>
        )
    }
)

export default Button
