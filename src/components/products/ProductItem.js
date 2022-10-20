import { Box, Image, Center } from '@chakra-ui/react';
import './ProductItem.css';

const ProductItem = (props) => {
    const { name, description, price, imgUrl } = props;
    console.log("PRODUCT ITEM PROPS, ", props)
    return(
        <Box className='product-item-container' 
            maxW='sm' 
            overflow='hidden'
            borderColor='#000'
            borderWidth='1px'
        >
            <Image height='250px' src={imgUrl} alt={name}/>
            
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
                    ${price}
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
                bg='white'
                borderColor='#000'
                borderWidth='1px'
                color = 'black'
                _hover={{ 
                    bg: '#000', 
                    color: 'white'
                }}
                _active={{
                    bg: 'white',
                    transform: 'scale(0.98)',
                    borderColor: '#bec3c9',
                }}
                > 
                    Quickshop 
                </Box>
            </Box>
        </Box>
    )
};

export default ProductItem;