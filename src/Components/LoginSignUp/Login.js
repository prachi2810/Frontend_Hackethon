import React,{useState,useEffect} from 'react';
// import useData from '../../hooks/useData';
import "./login.css";
import ImageF from "../../Images/signinLab.jpg";
import Google from "../../Images/icons8-google.svg";
import ImageS from "../../Images/signupLap.jpg";
// import axios from '../../api/axios';
import { Navigate, useNavigate ,useParams,Link} from "react-router-dom";
import Navbar from '../Navbar/Navbar';

// const defaultRegister={
//     firstname:"",
//     lastname:"",
//     phone:"",
//     email:"",
//     password:"",
//     salary:""
// }

// const defaultLogin={
//     email:"",
//     password:""
// }




export default function Login() {
    // // const {setAuth,err,setErr}=useData();
    // const {setAuth,err,setErr}=useData();
    // const [register,setReg]=useState(defaultRegister);
    // const [login,setLogin]=useState(defaultLogin);
    const [toggle, setToggle] = useState(true);
    // const [id,Setid]=useState(0);
    
    // // const [idVal,SetidVal]=useState(0);
    // const navigate = useNavigate();

    // // const addSalary=()=>{
    // //     navigate('/info')
    // // }
    // useEffect(()=>{
    // //   setErr('');

    // },[register]);

    // useEffect(()=>{
    //     // setErr('');
    // },[login])

    // const handleReg=async(e)=>{
    //     e.preventDefault();

    //     try{
    //            const response=await axios.post('/user/register',
    //            JSON.stringify(register),
    //            {
    //             headers: { 'Content-Type': 'application/json' },
    //             withCredentials: true
    //            })
           
    //        setReg(defaultRegister);
    //        console.log(response);
    //     }
    //     catch (err) {
    //         if (!err?.response?.data) {
    //           //setErr('No Server Response');
    //         } else if (err.response?.status === 400) {
    //         //   setErr(err.response.data.data);
    //         }else {
    //         //   setErr('Login Failed');
    //         }
    //       }

    // }
    
    // const handleLogin=async(e)=>{
    //     e.preventDefault();

    //     try{
    //            const response=await axios.post('/user/login',
    //            JSON.stringify(login),
    //            {
    //             headers: { 'Content-Type': 'application/json' },
    //             withCredentials: true
    //            })
    //            const accessToken = response?.data?.accessToken;
    //            console.log(accessToken);
    //            setAuth({accessToken});
        
    //        navigate(`/first/Home/${response.data.validUser._id}`);
    //     }
    //     catch(err){
    //         if (!err?.response?.data) {
    //             //setErr('No Server Response');
    //             console.log(err);
    //             console.log('No response')
    //           } else if (err.response?.status === 400) {
    //             // setErr(err.response.data.data);
                
    //           }else {
    //             // setErr('Login Failed');
    //             console.log('Register Failed')
    //           }
    //     }

    // }
   
    return (
        <>
        <Navbar/>
            {!toggle &&(<div className="row gx-0">
                <div className="col-md-8 d-flex justify-content-center align-items-center">
                    {/* <div className="image"> */}
                    <img src={ImageS} alt="login Image" className="imagelogin"></img>
                    {/* </div> */}
                </div>
                <div className="col-md-4 d-flex justify-content-end align-items-center">
                    {/* <div className="container-fluid"> */}
                    <div className="signUpForm">

                        <form className="page">
                            <div className="mb-3">
                                <label for="firstname"  className="form-label">Username</label>
                                <input type="text" value="" id="firstname"  className="form-control" placeholder="Username" />

                            </div>
                            
                            <div className="mb-3">
                                <label for="email" className="form-label">Email address</label>
                                <input type="email" value=" " id="email"  className="form-control" placeholder="Email" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="password" className="form-label">Password</label>
                                <input type="password" value="" id="password"  className="form-control" placeholder="Password" />
                            </div>
        
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary buttonlogin">Sign Up</button>
                            </div>
                        </form>
                        
                         <div className="text-center mt-3">
                            <h6>-or Already Have Account-</h6>
                            <button  onClick={() => setToggle(!toggle)} class="btn btn-primary">Login</button>
                            

                            
                        </div> 
                    </div>

                    {/* </div> */}

                </div>
            </div>
            )}

            {toggle &&(<div className="row gx-0">
                <div className="col-md-7 d-flex justify-content-center align-items-center">
                    {/* <div className="image"> */}
                    <img src={ImageF} alt="login Image" className="imagelogin"></img>
                    {/* </div> */}
                </div>
                <div className="col-md-5 d-flex justify-content-end align-items-center ">
                    {/* <div className="container-fluid"> */}
                    <div className="loginForm1">

                        <form className="page">
               
                        <div className="mb-3">
                                <label for="firstname"  className="form-label">Username</label>
                                <input type="text" value="" id="firstname"  className="form-control" placeholder="Username" />

                            </div>
                            <div className="mb-3">
                                <label for="password" className="form-label">Password</label>
                                <input type="password" value="" id="password" className="form-control" placeholder="Password"  />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary buttonlogin">Log In</button>
                            </div>
                        </form>
                        <div className="text-center">
                            <button className="btn"><img src={Google}></img></button>
                            <h6>-or Create New Account-</h6>
                            <button  onClick={() => setToggle(!toggle)} class="btn btn-primary mb-5">Sign Up</button>

                        </div>
                    </div>

                    {/* </div> */}

                </div>
            </div>
            )}


        </>
    )
}