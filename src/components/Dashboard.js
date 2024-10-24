import   ItemRequest  from "./ItemRequest";
import UserRequestData from "./UserRequestData";
import DashboardTopCard from "./DashboardTopCard";
import UserWelcomeMessage from "./UserWelcomeMessage";
function Dashboard() {
    const isAdmin = 1;
    return (
        <>
        <UserWelcomeMessage/>
        {isAdmin ? <><DashboardTopCard/><UserRequestData/></> : <ItemRequest/>}
        </>        
    );
}

export default Dashboard;