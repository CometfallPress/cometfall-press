import {Outlet, useLocation, useNavigate} from "react-router-dom";
import Navbar from './elements/navbar.jsx'
import Footer from './elements/footer.jsx'
import Scaler from "./elements/scaler.jsx";
import Notification from "./elements/notification.jsx"
import { useAppContext } from "./contexts/AppContext.jsx";
import {useEffect} from "react";



function Layout() {

    const { scrollState, screenState, user } = useAppContext();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (user==="loading") return
        if (location.pathname.includes("admin")&&user===null) {
            navigate("/");
        }
    }, [user])

    return (
        <>
            <div className="w-full h-full fixed scroll-smooth project" style={{ backgroundPosition: `0px ${(scrollState.scrollPosition-200) * -0.75}px`}}/>
            <div className="w-full h-full fixed overflow-y-scroll overflow-x-clip scroll-smooth" onScroll={scrollState.handleScroll}>
                {(!user)&&<Notification />}
                <Navbar />
                <Scaler scale={0.9}>
                    <Outlet context={{scrollState, screenState, user}}/>
                    <Footer />
                </Scaler>
            </div>
        </>
  )
}

export default Layout