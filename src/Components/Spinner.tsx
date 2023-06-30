import { forwardRef } from "react"

const Spinner = forwardRef<HTMLDivElement>(({ ...rest }, ref) => {
    return (
        <div className="text-center" ref={ref} {...rest}>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
})

export default Spinner
