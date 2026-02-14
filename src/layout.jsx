import { Outlet } from "react-router-dom";
import Navbar from './navbar.jsx'
import ScrollContext from "./ScrollContext.jsx";
import Footer from './footer.jsx'
import Scaler from "./scaler.jsx";




function Layout() {

    const { scrollPosition, sdir, handleScroll } = ScrollContext()

    return (
        <>
            <div className="w-full h-[100%] fixed scroll-smooth project" style={{ backgroundPosition: `0px ${(scrollPosition-200) * -0.75}px`}}/>
            <div className="w-full h-full fixed overflow-y-scroll overflow-x-clip scroll-smooth" onScroll={handleScroll}>
                <Navbar up={sdir}/>
                <Scaler scale={0.9}>
                    <Outlet />
                    <Footer />
                </Scaler>
            </div>
        </>
  )
}

export default Layout