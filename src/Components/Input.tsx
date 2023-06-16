const Input: React.FC<InputT> = ({ id, label, name, ...rest }) => {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <input {...rest} className="form-control" name={name} id={id} />
        </div>
    )
}

export default Input
