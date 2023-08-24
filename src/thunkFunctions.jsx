import axios from "axios";
import { addingProducts, addingNewProduct } from "./actions";

const PRODUCTS_URL="https://dummyjson.com/products"

export const getProductsData= ()=>{
    return (dispatch)=>{
      axios.get(PRODUCTS_URL)
      .then(({data})=> {
        dispatch(addingProducts(data.products))
      }
      )
    }
}

export const addNewProduct=(post)=>{
    console.log("posting", post)
    return(dispatch)=>{
        axios.post(`${PRODUCTS_URL}/add`, post)
        .then(({data})=>{
            console.log("resdata",data)
            dispatch(addingNewProduct(data))
         })
    }
}

