import { Link } from "react-router-dom";
import { getUser, logOut } from "../../important";
import { useNavigate } from "react-router-dom";

const Nav = () => {
    let navigate = useNavigate();
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">SMART POST</a>
                <button className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false" aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse
                justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="/" aria-current="page" className="nav-link active">Home</a>
                        </li>
                        {
                            getUser() ? <li className="nav-item">
                                <Link to="/create" className="nav-link">Create</Link>
                            </li> : <li></li>
                        }
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Profile</a>
                            <ul className="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink">
                                
                                <li>{
                                    !getUser() ? <li><Link to="/login" className="dropdown-item" href="#">Login</Link></li> :
                                    <li><div to="/login" className="dropdown-item" onClick={
                                        () => logOut(() => navigate('/'))
                                    }>Log Out</div></li>
                                }</li>  

                            </ul>
                            </li>

                    </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Nav;