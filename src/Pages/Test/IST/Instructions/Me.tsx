import { Suspense, lazy, useRef } from "react"

const MeWord = lazy(() => import("../Me/Word"))

const Me = () => {
    const intructionRef = useRef<HTMLDivElement>(null)

    const showInstruction = () => {
        intructionRef.current?.classList.remove("d-none")
    }

    return (
        <>
            <Suspense>
                <MeWord showInstruction={showInstruction} />
            </Suspense>

            <div className="d-none" ref={intructionRef}>
                <div>
                    <p>
                        Pada persoalan berikutnya, terdapat sejumlah pertanyaan
                        mengenai kata-kata yang telah anda hafalkan tadi.
                        Pilihlah jawaban yang sesuai.
                    </p>
                </div>

                <div>
                    <p>Contoh :</p>

                    <div className="ms-5">
                        <p>
                            Kata yang mempunyai huruf permulaan - Q - adalah
                            suatu .......
                        </p>

                        <div>
                            <div className="option" data-name="option">
                                <span className="box-border">{`a ) `}</span>
                                <span>Bunga</span>
                            </div>
                            <div className="option" data-name="option">
                                <span className="box-border">{`b ) `}</span>
                                <span>Perkakas</span>
                            </div>
                            <div className="option" data-name="option">
                                <span className="box-border active">{`c ) `}</span>
                                <span>Burung</span>
                            </div>
                            <div className="option" data-name="option">
                                <span className="box-border">{`d ) `}</span>
                                <span>Kesenian</span>
                            </div>
                            <div className="option" data-name="option">
                                <span className="box-border">{`e ) `}</span>
                                <span>Binatang</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Me
