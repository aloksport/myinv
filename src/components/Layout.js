import   Navbar  from "./Navbar";
import Leftsidebar from "./Leftsidebar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
function Layout() {
    return (
        <div className="container-scroller">
            <Navbar/>
            <div className="container-fluid page-body-wrapper">
                <Leftsidebar/>
                <div className="main-panel">
                    <div className="content-wrapper">
                        <Outlet />                
                    </div>
                <Footer/>
                </div>
            </div>
        </div>
    );
}
export default Layout;