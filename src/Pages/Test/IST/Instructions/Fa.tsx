import example from "../../../../Assets/images/example-fa.jpg"

const Fa = () => {
    return (
        <div>
            <div>
                <p>
                    Pada persoalan berikutnya, setiap soal memperlihatkan
                    sesuatu bentuk tertentu yang terpotong menjadi beberapa
                    bagian.
                </p>
                <p>
                    Carilah diantara bentuk-bentuk yang ditentukan (a, b, c, d,
                    e), bentuk yang dapat dibangun dengan cara menyusun
                    potongan-potongan itu sedemikian rupa, sehingga tidak ada
                    kelebihan sudut atau ruang di antaranya.
                </p>
                <p>
                    Carilah bentuk-bentuk itu dan pilihlah huruf yang
                    menunjukkan bentuk tadi.
                </p>
            </div>

            <div>
                <p>Contoh :</p>

                <div className="my-5">
                    <div className="col-md-8 mx-auto mb-3">
                        <img src={example} alt="example" className="w-100" />
                    </div>

                    <p>
                        Jika potongan-potongan pada contoh 07) diatas disusun
                        (digabungkan), maka akan menghasilkan betuk a. <br />
                        Oleh karena itu, opsi a harus dipilih
                    </p>

                    <div className="d-flex gap-3 w-fit mx-auto my-5">
                        <span className="box-border border-0">07)</span>
                        <span className="box-border active">a</span>
                        <span className="box-border">b</span>
                        <span className="box-border">c</span>
                        <span className="box-border">d</span>
                        <span className="box-border">e</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fa
