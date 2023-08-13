import React from 'react'
import { useState } from 'react'
import {Form,FormGroup,Button,Label,Input} from  "reactstrap"
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../service/api'
import toast, { Toaster } from 'react-hot-toast';
const LoginForm = () => {

  const navigate=useNavigate()
  const [userDetails,setUserDetails]=useState({
    email:"",
    password:"",
  
  })
  
  const submitted=async(e)=>{
   
  e.preventDefault()

    const response=await loginUser(userDetails.email,userDetails.password)

  
    if(response.data.success){
      localStorage.setItem("register-user",response.data.foundUser.userName)
      toast.success(response.data.message)
    setTimeout(()=>{ 
    navigate("/")
    },2000)
    
    }else{
      toast.error(response.data.message)
    }
  

  }
  return (
    <div className='hole-form'>
    <div className='register-form'>
      
        <div >
     
        <Form onSubmit={submitted} className='form-container'>
        <h2 className='text-center'>Login Now</h2>

<FormGroup floating>
  <Input
    id="exampleEmail"
    name="email"
    placeholder="Email"
    type="email"
    required
    value={userDetails.email}
    onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})}
  />
  <Label for="exampleEmail">
    Email
  </Label>
</FormGroup>
{' '}


<FormGroup floating>
  <Input
    id="examplePassword"
    name="password"
    placeholder="Password"
    type="password"
    required
    value={userDetails.password}
    onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})}
  />
  <Label for="examplePassword">
    Password
  </Label>
</FormGroup>
{' '}


<div className='d-flex justify-content-between'>
<Button type='submit' color='success' className="success">
  Login
</Button>
<Link to={"/register"} ><Button style={{border:"none"}} className="alreay-user">
 Register Here
</Button>
</Link>
</div>
<Toaster />
</Form>
        </div>
    </div>
</div>
  )
}

export default LoginForm