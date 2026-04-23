import ScreenContext from "./ScreenContext.jsx";
import constants from "./constants.jsx"
import { useAppContext } from "./AppContext.jsx";

function Notification() {
    const { screenState, breakpoints } = useAppContext()
    return (
        <>
            <a href={`${import.meta.env.VITE_REDIRECT_URL}/kickstarter/`}>
                <div className="w-screen bg-[#ed2386] z-60 absolute sticky">
                    <p className={`p-2 text-white font-semibold text-center text-base ${screenState.ratio>breakpoints.bp1?"portrait:text-[1.5vw]":"portrait:text-[1.3vh]"} landscape:text-[1.8vh]`}>
                        Our Kickstarter Pre-Launch is now live! Check it out <u>here</u>!
                    </p>
                </div>
            </a>
        </>
    )
}

export default Notification;