import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import ProductDetails from "./ProductDetails";
import ProductListing from "./ProductListing";


function Home(){
    return (
        <>
         <Header />
         <div><img  src="https://images.bewakoof.com/uploads/grid/app/Byou-men-desk-1651215919.jpg" alt="" width="100%" /></div>
        <ProductListing /> 
         {/* <ProductDetails /> */}
      
     </>
    )
}

export default Home