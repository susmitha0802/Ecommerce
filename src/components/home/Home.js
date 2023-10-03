import { Link } from "react-router-dom";
import { ProductList } from "../product-list/ProductList";
import "./Home.css";
import "../../styles/ButtonLink.css";

export const Home = () => {
    return (
        <>
            <div className="products button-link">
                <h1>Products</h1>
                <Link to="#">Create Product</Link>
            </div>
            <ProductList/>
        </>
    )
}
