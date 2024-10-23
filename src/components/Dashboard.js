import   Navbar  from "./Navbar";
import Leftsidebar from "./Leftsidebar";
import Mainpanel from "./Mainpanel";
function Dashboard() {
    return (
        <div className="container-scroller">
            <Navbar/>
            <div class="container-fluid page-body-wrapper">
                <Leftsidebar/>
                <Mainpanel/>
            </div>

        </div>
    );
}

export default Dashboard;