import {Navigate, Outlet} from "react-router-dom";
import PrivateLayout from "../layouts/Private Layout/PrivateLayout.jsx";

export const ProtectedRoutes = () => {
    const user = true;
    return user
        ?
        <PrivateLayout>
            <Outlet/>
        </PrivateLayout>
        :
        <Navigate to={'/'}/>
}
