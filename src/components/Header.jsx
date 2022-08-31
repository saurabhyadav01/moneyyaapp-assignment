import React  from "react";
import { Link } from "react-router-dom";

import "../style/Header.css"
import { useSelector,useDispatch } from "react-redux";
function Header()
{
    const {cartData }= useSelector((store)=>store.CartReducer);
    return(
        <>
        <div style={{display:"flex",justifyContent:'space-between',textDecoration: "none"}} className="main-header-div"><div style={{marginLeft:"5%"}}> <Link to={`/`} style={{ textDecoration: "none" }}>
        <h1 style={{textDecoration: "none"}}>  My Shop </h1> </Link>
    </div>
         <div  style={{marginRight:"5%"}}>
         <Link to={`/Cart`} style={{ textDecoration: "none" }}>
         {cartData.length}
            <i style={{fontSize:"20px",padding:"",textDecoration: "none"}} class="fa-solid fa-cart-arrow-down"></i>
       </Link>
            </div></div>
      
        </>
    )
}

export default Header