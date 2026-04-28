import PropTypes from "prop-types";
import { motion } from "framer-motion";

function Toast({ id, message, type= "info" }) {

    return (
        <motion.div
            key={id}
            layout
            initial={{ opacity: 0, y: -10, type: "spring" }}
            animate={{ opacity: 1, y: 20, type: "spring" }}
            exit={{ opacity: 0, y: -10, type: "spring" }}
            className={`
              pointer-events-auto rounded-xl px-4 py-3 text-black font-semibold shadow-lg landscape:w-[25vw] portrait:w-[50vw] text-center 
              ${type === "success" ? "bg-emerald-200" : ""}
              ${type === "error" ? "bg-red-200" : ""}
              ${type === "info" ? "bg-slate-100" : ""}
            `}
        >
            {message}
        </motion.div>
    );
}

Toast.propTypes = {
    id: PropTypes.string,
    message: PropTypes.string,
    type: PropTypes.string,
}

export default Toast;