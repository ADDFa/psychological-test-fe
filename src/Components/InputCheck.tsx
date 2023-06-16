const InputCheck: React.FC<InputCheckT> = ({
    id,
    label,
    name,
    col,
    type,
    className
}) => {
    return (
        <div className={`form-check py-3 ${col ? `col-md-${col}` : ""}`}>
            <input
                className="form-check-input"
                type={type}
                name={name}
                id={id}
            />
            <label className={`form-check-label`} htmlFor={id}>
                {label}
            </label>
        </div>
    )
}

export default InputCheck
