import { Outlet } from "react-router-dom";
import Navbar from './navbar.jsx'
import ScrollContext from "./ScrollContext.jsx";
import ScreenContext from "./ScreenContext.jsx";
import Footer from './footer.jsx'
import Scaler from "./scaler.jsx";
import Notification from "./notification.jsx"



function Layout() {

    const { scrollPosition, sdir, handleScroll } = ScrollContext()
    const { screenSize } = ScreenContext()

    return (
        <>
            <div className="w-full h-full fixed scroll-smooth project" style={{ backgroundPosition: `0px ${(scrollPosition-200) * -0.75}px`}}/>
            <div className="w-full h-full fixed overflow-y-scroll overflow-x-clip scroll-smooth" onScroll={handleScroll}>
                <Notification />
                <Navbar scrollstate={{scrollPosition, sdir}}/>
                <Scaler scale={0.9}>
                    <Outlet context={{scrollPosition, sdir, screenSize}}/>
                    <Footer />
                </Scaler>
            </div>
        </>
  )
}

export default Layout