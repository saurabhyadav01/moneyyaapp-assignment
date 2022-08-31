import React, { useEffect, useState } from "react";
import Home from "./Home";
 import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
function ProductListing(){
    const [data,setData]=useState([])
    function x(){
        axios.get("https://ecommrcebackend.herokuapp.com/products").then((res)=>{
         //console.log(res.data)
         //dispatch(setProducts(res.data))

         setData([...res.data])
    }).catch((err)=>{
        console.log(err.message)
    })
    }
    console.log(data)

  
    useEffect(()=>
    {
        x()
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
                    data.map((e)=>(
                        
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
                }
            
            </div>
        </div>
        </>
    )
}


export default ProductListing