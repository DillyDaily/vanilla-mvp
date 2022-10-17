import { Box, Image, Button, Center } from '@chakra-ui/react';

const ProductItem = (props) => {
    const { name, description, price, imgUrl } = props;
    console.log("PRODUCT ITEM PROPS, ", props)
    return(
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                
                <Center>
                    <Image height='200px' src={imgUrl} alt={name}/>
                </Center>
                
                <Box p = '6' bg ='white' >
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
                    <Box>
                        <Button colorScheme='teal' size='sm'>Quickshop</Button>
                    </Box>
                </Box>

            </Box>
    )
};

export default ProductItem;