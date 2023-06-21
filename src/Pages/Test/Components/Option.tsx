import { FC, memo } from "react"

const Option: FC<Test.Option> = ({ text, optionName, selected }) => {
    return (
        <div className="col-md-2 d-flex align-items-center gap-3 mb-3">
            <button
                className={`btn border-primary ${
                    selected ? "btn-primary" : ""
                }`}
            >{`${optionName}).`}</button>
            <span>{text}</span>
        </div>
    )
}

export default memo(Option)
