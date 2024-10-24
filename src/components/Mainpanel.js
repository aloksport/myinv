import Footer from "./Footer";
import DashboardTopCard from "./DashboardTopCard";
import UserRequestData from "./UserRequestData";
import UserWelcomeMessage from "./UserWelcomeMessage";
import ItemRequest from "./ItemRequest";
function Mainpanel() {
    const isAdmin = 1;
    return (
  
        <div className="main-panel">
            <div className="content-wrapper">
                <UserWelcomeMessage/>
                {isAdmin ? <><DashboardTopCard/><UserRequestData/></> : <ItemRequest/>}                
            </div>
            <Footer/>
        </div>

      );
}

export default Mainpanel;