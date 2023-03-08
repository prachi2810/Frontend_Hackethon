import { React, useState } from 'react';
import './navbar.css';
import { Outlet, Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

function Navbar() {
    const [isLogin, setLogin] = useState(false);
    // const { id } = useParams();
    const [Id,setId]=useState(0);
    const checkLogin = async () => {
        try {
            const result = await axios.get('http://localhost:8000/user/isLoggedIn', { withCredentials: true })
            // nav('/editor')
            console.log(result.data.userId);
            setId(result.data.userId);
            setLogin(true);
        }
        catch (err) {
            //    nav('/login')
            setLogin(false);
        }
    }
    useEffect(() => {

        checkLogin();
    }, [])
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary  shadow navbarClass">
                <div className="container-fluid">
                    <Link to="/Home"><a className="navbar-brand" href="#">WEBIFY</a></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse rightAlign" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            {isLogin ? 
                                   <li className="nav-item dropdown">
                                     <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                         <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                                     </a>
                                     <ul className="dropdown-menu dropdown-menu-end">
                                         <li><Link to={`/allPages/${Id}`}><a className="dropdown-item" href="#">All Pages</a></Link></li>
                                         <li><a className="dropdown-item" href="#">Profile</a></li>
                                         <li><hr className="dropdown-divider" /></li>
                                         <li><a className="dropdown-item" href="#">Sign Out</a></li>
                                     </ul>
                                 </li> 
                                 : <li classNameName="nav-item">
                                    <Link to="/login"><a classNameName="nav-login" href="#">SignUp/Login</a></Link>
                                </li>
                                 } 
                        </ul>

                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar;