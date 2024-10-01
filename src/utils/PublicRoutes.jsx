import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "./AuthContext.jsx";

export const PublicRoutes = () => {
    // const { isAuthenticated } = useAuth();
    const isAuthenticated = true;

    return isAuthenticated
        ?
            <Navigate to={'/'}/>
        :
            <Outlet/>
}
