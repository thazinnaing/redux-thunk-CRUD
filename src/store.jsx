import { createStore } from "redux";
import { productsReducer } from "./reducer";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

export const store=createStore(
    productsReducer,
    applyMiddleware(thunk)
)