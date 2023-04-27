import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './theme';
import { Router } from './Router';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
