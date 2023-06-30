const Ge = () => {
    return (
        <div>
            <div>
                <p>Ditentukan dua kata.</p>
                <p>
                    Carilah satu kata yang meliputi pengertian kedua kata tadi.
                </p>
                <p>Ketikkan kata tersebut pada kolom jawaban.</p>
            </div>

            <div>
                <p>Contoh :</p>

                <div className="ms-5 my-5">
                    <p>
                        <span>Ayam</span>
                        <span className="mx-3">-</span>
                        <span>Itik</span>
                    </p>

                    <p>
                        Kata "Burung" dapat meliputi pengertian kedua kata
                        diatas. <br />
                        Maka jawabannya ialah "Burung". <br />
                        Oleh karena itu, pada lembar jawaban harus ditulis
                        "Burung"
                    </p>

                    <div className="my-3 answer-ge">
                        <label htmlFor="ge-example-answer">Jawaban</label>
                        <input
                            type="text"
                            id="ge-example-answer"
                            disabled
                            value={"burung"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ge
