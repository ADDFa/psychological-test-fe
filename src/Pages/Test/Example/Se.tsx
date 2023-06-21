import { FC, memo } from "react"
import Option from "../Components/Option"

const Se: FC = () => {
    return (
        <>
            <p>Seekor kuda mempunyai kesamaan terbanyak dengan seekor...</p>

            <div>
                <Option text="Kucing" optionName="a" />
                <Option text="Bajing" optionName="b" />
                <Option text="Keledai" optionName="c" selected />
                <Option text="Lembu" optionName="d" />
                <Option text="Anjing" optionName="e" />
            </div>
        </>
    )
}

export default memo(Se)
