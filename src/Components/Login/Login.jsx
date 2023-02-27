
import React, { useState }  from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode';
import { useNavigate } from "react-router-dom";
function Login() {
  const nav = useNavigate();

  const[username,setUserName]=useState('');
  const[password,setPassword]=useState('');
  const changeValue=(e)=>{
     switch(e.target.id)
     {
      case 'userName':{
        setUserName(e.target.value)
        break;
      };
  
      case 'password':{
        setPassword(e.target.value)
        break
      }
     }
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const userData={
      username,password
    }
            try{
                   const response=await axios.post('http://localhost:8000/user/login',
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
  return (
    <div>
       <form onSubmit={handleSubmit}>
       <div class="form-group">
    <label for="userName">User Name</label>
    <input type="temxt" class="form-control" id="userName" aria-describedby="emailHelp" placeholder="Enter userName" onChange={changeValue}></input>
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" placeholder="Password" onChange={changeValue}></input>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Login