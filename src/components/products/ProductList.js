import { SimpleGrid } from "@chakra-ui/react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
    const { products } = props;
    // console.log("PROD LISTTT Props: ", props)

    return(
            <SimpleGrid columns={[2, null, 4]} spacing='25px'>
                {products.map((product) => (
                    <ProductItem 
                    key={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    imgUrl={product.images[0].url}
                    />
                    ))}
            </SimpleGrid>
    )
};

export default ProductList;