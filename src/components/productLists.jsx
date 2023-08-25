import { useSelector } from "react-redux";
import ProductItem from "./productItem";

const ProductsList=()=>{

    const products= useSelector(state=>state?.products);
    console.log("productslists", products);

    const productsListContent = products?.map((product=>{
            return <ProductItem key={product.newId} product={product} />
        }))
    
    return(
        <>
            <h1 className="header">My Category</h1>
            <div className="container">
                <div className="product-container">
                    {productsListContent}
                </div>
            </div>
        </>
    )
}

export default ProductsList;