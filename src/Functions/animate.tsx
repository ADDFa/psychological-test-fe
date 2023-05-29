export const fadeInLeft = (
    el: HTMLElement | null,
    options: KeyframeAnimationOptions
) => {
    if (!el) return

    const keyframes: Keyframe[] = [
        {
            visibility: "visible",
            opacity: "1",
            transform: "translateX(0)"
        }
    ]

    el.animate(keyframes, options)
}

export const fadeOutLeft = (
    el: HTMLElement | null,
    options: KeyframeAnimationOptions
) => {
    if (!el) return

    const keyframes: Keyframe[] = [
        {
            visibility: "visible",
            opacity: "0",
            transform: "translateX(-2rem)"
        }
    ]

    el.animate(keyframes, options)
}
