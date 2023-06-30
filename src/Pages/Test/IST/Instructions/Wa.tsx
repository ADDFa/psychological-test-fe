const Wa = () => {
    return (
        <div>
            <div className="my-5">
                <p>Ditentukan 5 kata.</p>
                <p>Pada 4 dari 5 kata itu terdapat suatu kesamaan.</p>
                <p>
                    Carilah kata kelima yang tidak memiliki kesamaan dengan
                    keempat kata lainnya.
                </p>
            </div>

            <div>
                <p>Contoh :</p>

                <div className="ms-5 my-5">
                    <div className="option" data-name="option">
                        <span className="box-border">{`a ) `}</span>
                        <span>Meja</span>
                    </div>
                    <div className="option" data-name="option">
                        <span className="box-border">{`b ) `}</span>
                        <span>Kursi</span>
                    </div>
                    <div className="option" data-name="option">
                        <span className="box-border active">{`c ) `}</span>
                        <span>Burung</span>
                    </div>
                    <div className="option" data-name="option">
                        <span className="box-border">{`d ) `}</span>
                        <span>Lemari</span>
                    </div>
                    <div className="option" data-name="option">
                        <span className="box-border">{`e ) `}</span>
                        <span>Tempat Tidur</span>
                    </div>
                </div>

                <p>
                    a, b, d, dan e ialah perabot rumah (meubel). <br />
                    c ) Burung, bukan perabot rumah atau tidak memiliki kesamaan
                    dengan keempat kata itu. <br />
                    Oleh karena itu, <strong>opsi c harus dipilih</strong>
                </p>
            </div>
        </div>
    )
}

export default Wa
