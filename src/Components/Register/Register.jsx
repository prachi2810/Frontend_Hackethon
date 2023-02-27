
import React, { useState }  from 'react'
import axios from 'axios';
function Register() {
  const[username,setUserName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const changeValue=(e)=>{
     switch(e.target.id)
     {
      case 'userName':{
        setUserName(e.target.value)
        break;
      };
      case 'email':{
        setEmail(e.target.value)
        break
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
      username,email,password
    }
            try{
                   const response=await axios.post('http://localhost:8000/user/register',
                   JSON.stringify(userData),
                   {
                    headers: { 'Content-Type': 'application/json' },
                   // withCredentials: true
                   })
               console.log(response);
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
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={changeValue}></input>
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

export default Register