import { memo } from "react"
import Option from "../../Components/Option"

const An = () => {
    return (
        <>
            <div>
                <p>
                    <span className="me-3">Hutan</span>
                    <span> : </span>
                    <span className="mx-3">Pohon</span>
                    <span> = </span>
                    <span className="mx-3">Tembok</span>
                    <span> : </span>
                    <span className="ms-3">?</span>
                </p>

                <div>
                    <Option optionName="a" text="batubata" selected />
                    <Option optionName="b" text="rumah" />
                    <Option optionName="c" text="semen" />
                    <Option optionName="d" text="putih" />
                    <Option optionName="e" text="dinding" />
                </div>
            </div>
        </>
    )
}

export default memo(An)
