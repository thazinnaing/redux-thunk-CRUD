import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsList from "./components/productLists";
import "./App.css"
import Form from "./components/form";
import { getProductsData } from "./thunkFunctions";


const App=()=>{
  const dispatch=useDispatch();
  
    useEffect(()=>{
        dispatch(getProductsData());
    }, [])

  return(
    <>
    <Form/>
    <ProductsList />
    </>
    
  )
}

export default App;