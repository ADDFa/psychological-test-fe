const InputCheck: React.FC<InputCheckT> = ({
    id,
    label,
    name,
    col,
    type,
    ...rest
}) => {
    return (
        <div className={`form-check py-3 ${col ? `col-md-${col}` : ""}`}>
            <input
                className="form-check-input"
                type={type}
                name={name}
                id={id}
                {...rest}
            />
            <label className={`form-check-label`} htmlFor={id}>
                {label}
            </label>
        </div>
    )
}

export default InputCheck
