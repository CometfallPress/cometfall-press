import ScreenContext from "../contexts/ScreenContext.jsx";
import constants from "../contexts/Constants.jsx"
import { useAppContext } from "../contexts/AppContext.jsx";

function Notification() {
    const { screenState, breakpoints } = useAppContext()
    return (
        <>
            <a href={`${import.meta.env.VITE_REDIRECT_URL}/kickstarter/`}>
                <div className="w-screen bg-[#ed2386] z-60 absolute sticky">
                    <p className={`p-2 text-white font-semibold text-center text-base ${screenState.ratio>breakpoints.bp1?"portrait:text-[1.5vw]":"portrait:text-[1.3vh]"} landscape:text-[1.8vh]`}>
                        Subscribe to our newsletter for an exclusive reward!
                    </p>
                </div>
            </a>
        </>
    )
}

export default Notification;