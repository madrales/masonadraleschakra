import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import WithSubnavigation, { DesktopNav} from './components/Navbar';
import SmallWithSocial from './components/Footer';
import ProductSimple from './components/ProjectCard';
import SplitScreen from './components/HeroImage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <WithSubnavigation/>
      <SplitScreen/>
      <SmallWithSocial/>
    </ChakraProvider>
  );
}

export default App;
