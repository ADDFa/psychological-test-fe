import Swal, { SweetAlertOptions } from "sweetalert2"

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

export const Confirm = (
    { title = "Anda Yakin?", text, ...rest }: SweetAlertOptions,
    onConfirmed: () => any
) => {
    Swal.fire({
        title: title,
        text: text,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#0A2463",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya!",
        cancelButtonText: "Batal",
        ...rest
    }).then((result) => {
        if (result.isConfirmed) onConfirmed()
    })
}
