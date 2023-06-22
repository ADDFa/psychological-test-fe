import { FC, memo } from "react"
import { useNavigate } from "react-router-dom"
import NavigationNumber from "./NavigationNumber"
import { Confirm } from "../../../Functions/Alert"
import Time from "./Time"

const Test: FC<Test.Test> = (props) => {
    const { next, children, ...rest } = props
    const navigate = useNavigate()

    const nextToCategory = () => {
        Confirm(() => {
            const target =
                next === "result-ist"
                    ? "/test/ist/result"
                    : `/test/ist/instruction?category=${next}`
            navigate(target)
        })
    }

    return (
        <div className="container my-5">
            <div className="row justify-content-between">
                <Time />
                <div className="col-md-5 d-flex justify-content-end">
                    <div className="navigation-number row gap-2">
                        <NavigationNumber {...rest} />
                    </div>
                </div>
            </div>

            <div className="col-md-8 mx-auto question my-4">{children}</div>

            <div className="d-flex justify-content-end">
                <button className="btn btn-primary" onClick={nextToCategory}>
                    Lanjutkan
                </button>
            </div>
        </div>
    )
}

export default memo(Test)
