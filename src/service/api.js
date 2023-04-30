import axios from "axios";

const url="https://webscarping.onrender.com";



export const getproducts=async()=>{

 const products=await axios.get(`${url}/products`)
 console.log(products)
return products.data

}