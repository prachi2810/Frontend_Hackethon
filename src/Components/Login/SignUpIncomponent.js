import { React, useState } from 'react';
import "../Login/SignUpIn.css";
import axios from 'axios'
import jwt_decode from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import google from "../../Images/googleicon.png";
const defaultReg={
    username:'',
    email:'',
    password:''
}
function SignUpIncomponent() {
    const [signIn, setsignIn] = useState(true);
    const [fPass, setfPass] = useState(false);
    const [toggle, setToggle] = useState(false);
    const nav = useNavigate();

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const[Reg,setReg]=useState(defaultReg);
    
    const changeValue = (e) => {
        switch (e.target.id) {
            case 'userName': {
                setUserName(e.target.value)
                break;
            };

            case 'password': {
                setPassword(e.target.value)
                break
            }
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            username, password
        }
        try {
            const response = await axios.post('http://localhost:8000/user/login',
                JSON.stringify(userData),
                {
                    withCredentials: true,
                    headers: { 'Content-Type': 'application/json' }

                })
            console.log(response)
            nav('/')
        }
        catch (err) {
            console.log(err)
        }
    }
    // const changeValueReg=(e)=>{
    //     switch(e.target.id)
    //     {
    //      case 'userName':{
    //        setUserNameReg(e.target.value)
    //        break;
    //      };
    //      case 'email':{
    //        setEmailReg(e.target.value)
    //        break
    //      };
    //      case 'password':{
    //        setPasswordReg(e.target.value)
    //        break
    //      }
    //     }
    //  }
     const handleSubmitReg=async(e)=>{
       e.preventDefault();
    //    const userData={
    //      usernameReg,emailReg,passwordReg
    //    }
                try{
                      const response=await axios.post('http://localhost:8000/user/register',
                      JSON.stringify(Reg),
                      {
                       headers: { 'Content-Type': 'application/json' },
                      // withCredentials: true
                      })
                      setReg(defaultReg)
                  console.log(response);
               }
               catch (err) {
                  console.log(err)
                 }
     }
    return (
        <>
            <div className='row d-flex justify-content-center align-items-center'>
                {!fPass && !signIn && (
                    <>
                        <div className='col-md-8 d-flex justify-content-center align-items-center SignUpContainer'>
                            <form className='FormStyle' onSubmit={handleSubmitReg}>
                                <h1 className='TitleLogin'>Create Account</h1>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <span className='hLine'></span>
                                </div>
                                <div className='imageicon'>
                                    <img src={google} className='gicon' alt="google" />
                                </div>
                                <p className='Paragraph'>--or use your email account--</p>
                                <div class="mb-3">

                                    <input id="username" className='Input' type="text" placeholder='Username' onChange={(e)=>setReg({...Reg,username:e.target.value})} />
                                </div>
                                <div className='mb-3'>

                                    <input id="email" className='Input' type="email" placeholder='Email' onChange={(e)=>setReg({...Reg,email:e.target.value})} />
                                </div>
                                <div className='mb-3'>

                                    <input id="password" className='Input' type="password" placeholder='Password' onChange={(e)=>setReg({...Reg,password:e.target.value})} />
                                </div>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <button className='Button'>Sign Up</button>
                                </div>
                            </form>
                        </div>
                        <div className='col-md-4 d-flex justify-content-center align-items-center backColor'>

                            <div className="LeftOverlayPanel">
                                <h1 className='TitleLogin'>Welcome Back!</h1>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <span className='hLine1'></span>
                                </div>

                                <p className='Paragraph'>To keep connected with us <br /> please login with your personal info</p>
                                <button className='GhostButton' onClick={() => setsignIn(true)}>Sign In</button>
                            </div>

                        </div>
                    </>
                )}

                {signIn && (<>
                    <div className='col-md-4 d-flex justify-content-center align-items-center backColor'>

                        <div className="RightOverlayPanel">

                            <h1 className='Title'>Welcome Friends!</h1>
                            <div className='d-flex justify-content-center align-items-center'>
                                <span className='hLine1'></span>
                            </div>
                            {/* <hr className='hLine1' /> */}
                            <p className='Paragraph'>Enter Your personal details and <br />start journey with us</p>
                            <button className='GhostButton' onClick={() => { setsignIn(false); setfPass(false); }}>Sign Up</button>
                        </div>

                    </div>
                    {!fPass && !toggle &&
                        <div className='col-md-8 d-flex justify-content-center align-items-center'>
                            <form className='FormStyle' onSubmit={handleSubmit}>
                                <h1 className='Title'>Sign in to Account</h1>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <span className='hLine'></span>
                                </div>

                                <div className='imageicon'>
                                    <img src={google} className='gicon' alt="google" />
                                </div>
                                <p className='Paragraph'>--or use your email account--</p>
                                <div className='mb-3'>

                                    <input id="userName" className='Input' type="text" placeholder='Username' onChange={changeValue} />
                                </div>

                                <div className='mb-3'>

                                    <input id="password" className='Input' type="password" placeholder='Password' onChange={changeValue} />
                                </div>
                                <div className='d-flex justify-content-center align-items-center mb-3 '>
                                    <a href='#' className='Anchor' onClick={() => setfPass(true)}>Forgot Your Password?</a>
                                </div>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <button type="submit" className='Button' onClick={handleSubmit}>Sign In</button>
                                </div>
                            </form>
                        </div>
                    }
                    {fPass &&
                        <div className='col-md-8 d-flex justify-content-center align-items-center'>
                            <div>
                                <form className='Form'>
                                    <input id="email" className='Input' type="email" placeholder='Enter Email' />
                                    <button className='Button' onClick={() => { setToggle(true); setfPass(false); }}>Send Mail</button>
                                </form>
                            </div>
                        </div>

                    }
                    {toggle &&
                        <div className='col-md-8 d-flex justify-content-center align-items-center'>
                            <div>
                                <form className='Form'>
                                    <input id="text" className='Input' type="number" placeholder='Enter OTP' />
                                    <button className='Button'>Send</button>
                                </form>
                            </div>
                        </div>
                    }

                </>
                )}

            </div>
        </>
    )
}

export default SignUpIncomponent;