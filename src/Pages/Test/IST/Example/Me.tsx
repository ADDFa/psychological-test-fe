import { memo } from "react"
import Option from "../../Components/Option"

const Me = () => {
    return (
        <>
            <p>
                Kata yang mempunyai huruf permulaan - Q - adalah suatu .......
            </p>

            <div>
                <Option optionName="a" text="bunga" />
                <Option optionName="b" text="perkakas" />
                <Option optionName="c" text="burung" />
                <Option optionName="d" text="kesenian" selected />
                <Option optionName="e" text="binatang" />
            </div>
        </>
    )
}

export default memo(Me)
