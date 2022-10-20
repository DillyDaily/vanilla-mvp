import { ChakraProvider } from '@chakra-ui/react'
import ProductHome from './components/products/ProductHome';

const App = () => {
  return (
    < ChakraProvider> 
      <h1>Home Page</h1>
      <ProductHome />
    </ChakraProvider>
  );
}

export default App;
