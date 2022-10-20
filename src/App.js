import { ChakraProvider } from '@chakra-ui/react'
import ProductHome from './components/products/ProductHome';
import HeaderMain from './components/layout/HeaderMain';

const App = () => {
  return (
    < ChakraProvider> 
      <h1>Home Page</h1>
      <HeaderMain />
      <ProductHome />
    </ChakraProvider>
  );
}

export default App;
