import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "../components/Loader";

const AllRoutes=()=>
{
    return (
        <>
     
      <Routes>
       <Route path="/" element={<Loader />}></Route>
      {/*  <Route path="/Home" element={<Home />}>
         </Route>
       
        {/* <Route path="home/products/signUp" element={<SignUp/>}></Route> */}
        {/* <Route path="/home/products/cart" element={<CartList/>}></Route>
        <Route path="/home/products/cart/ordersummary/:id" element={<OrderSummary/>}></Route>
        <Route path="/home/products/cart/ordersummary/payment" element={<Payment/>}></Route>
        
        <Route path="home/products/cart/payment/success" element={<Success/>}></Route> */} 
      </Routes> 
        </>
    )
}

export default AllRoutes