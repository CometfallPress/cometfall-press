import PropTypes from "prop-types";
import {XCircleIcon} from "@heroicons/react/24/outline";

function Modal(props) {

    return (
        <>
            {props.modal&&(
                <div className={`relative w-screen h-screen ${props.modal?"visible":"invisible"} backdrop-blur-md backdrop-brightness-90 transition-all duration-200`}>
                    <div className="fixed left-1/2 top-1/2 -translate-1/2 z-10 w-lg max-w-screen rounded-2xl bg-white p-3 shadow-lg">
                       <div className="flex flex-row whitespace-nowrap">
                           {props.modal.icon}
                           <p className="text-lg m-3 p-1 font-bold whitespace-nowrap">{props.modal.title}</p>
                           <XCircleIcon
                               className="w-6 h-6 mb-auto mt-1 ml-auto mr-2 shrink-0"
                               onClick={props.modal.close}
                           />
                       </div>
                        <p className="text-md m-3 p-1">{props.modal.message}</p>
                        <div className="flex flex-row w-auto gap-x-2 m-3 mx-auto">
                            {props.modal.buttons.map((b, index) => (
                                <button
                                    key={index}
                                    onClick={b.onClick}
                                    className="bg-emerald-500 active:bg-emerald-700 text-white font-bold py-2 px-2 mx-auto rounded-lg flex flex-row whitespace-nowrap"
                                >
                                    {b.icon}
                                    <p className="my-auto whitespace-nowrap mr-2">{b.text}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

Modal.propTypes = {
    modal: PropTypes.object
}

export default Modal;