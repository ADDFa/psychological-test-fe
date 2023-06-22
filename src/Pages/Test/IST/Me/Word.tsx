import { useEffect, useState } from "react"
import Api from "../../../../Functions/Api"
import Time from "../../Components/Time"
import { Link } from "react-router-dom"

const Word = () => {
    const [words, setWords] = useState<Record<string, any>[]>()

    useEffect(() => {
        Api.handle("me-words").then((res) => {
            setWords(res.result)
        })
    }, [])

    return (
        <div className="container my-5">
            <div className="col-md-8 mx-auto">
                <Time />

                <h1 className="fs-3 fw-bold text-center my-5">
                    Disediakan waktu 3 menit untuk menghafalkan
                    <br />
                    kata-kata dibawah ini:
                </h1>

                {words?.map(({ word, sub_words }, i) => (
                    <div className="row col-md-7 mx-auto mt-3" key={i}>
                        <div className="col-md-3">
                            <span className="fw-bold">{word}</span>
                        </div>
                        <div className="col-md-9">
                            <span>
                                {sub_words.map(
                                    (
                                        { word }: Record<string, any>,
                                        i: number
                                    ) => (
                                        <span key={i}>
                                            {word}
                                            {i < sub_words.length - 1
                                                ? " - "
                                                : ""}
                                        </span>
                                    )
                                )}
                            </span>
                        </div>
                    </div>
                ))}

                <div className="d-flex justify-content-end">
                    <Link
                        to="/test/me"
                        className="mt-5 btn btn-primary text-light"
                    >
                        Lanjutkan
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Word
