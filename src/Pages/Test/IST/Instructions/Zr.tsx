const Zr = () => {
    return (
        <div>
            <div className="my-5">
                <p>Pada persoalan berikut akan diberikan deret angka.</p>
                <p>
                    Setiap deret tersusun menurut suatu aturan tertentu dan
                    dapat dilanjutkan berdasarkan aturan tersebut.
                </p>
                <p>
                    Carilah setiap deret angka berikutnya dan pilih jawaban yang
                    sesuai.
                </p>
            </div>

            <div>
                <p>Contoh :</p>

                <div className="numbers">
                    <span className="box-border">2</span>
                    <span className="box-border">4</span>
                    <span className="box-border">6</span>
                    <span className="box-border">8</span>
                    <span className="box-border">10</span>
                    <span className="box-border">12</span>
                    <span className="box-border">14</span>
                    <span className="box-border">?</span>
                </div>

                <p className="mb-3 mt-5">
                    Pada deret ini angka berikutnya selalu didapat jika angka
                    didepannya ditambahkan dengan 2. <br />
                    Maka jawabannya ialah 16.
                </p>

                <div className="numbers my-5">
                    <span className="box-border active">1</span>
                    <span className="box-border">2</span>
                    <span className="box-border">3</span>
                    <span className="box-border">4</span>
                    <span className="box-border">5</span>
                    <span className="box-border active">6</span>
                    <span className="box-border">7</span>
                    <span className="box-border">8</span>
                    <span className="box-border">9</span>
                    <span className="box-border">10</span>
                </div>

                <p>Oleh karena itu, anka 1 dan 6 harus dipilih.</p>
            </div>
        </div>
    )
}

export default Zr
