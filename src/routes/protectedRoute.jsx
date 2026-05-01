import {useAppContext} from "../contexts/AppContext.jsx";
import {Navigate, Outlet} from "react-router-dom";

function ProtectedRoute() {

    const { user } = useAppContext();

    if (!user) {
        return <Navigate to="/login" replace  />;
    }

    return <Outlet />;
}

export default ProtectedRoute