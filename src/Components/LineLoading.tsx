import { useEffect, useState } from "react"

const LineLoading = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "3px",
                backgroundColor: "#f0f0f0",
                zIndex: 9999,
                opacity: loading ? 1 : 0,
                transition: "opacity 0.3s ease-in-out"
            }}
        >
            <div
                style={{
                    width: "50%",
                    height: "100%",
                    backgroundColor: "#007bff",
                    animation: loading
                        ? "lineLoading 1.5s infinite linear"
                        : "none"
                }}
            />
        </div>
    )
}

export default LineLoading
