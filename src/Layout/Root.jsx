import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
<ToastContainer></ToastContainer>
const Root = () => {
    return (
        <div style={{overflowX:"hidden", overflowY:"hidden"}}>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;