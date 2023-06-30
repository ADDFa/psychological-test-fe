const An = () => {
    return (
        <div>
            <div className="my-5">
                <p>Ditentukan 3 (tiga) kata.</p>
                <p>
                    Antara kata pertama dan kata kedua memiliki hubungan
                    tertentu.
                </p>
                <p>
                    Antara kata ketiga dan salah satu diantara lima kata pilihan
                    harus pula terdapat hubungan yang sama itu. Carilah kata
                    tersebut!
                </p>
            </div>

            <div>
                <p>Contoh :</p>

                <div className="ms-5 my-5">
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
                        <div className="option" data-name="option">
                            <span className="box-border active">{`a ) `}</span>
                            <span>Batubata</span>
                        </div>
                        <div className="option" data-name="option">
                            <span className="box-border">{`b ) `}</span>
                            <span>Rumah</span>
                        </div>
                        <div className="option" data-name="option">
                            <span className="box-border">{`c ) `}</span>
                            <span>Semen</span>
                        </div>
                        <div className="option" data-name="option">
                            <span className="box-border">{`d ) `}</span>
                            <span>Putih</span>
                        </div>
                        <div className="option" data-name="option">
                            <span className="box-border">{`e ) `}</span>
                            <span>Dinding</span>
                        </div>
                    </div>
                </div>

                <p>
                    Hubungan antara hutan dan pohon ialah bahwa hutan terdiri
                    atas pohon-pohon, maka hubungan antara tembok dan salah satu
                    kata pilihan ialah bahwa tembok terdiri atas batu-batu bata.{" "}
                    <br />
                    Oleh karena itu, <strong>opsi a harus dipilih</strong>
                </p>
            </div>
        </div>
    )
}

export default An
