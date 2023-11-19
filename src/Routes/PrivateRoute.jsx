import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading) {
    return <div className="min-h-[calc(100vh-300px)] flex justify-center items-center">
            <progress className="progress w-56"></progress>
        </div>
    }

    if(user) {
        return children;
        }
        return <Navigate to='/login' state={{from:location}}></Navigate>
};

export default PrivateRoute;