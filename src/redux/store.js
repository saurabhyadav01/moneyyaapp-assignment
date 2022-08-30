import {createStore }from "redux"
import  reducers  from "./reducers/index"
import { applyMiddleware } from "redux"
import thunk from "redux-thunk"

import { productReducer } from "./reducers/productReducer"


export const store=createStore (reducers,applyMiddleware(thunk))
