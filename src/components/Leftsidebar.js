import { Link } from "react-router-dom";
function Leftsidebar() {
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
            <li className="nav-item">
            <Link to="/Dashboard" className="nav-link">
                <i className="icon-grid menu-icon" />
                <span className="menu-title">Dashboard</span>
            </Link>
            </li>
            <li className="nav-item">
            <a
                className="nav-link"
                data-toggle="collapse"
                href="#ui-basic"
                aria-expanded="false"
                aria-controls="ui-basic"
            >
                <i className="icon-layout menu-icon" />
                <span className="menu-title">User Request</span>
                <i className="menu-arrow" />
            </a>
            <div className="collapse" id="ui-basic">
                <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/ui-features/buttons.html">
                    User Request Form
                    </a>
                </li>
                </ul>
            </div>
            </li>
        </ul>
        </nav>

      );
}

export default Leftsidebar;