const Se = () => {
    return (
        <div>
            <div className="my-5">
                <p>Soal 1 - 20 terdiri atas kalimat-kalimat</p>
                <p>
                    Pada setiap kalimat satu kata hilang dan disediakan 5 (lima)
                    kata pilihan sebagai penggantinya.
                </p>
                <p>Pilihlah kata yang tepat yang dapat menyempurnakan itu!</p>
            </div>

            <div>
                <p>Contoh :</p>

                <div className="ms-5">
                    <p>
                        Seekor kuda mempunyai kesamaan terbanyak dengan
                        seekor...
                    </p>

                    <div>
                        <div className="option" data-name="option">
                            <span className="box-border">{`a ) `}</span>
                            <span>Kucing</span>
                        </div>
                        <div className="option" data-name="option">
                            <span className="box-border">{`b ) `}</span>
                            <span>Bajing</span>
                        </div>
                        <div className="option" data-name="option">
                            <span className="box-border active">{`c ) `}</span>
                            <span>Keledai</span>
                        </div>
                        <div className="option" data-name="option">
                            <span className="box-border">{`d ) `}</span>
                            <span>Lembu</span>
                        </div>
                        <div className="option" data-name="option">
                            <span className="box-border">{`e ) `}</span>
                            <span>Anjing</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Se
