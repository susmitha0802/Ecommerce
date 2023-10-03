import { ProductItem } from "../product-item/ProductItem";
import "./ProductList.css";

export const ProductList = () => {
    const productFlex = [];
    for(let i=0;i < 6;i++) {
        productFlex[i] = <ProductItem key={i}/>;
    }
    return (
        <div className="flex-style">
            {productFlex}
        </div>
    )
}
