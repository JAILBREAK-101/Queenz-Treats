import { toast } from "react-toastify";

interface ToastsProps {
    message: string;
    status: string | "success" | "info" | "error"
}

const Toasts = ({message, status}: ToastsProps) => {
    return (
        <>
            {
                status == "success" ? toast.success(message) : toast.error(message)
            }
        </>
    )
}

export { Toasts }