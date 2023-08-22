
const ProductItem=({product})=>{
   
    return(
        <div className="product-item">
            <img src={`${product.images[0]}`} alt={`${product.title}`}/>
            <h2>{product?.title}</h2>
            <h5>{product?.description}</h5>
            <h1 className="price">{`$ ${product?.price}`}</h1>

        </div>
    )
}

export default ProductItem;