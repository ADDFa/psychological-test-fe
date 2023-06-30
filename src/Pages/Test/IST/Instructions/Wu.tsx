import example from "../../../../Assets/images/example-wu.jpg"

const Wu = () => {
    return (
        <>
            <div>
                <p>
                    Ditentukan 5 (lima) buah kubus a,b,c,d,e. Pada tiap-tiap
                    kubus terdapat enam tanda yang berlainan pada setiap
                    sisinya. Tiga dari tanda itu dapat dilihat.
                </p>

                <p>
                    Kubus-kubus yang ditentukan itu (a,b,c,d,e) ialah
                    kubus-kubus yang berbeda, artinya kubus-kubus itu dapat
                    mempunyai tanda-tanda yang sama, akan tetapi susunannya
                    berlainan. Setiap soal memperlihatkan salah satu kubus yang
                    ditentukan di dalam kedududkan yang berbeda.
                </p>

                <p>
                    Carilah kubus yang dimaksudkan itu dan pilihlah opsi pada
                    lembar jawaban. <br />
                    Kubus itu dapat diputar, dapat digulingkan atau dapat
                    diputar dengan digulingkan dalam pikiran Anda.
                </p>
            </div>

            <div>
                <p>Contoh :</p>

                <div className="col-md-8 mx-auto my-5">
                    <img src={example} alt="example" className="w-100" />
                </div>

                <div className="ms-5">
                    <p>
                        <strong>Contoh 08</strong>
                    </p>

                    <p>
                        Contih ini memperlihatkan kubus a dengan kedudukan yang
                        berbeda. <br />
                        Mendapatkannya adalah dengan cara menggulingkan terlebih
                        dahulu kubus itu ke kiri satu kali dan kemudian diputar
                        ke kiri satu kali, sehingga kubus yang bertanda dua segi
                        empat hitam terletak di depan, seperti kubus a. <br />
                        Oleh karena itu, <strong>opsi a harus dipilih.</strong>
                    </p>
                </div>

                <div className="d-flex gap-3 w-fit mx-auto my-5">
                    <span className="box-border border-0">07)</span>
                    <span className="box-border active">a</span>
                    <span className="box-border">b</span>
                    <span className="box-border">c</span>
                    <span className="box-border">d</span>
                    <span className="box-border">e</span>
                </div>
            </div>
        </>
    )
}

export default Wu
