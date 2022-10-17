import ProductList from "./ProductList";
import { getAllProducts } from "../helpers/product-helpers";

const ProductHome = () => {
    const allProducts = getAllProducts();
    return(
        <div>
            <ProductList products={allProducts} />
        </div>
    )
};

export default ProductHome;