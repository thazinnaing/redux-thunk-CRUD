import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsList from "./components/productLists";
import "./App.css"
import Form from "./components/form";
import { getProductsData } from "./thunkFunctions";
import {Routes, Route} from "react-router-dom"
import Layout from "./components/Layout";
import SingleProductPage from "./components/SingleProductPage";
import EditProductPage from "./components/editProductPage";


const App=()=>{
  const dispatch=useDispatch();
  
    useEffect(()=>{
        dispatch(getProductsData());
    }, [])

  return(
    <Routes>
      <Route path="/" element ={<Layout/>} />
        <Route path="list" element={<ProductsList/>} />

        <Route path ="product">
          <Route index element={<Form/>} />
          <Route path=":productId" element={<SingleProductPage/>} />
          <Route path="edit/:productId" element={<EditProductPage/>} />
        </Route>


   

    </Routes>
    
  
  )
}

export default App;