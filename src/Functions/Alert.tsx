import Swal from "sweetalert2"

export const Alert = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer)
        toast.addEventListener("mouseleave", Swal.resumeTimer)
    }
})

export const Confirm = (onConfirmed: () => any) => {
    Swal.fire({
        title: "Anda yakin?",
        text: "Teliti kembali jawaban anda",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#0A2463",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, lanjutkan!"
    }).then((result) => {
        if (result.isConfirmed) onConfirmed()
    })
}
