import { Link } from "react-router-dom";
import { ProductDetails } from "../product-details/ProductDetails";
import { ProductImg } from "../product-img/ProductImg";
import "./Product.css";
import "../../styles/ButtonLink.css";

export const Products = () => {
  return (
    <div className="prod"> 
      <ProductImg/>
      <div className="prod-details">
        <ProductDetails/>
        <div className="button-link">
          <p>In Stock</p>
          <Link to="#">Add to Cart</Link>
        </div>
      </div>
    </div>
  )
}
