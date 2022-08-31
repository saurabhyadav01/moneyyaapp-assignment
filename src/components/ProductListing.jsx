import React, { useEffect, useState } from "react";
import Home from "./Home";
 import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { get_product_request } from "../redux/productRedux/ProductConstant";

function ProductListing(){
    const product=useSelector((store)=>
    {
   return store.productReducer.fetchedData
    });
    const dispatch=useDispatch()
   
   
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
                width:"90%",
                gridTemplateColumns:"repeat(4 ,1fr)",
                gridGap:"5%",
           

                margin:"auto",
                marginTop:"20px"
                }} className="product-container" >
              
                {
                    product.length? product.map((e)=>(
                        
                        <div style={{
                            height:"auto",border:"1px solid black",padding:"2%"
                        }} className="product-item" key={e._id} >
                             <Link to={`products/${e._id}`} style={{ textDecoration: "none" }}>
    
                             <img style={{width:"100%"}} src={e.image1} alt="" />
                       <h4> Title : {e.title}</h4>
                       <h4>Price : { e.price}</h4>
    
                       <button
                      style={{
                        width: "100%",
                        backgroundColor: "#ffd84d",
                        height: "35px",
                        fontSize: "20px",
                        color: "black",
                        border:"none",
                        borderRadius:"1%"
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
                 :"something went wrong"    
                }
            
            </div>
        </div>
        </>
    )
}


export default ProductListing
