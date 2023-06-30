namespace FaTest {
    interface SetImage {
        imgName: string
        imgRef: React.RefObject<HTMLImageElement>
        spinnerRef?: React.RefObject<HTMLDivElement>
        showSpinner?: boolean
        then?: (res: string) => void
    }
}
