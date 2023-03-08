import { React, useState } from 'react';
import './navbar.css';
import { Outlet, Link,useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

function Navbar() {
    const [isLogin, setLogin] = useState(false);
    const {id}=useParams();
    const navigate=useNavigate();
    const checkLogin = async () => {
        try {
            const result = await axios.get('http://localhost:8000/user/isLoggedIn', { withCredentials: true })
            setLogin(true);
        }
        catch (err) {
            setLogin(false);
        }
    }
    const logout=async()=>{
        try{
            const response=await axios.get('http://localhost:8000/user/logout',{withCredentials:true});
            if(window.location.pathname!=='/')
            navigate('/')
            else{
                window.location.reload();
            }
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
        checkLogin();
    }, [])
    return (
        <>
            <nav class="navbar fixed-top navbar-expand-sm navbarClass shadow">
                <div class="container-fluid">
                    <Link to="/Home"><a class="navbar-brand" href="#">WEBIFY</a></Link>
                    <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                          {isLogin?  
                            <li class="nav-item">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle" />
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><Link to={`/addPage/${id}`}><a class="dropdown-item" href="#">All Pages</a></Link></li>
                                    <li><a class="dropdown-item" href="#">Profile</a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a class="dropdown-item"  onClick={logout}>Log Out</a></li>
                                </ul>
                            </li>:<li className="nav-item">
                                    <Link to="/login"><a className="nav-link" href="#">SignUp/Login</a></Link>
                                </li>}
                            {/* <li class="nav-item dropdown-menu-end">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                    {/* </div> */}
                    {/* </header> */}
                </div>
            </nav>
            {/* <nav className="navbar fixed-top navbar-expand-sm navbarClass">
                <div className="container-fluid ">
                    <Link to="/Home" className='navbar-brand'>WEBIFY</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Templates</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">AboutUs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">ContactUs</a>
                            </li>
                            {isLogin ?
                                <li>
                                        <a href="#" class="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-dark text-decoration-none dropdown-toggle" id="dropdownNavLink" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle" />
                                        </a>
                                        <ul class="dropdown-menu drop" aria-labelledby="dropdownUser1">
                                            <li><a class="dropdown-item" href="#">New project...</a></li>
                                            <li><a class="dropdown-item" href="#">Settings</a></li>
                                            <li><a class="dropdown-item" href="#">Profile</a></li>
                                            <li><hr class="dropdown-divider" /></li>
                                            <li><a class="dropdown-item" href="#">Sign out</a></li>
                                        </ul>
                                </li>
                                : <li className="nav-item">
                                    <a className="nav-link" href="#">SignUp/Login</a>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav> */}

            {/* <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">WEBIFY</a>
                    <div classNameName='d-flex justify-items-end'>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled">Disabled</a>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </nav> */}
        </>
    )
}

export default Navbar;