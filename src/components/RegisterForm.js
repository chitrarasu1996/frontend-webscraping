import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Form,FormGroup,Button,Label,Input} from  "reactstrap"
import { regiterUser } from '../service/api'
import toast, { Toaster } from 'react-hot-toast';
const RegisterForm = () => {
const navigate=useNavigate()
const [userDetails,setUserDetails]=useState({
  userName:"",
  email:"",
  password:"",
  confirmPassword:""
})

const submitted=async(e)=>{
 
e.preventDefault()
if(userDetails.password===userDetails.confirmPassword){
  const response=await regiterUser(userDetails.userName,
    userDetails.email,
    userDetails.password)

  if(response.data.success){
 
    toast.success(response.data.message)
 setTimeout(()=>{
    navigate("/login")
  },2000)
  
  }else{
    toast.error(response.data.message)
  }

}else{
  alert("password and confirm password sholud be same")
}
}
  return (
    <div className='hole-form'>
        <div className='register-form'>
          
            <div >
         
            <Form onSubmit={submitted} className='form-container'>
            <h2 className='text-center'>Register Now</h2>
    <FormGroup floating>
      <Input
      required
        id="name"
        name="name"
        placeholder="Enter your name"
        type="text"
        value={userDetails.userName}
        onChange={(e)=>setUserDetails({...userDetails,userName:e.target.value})}
      />
      <Label for="name">
        Username
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
      required
        id="exampleEmail"
        name="email"
        placeholder="Email"
        type="email"
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
      required
        id="examplePassword"
        name="password"
        placeholder="Password"
        type="password"
        value={userDetails.password}
        onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})}
      />
      <Label for="examplePassword">
        Password
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input required
        id="examplePassword1"
        name="password1"
        placeholder="Confirm Password"
        type="password"
        value={userDetails.confirmPassword}
        onChange={(e)=>setUserDetails({...userDetails,confirmPassword:e.target.value})}
      />
      <Label for="examplePassword1">
        Confirm Password
      </Label>
    </FormGroup>
    {' '}
    <div className='d-flex justify-content-between'>
    <Button type='submit' color='success' className="success">
    Register
    </Button>
   <Link to={"/login"}><Button style={{border:"none"}} className="alreay-user">
      Already an User ?
    </Button></Link> 
    </div>
 
  </Form>
  <Toaster/>
            </div>
        </div>
      
    </div>
  )
}

export default RegisterForm