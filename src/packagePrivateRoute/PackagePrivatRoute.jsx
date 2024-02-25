import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PackagePrivatRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const LsData = JSON.parse(localStorage.getItem("clientPackage"))
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (!user) {
        return <Navigate to="/login" ></Navigate>
    }
    if (!LsData) {
        return <div className="flex justify-center items-center h-[80vh]">
            <div className="w-96 h-96 bg-base-100 shadow-lg border flex justify-center items-center text-3xl font-bold text-pink-500">Please Purchage package</div>
        </div>

    }
    return children
};

export default PackagePrivatRoute;