import { FC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Terminal } from './containers/Terminal';

const App: FC = () => {
  return (
    <ChakraProvider>
      <Terminal />
    </ChakraProvider>
  );
};

export default App;
