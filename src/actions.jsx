export const Actions= {
    addProducts: "ADD_PRODUCTS",
    addNewProduct: "ADD_NEW_PRODUCT",
}

export const addingProducts=(products)=>{
    console.log("products", products)
    return{
        type : Actions.addProducts,
        payload :  products
    } 
}

export const addingNewProduct=(product)=>{
    console.log("Newproduct", product)
    return{
        type : Actions.addNewProduct,
        payload :  product
    } 
}

