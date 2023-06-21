import { memo } from "react"

const Wa = () => {
    return (
        <>
            <p>Ditentukan 5 kata.</p>
            <p>Pada 4 dari 5 kata itu terdapat suatu kesamaan.</p>
            <p>
                Carilah kata kelima yang tidak memiliki kesamaan dengan keempat
                kata lainnya.
            </p>
        </>
    )
}

export default memo(Wa)
