export const Actions= {
    addProducts: "ADD_PRODUCTS",
}

export const addingProducts=(products)=>{
    console.log("products", products)
    return{
        type : Actions.addProducts,
        payload :  products
    } 
}

