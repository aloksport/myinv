import {
    Outlet,
    Navigate
} from 'react-router-dom';
function Protect(props){
    console.log(props.isAuthenticated);
    return (
        props.isAuthenticated ? <Outlet /> : <Navigate to="/Login" /> 
    )
}
export default Protect;