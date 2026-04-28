import { useState } from "react"

function ToastContext() {
    const [toasts, setToasts] = useState([])

    const addToast = (message, type = "info", duration= 2000) => {
        const id = crypto.randomUUID()

        setToasts((prev) => [
            ...prev,
            { id, message, type, duration },
        ])

        setTimeout(() => {
            removeToast(id)
        }, duration)
        
        return id
    }

    const removeToast = (id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
    }

    return {toasts, addToast, removeToast}
}

export default ToastContext