import { combineReducers } from "redux";

import { productReducer } from "./productReducer";
import { selectProductReducer } from "./productReducer";
import { cartProductReducer } from "./cartItemsReduces";




const reducers=combineReducers({
    allProducts:productReducer,
    product:selectProductReducer,

    cartProductData:cartProductReducer,
  
})

export default reducers