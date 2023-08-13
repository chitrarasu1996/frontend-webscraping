import axios from "axios";


const url="https://webscarping.onrender.com";


export const getproducts=async()=>{

 const products=await axios.get(`${url}/products`)

return products.data

}

export const regiterUser=async(name,email,password)=>{
const response=await axios.post(url+"/user/register-user",{
    name,email,password
})
return response;
}

export const loginUser=async(email,password)=>{
    const res=await axios.post(url+"/user/login-user",{email,password})
    return res
}