import { LinkBox, Box, LinkOverlay, Image } from '@chakra-ui/react';
import './ProductItem.css';
import { usdPrice } from "../helpers/price-format";

const ProductItem = (props) => {
    const { name, description, price, imgUrl } = props;
    // console.log("PRODUCT ITEM PROPS, ", props)

    return(
        <LinkBox className='product-item-container' 
            maxW='sm' 
            overflow='hidden'
            borderColor='#000'
            borderWidth='1px'
        >
            <Image height='250px' src={imgUrl} alt={name}/>
            <LinkOverlay href='#'>
                <Box p='4'
                    height='100%'
                >
                    <Box mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        >
                        {name}
                    </Box>
                    <Box lineHeight='tight'
                    >
                        {description}
                    </Box>
                    <Box>
                        {usdPrice(price)}
                    </Box>
                </Box>
                <Box py='4'>
                    <Box className="quickshop-button"
                    as="button"
                    height='44px'
                    lineHeight='1.2'
                    transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                    fontSize='16px'
                    fontWeight='semibold'
                    bg='#fff'
                    borderColor='#000'
                    borderWidth='1px'
                    color = '#000'
                    _hover={{ 
                        bg: '#000', 
                        color: '#fff'
                    }}
                    _active={{
                        bg: '#fff',
                        transform: 'scale(0.98)',
                        borderColor: '#bec3c9',
                    }}
                    > 
                        Quickshop 
                    </Box>
                </Box>
            </LinkOverlay>
        </LinkBox>
    )
};

export default ProductItem;