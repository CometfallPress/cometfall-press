import { AnimatePresence } from "framer-motion";
import { useAppContext } from "../contexts/AppContext.jsx";
import Toast from "./toast.jsx";

function ToastStack() {
    const { toastState } = useAppContext()
    return (
        <div className="fixed left-1/2 -translate-x-1/2 z-50 flex flex-col items-end gap-2">
            <AnimatePresence initial={false}>
                {toastState.toasts.map((toast) => (
                    <Toast key={toast.id} message={toast.message} type={toast.type}/>
                ))}
            </AnimatePresence>
        </div>
    );
}

export default ToastStack;