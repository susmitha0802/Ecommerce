import { ProductDetails } from "../product-details/ProductDetails";
import { ProductImg } from "../product-img/ProductImg";
import "./ProductItem.css";
import "../../styles/ProductDetails.css";

export const ProductItem = () => {
  return (
    <div className="item">
      <ProductImg />
      <ProductDetails/>
    </div>
  )
}
