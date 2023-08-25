import { Link } from "react-router-dom";
const ProductItem=({product})=>{
   
    return(
        <div className="product-item">
            <img src={`${product?.images?.[1]}`} alt={`${product.title}`}/>
            <h3>{product?.title}</h3>
            <h5>{product?.description} &nbsp;&nbsp;
            <Link to={`/product/${[product?.newId]}`} className="Link">View</Link>
            </h5>
            <h1 className="price">{`$ ${product?.price}`}</h1>
            


        </div>
    )
}

export default ProductItem;