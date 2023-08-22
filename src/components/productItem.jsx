
const ProductItem=({product})=>{
   
    return(
        <div className="product-item">
            <h2>{product?.title}</h2>
            <h5>{product?.description}</h5>
            <p>{product?.price}</p>


        </div>
    )
}

export default ProductItem;