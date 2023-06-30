const Ra = () => {
    return (
        <div>
            <div>
                <p>Soal berikutnya ialah soal-soal perhitungan.</p>
            </div>

            <div>
                <p>Contoh :</p>

                <p>
                    Sebatang pensil harganya 25 rupiah. Berapakah harga 3
                    batang? <br />
                    Jawabannya ialah : 75{" "}
                </p>
                <p></p>
                <p>
                    Untuk menunjukkan jawaban suatu soal, maka pilihlah
                    angka-angka yang terdapat dijawaban itu. <br />
                    Perhatikan cara menjawab berikut :
                </p>

                <div className="numbers my-3">
                    <span className="box-border">1</span>
                    <span className="box-border">2</span>
                    <span className="box-border">3</span>
                    <span className="box-border">4</span>
                    <span className="box-border active">5</span>
                    <span className="box-border">6</span>
                    <span className="box-border active">7</span>
                    <span className="box-border">8</span>
                    <span className="box-border">9</span>
                    <span className="box-border">0</span>
                </div>

                <p>
                    Pada contoh diatas, jawaban ialah 75. Oleh karena itu, angka
                    5 dan 7 harus dipilih. <br />
                    Keurutan angka jawaban tidak perlu dihiraukan.
                </p>
            </div>
        </div>
    )
}

export default Ra
