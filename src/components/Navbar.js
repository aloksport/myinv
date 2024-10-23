import {  Link } from "react-router-dom";
function Navbar(){
    return (
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">

            <Link to="/Dashboard" className="navbar-brand brand-logo mr-5">
                <img src="images/logo.png" className="mr-2" alt="logo" />
            </Link>
            <Link to="/Dashboard" className="navbar-brand brand-logo-mini">
                <img src="images/logo.png" alt="logo" />
            </Link>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
            <button
                className="navbar-toggler navbar-toggler align-self-center"
                type="button"
                data-toggle="minimize"
            >
                <span className="icon-menu" />
            </button>

            <ul className="navbar-nav navbar-nav-right">
                <li className="nav-item nav-profile dropdown">
                <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                    id="profileDropdown"
                >
                    <img src="images/faces/face28.jpg" alt="profile" />
                </a>
                <div
                    className="dropdown-menu dropdown-menu-right navbar-dropdown"
                    aria-labelledby="profileDropdown"
                >
                    <a className="dropdown-item">
                    <i className="ti-settings text-primary" />
                    Settings
                    </a>
                    <a className="dropdown-item">
                    <i className="ti-power-off text-primary" />
                    Logout
                    </a>
                </div>
                </li>
            </ul>
            <button
                className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                type="button"
                data-toggle="offcanvas"
            >
                <span className="icon-menu" />
            </button>
            </div>
        </nav>        
    );
}
export default Navbar;