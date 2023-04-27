import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';

function App() {
  const [count, setCount] = useState(0);

  return (
    <ChakraProvider theme={theme}>
    </ChakraProvider>
  );
}

export default App;
