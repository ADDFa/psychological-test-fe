import { memo } from "react"
import Option from "../Components/Option"

const Wa = () => {
    return (
        <div>
            <Option optionName="a" text="Meja" />
            <Option optionName="b" text="Kursi" />
            <Option optionName="c" text="Burung" />
            <Option optionName="d" text="Lemari" />
            <Option optionName="e" text="Tempat Tidur" />
        </div>
    )
}

export default memo(Wa)
