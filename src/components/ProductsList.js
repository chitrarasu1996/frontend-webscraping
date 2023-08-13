import { useEffect, useState } from "react";

import { getproducts } from "../service/api";
import ProdcutCard from "./ProdcutCard";
 import {Container} from "reactstrap"
import SearchProduct from "./SearchProduct.js";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const ProductsList = () => {

const navigate=useNavigate()
    const [allProducts, setAllProdcuts] = useState([])

  const [userName,setUserName]=useState("")
    useEffect(() => {
       const data= localStorage.getItem("register-user")
       setUserName(data)
       if(!data){
        navigate("/login")
       }else{
        getAllproducts()
       }
       

    },[])

    const getAllproducts = async () => {
        const allProductsList = await getproducts();
       
        setAllProdcuts(allProductsList.data)      
    }

    return (
        <div className="all-container">
        <Container>
<SearchProduct userName={userName}/>
            <div className="hole-contant">
            {allProducts.length ? allProducts.map ((products, i) => {

                return (
                <ProdcutCard  key={i} value={products}  />
                )
            }
        ) :<div><h2>Loading....</h2></div>}
        </div>
        </Container>
        <Toaster/>
        </div>
    )
};
export default ProductsList;