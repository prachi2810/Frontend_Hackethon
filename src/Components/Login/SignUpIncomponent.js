import { React, useState ,useEffect} from 'react';
import "../Login/SignUpIn.css";
import axios from 'axios'
import jwt_decode from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import googleImg from "../../Images/googleicon.png";

function SignUpIncomponent() {
    const nav = useNavigate();
    const [ user, setUser ] = useState({});
    const [signIn, setsignIn] = useState(true);
    const [fPass, setfPass] = useState(false);
    const [toggle, setToggle] = useState(false);
    const google = window.google;
    const[loaded,setLoaded]=useState(false)
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const[Reg,setReg]=useState({});
    const [email,setEmail]=useState('')
    const[OTP,setOTP]=useState("")


    
  async function handleCallbackResponse (response){
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    if(!signIn)
    {
        const userData={
            username:userObject.email,
            email:userObject.email,
        }
        try{
              const response=await axios.post('http://localhost:8000/user/registerByGoogle',
              JSON.stringify(userData),
              {
               headers: { 'Content-Type': 'application/json' },
              })
              console.log(response)
       }
       catch (err) {
          console.log(err)
         }
     axios.post('');

    setUser(userObject);
    }
    else{
        

        const userData = {
            username:userObject.email, token:response.credential
        }
        try {
            const response = await axios.post('http://localhost:8000/user/loginByGoogle',
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
 

  }
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

    const sendOtp=async()=>{
        setToggle(true); setfPass(false);
        const result=await axios.get(`http://localhost:8000/user/generateOTP/${username}`)
        console.log(result)
    }
    const submitOTP=async()=>{
        console.log(username)
         const response=await axios.get(`http://localhost:8000/user/verifyOTP`,{params:{username:username,code:OTP}}) 
         console.log(response)
    }
     const handleSubmitReg=async(e)=>{
       e.preventDefault();
                try{
                      const response=await axios.post('http://localhost:8000/user/register',
                      JSON.stringify({username,email,password}),
                      {
                       headers: { 'Content-Type': 'application/json' },
                      })
                      
               }
               catch (err) {
                  console.log(err)
                 }
     }

 
     useEffect(() => {
        google.accounts.id.initialize({
          client_id: "998114193402-aifjqje7nrbi5m1s3b8kflesuvnkcunl.apps.googleusercontent.com",
          callback: handleCallbackResponse
        });
        google.accounts.id.renderButton(

          document.getElementById("signInDiv"),
    
          { theme: "filled_blue", size: "large",shape:"pill" }
    
        );
    
      }, [signIn]);
    
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
                               
                                <div class="mb-3">

                                    <input id="username" className='Input' type="text" placeholder='Username' onChange={(e)=>setUserName(e.target.value)} />
                                </div>
                                <div className='mb-3'>

                                    <input id="email" className='Input' type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
                                </div>
                                <div className='mb-3'>

                                    <input id="password" className='Input' type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
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
                                <div className='d-flex justify-content-center align-items-center'>
                                <div id="signInDiv"></div>
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
                                    <input id="email" className='Input' type="text" placeholder='Enter Username' onChange={(e)=>{setUserName(e.target.value)}} />
                                    <button className='Button' onClick={sendOtp}>Send OTP</button>
                                </form>
                            </div>
                        </div>
                    }
                    {toggle &&
                        <div className='col-md-8 d-flex justify-content-center align-items-center'>
                            <div>
                                <form className='Form'>
                                    <input id="text" maxLength={4} className='Input' type="text" placeholder='Enter OTP' onChange={(e)=>{setOTP(e.target.value);console.log(OTP)}}/>
                                    <button className='Button' onClick={submitOTP}>Submit</button>
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