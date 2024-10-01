import {Navigate, Outlet} from "react-router-dom";
import PrivateLayout from "../layouts/Private Layout/PrivateLayout.jsx";
import {useAuth} from "./AuthContext.jsx";

export const ProtectedRoutes = () => {
    // const { isAuthenticated } = useAuth();
    const isAuthenticated = true;
    return isAuthenticated
        ?
        <PrivateLayout>
            <Outlet/>
        </PrivateLayout>
        :
        <Navigate to={'/login'}/>
}
