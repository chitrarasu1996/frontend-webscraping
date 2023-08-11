
import React from 'react';
import {Link} from  "react-router-dom"



const ProductsSearch=()=>{
 
    return(
        <nav class="navbar bg-body-tertiary">
  <form class="container-fluid">
    <div class="input-group">
    <Link to={"/products"}> <span class="input-group-text btn" id="basic-addon1" >Search </span></Link> 
      <input type="text" class="form-control" placeholder="products" aria-label="Username" aria-describedby="basic-addon1"/>
    </div>
  </form>
</nav>
    )
};

export default ProductsSearch;