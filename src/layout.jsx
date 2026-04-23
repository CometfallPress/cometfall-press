import { Outlet } from "react-router-dom";
import Navbar from './navbar.jsx'
import ScrollContext from "./ScrollContext.jsx";
import ScreenContext from "./ScreenContext.jsx";
import Footer from './footer.jsx'
import Scaler from "./scaler.jsx";
import Notification from "./notification.jsx"
import { useAppContext } from "./AppContext";
import PropTypes from "prop-types";



function Layout() {

    const { scrollState } = useAppContext();

    return (
        <>
            <div className="w-full h-full fixed scroll-smooth project" style={{ backgroundPosition: `0px ${(scrollState.scrollPosition-200) * -0.75}px`}}/>
            <div className="w-full h-full fixed overflow-y-scroll overflow-x-clip scroll-smooth" onScroll={scrollState.handleScroll}>
                <Notification />
                <Navbar />
                <Scaler scale={0.9}>
                    <Outlet context={{scrollState.scrollPosition, sdir, screenSize, user}}/>
                    <Footer />
                </Scaler>
            </div>
        </>
  )
}

export default Layout