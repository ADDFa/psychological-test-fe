const Button: React.FC<ButtonT> = ({
    children,
    outline = false,
    color = "primary",
    className = "",
    ...rest
}) => {
    return (
        <button
            className={`btn btn-${
                outline ? "outline-" : ""
            }${color} ${className}`}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button
