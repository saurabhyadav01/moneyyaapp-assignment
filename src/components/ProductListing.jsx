import React, { useEffect, useState } from "react";
import Home from "./Home";
 import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { get_product_request } from "../redux/productRedux/ProductConstant";
import Loader from "./Loader";
import Landing from "./Landing";
import PageLoader from "./PageLoder";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function ProductListing(){
    const product=useSelector((store)=>
    {
   return store.productReducer.fetchedData
    });
    const dispatch=useDispatch()
   
    const handleChange = (event) => {
   
    console.log(event.target.value)
      if (event.target.value === "highToLow") {
       // Dispatch(sort_price_l_to_h());
      } else if (event.target.value === "LowToHigh") {
      //  Dispatch(sort_price_h_to_l());
      } else if (event.target.value === "RatingLowToHigh") {
       // Dispatch(SORT_RATING_H_TO_L());
      } else if (event.target.value === "RatingHighLow") {
       // Dispatch(SORT_RATING_L_TO_H());
      } else if (event.target.value === "AtoZ") {
       // Dispatch(SORT_NAME_DISS());
      } else if (event.target.value === "ZtoA") {
       // Dispatch(SORT_NAME_ASS());
      }
    };
    useEffect(()=>
    {
        dispatch(get_product_request())
    
    },[])
    return(
        <>
         
        <div className="container">
       
        <h2 style={{textAlign:"center"}}>PRODUCTS</h2>
            <div style={{
                display:"grid",
                width:"99%",
                height:"200px",
                gridTemplateColumns:"repeat(4 ,1fr)",
                margin:"auto",
                gridGap:"5%"
                
                }} className="product-container" >
              
                {
                    product.length? product.map((e)=>(
                        
                        <div style={{
                          height: "400px",padding:"2%",textDecoration: "none",marginTop:"10px",border:"1px solid gray",
                        }} className="product-item" key={e._id} >
                             <Link to={`products/${e._id}`} style={{ textDecoration: "none" }}>
    
                             <img style={{width:"100%",height:"75%"}} src={e.image1} alt="" />
                       <h4 style={{textDecoraton:"none"}}> Title : {e.title}</h4>
                       <h4  style={{textDecoraton:"none"}}>Price : { e.price}</h4>
    
                       <button
                      style={{
                        width: "100%",
                        backgroundColor: "#ffd84d",
                        height:"40px",
                        fontSize: "20px",
                        marginTop:"5px",
                        border:"none",
                        borderRadius:"2%"
                      }}
                      variant="contained"
                      size="small"
                      onClick={() => {
                        // addToCart();
                      }}
                    >
                      BUY NOW
                    </button>
                             </Link>
                             
                        </div>
                        ))
                 :"" 
                }
            
            </div>
        </div>
        <PageLoader/> 
        </>
    )
}


export default ProductListing
