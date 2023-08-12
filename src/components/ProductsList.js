import { useEffect, useState } from "react";

import { getproducts } from "../service/api";
import ProdcutCard from "./ProdcutCard";
 import {Container} from "reactstrap"
const ProductsList = () => {


    const [allProducts, setAllProdcuts] = useState([])

    useEffect(() => {

        getAllproducts()

    },[])

    const getAllproducts = async () => {
        const allProductsList = await getproducts();
       
        setAllProdcuts(allProductsList.data)      
    }

    return (
        <Container>

            <h1 className="mb-2">All Prodcuts</h1>
            <div className="hole-contant">
           
            {allProducts.length ? allProducts.map ((products, i) => {

                return (
                <ProdcutCard  key={i} value={products}  />
                )
            }
        ) :<div><h2>Loading....</h2></div>}
        </div>
        </Container>
    )
};
export default ProductsList;