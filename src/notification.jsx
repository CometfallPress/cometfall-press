import ScreenContext from "./ScreenContext.jsx";

function Notification() {
    const { screenSize } = ScreenContext()
    return (
        <>
            <a href="https://www.cometfallpress.com/kickstarter/">
                <div className="w-screen bg-[#ed2386] z-60 absolute sticky">
                    <p className={`p-2 text-white font-semibold text-center text-base ${screenSize.ratio>0.7?"portrait:text-[2vw]":"portrait:text-[2.4vw]"} landscape:text-[2vh]`}>
                        Our Kickstarter Pre-Launch is now live! Check it out <u>here</u>!
                    </p>
                </div>
            </a>
        </>
    )
}

export default Notification;