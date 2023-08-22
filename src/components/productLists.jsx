import { useSelector } from "react-redux";
import ProductItem from "./productItem";

const ProductsList=()=>{

    const products= useSelector(state=>state?.products);

    const productsListContent = products?.map((product=>{
            return <ProductItem key={product.id} product={product} />
        }))
    

    return(
        <div className="product-container">
            {productsListContent}
        </div>
    )
}

export default ProductsList;