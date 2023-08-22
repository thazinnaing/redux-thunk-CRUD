import React, {useEffect} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addingProducts } from "./actions";
import ProductsList from "./components/productLists";
import "./App.css"


const PRODUCTS_URL="https://api.escuelajs.co/api/v1/products"

const App=()=>{
  const dispatch=useDispatch();
  
  const getProductsData= ()=>{
    return (dispatch)=>{
      axios.get(PRODUCTS_URL)
      .then(res=> 
        dispatch(addingProducts(res.data))
      )
    }
  }

    useEffect(()=>{
        dispatch(getProductsData());
    }, [])

  return(
    <>
    <h1 className="header">My Category</h1>
    <div className="container">
      <ProductsList />
    </div>
    </>
    
  )
}

export default App;