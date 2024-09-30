import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "./AuthContext.jsx";

export const PublicRoutes = () => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated
        ?
            <Navigate to={'/'}/>
        :
            <Outlet/>
}
