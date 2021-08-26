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
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import WithSubnavigation, { DesktopNav} from './components/Navbar';
import SmallWithSocial from './components/Footer';
import CallToActionWithVideo from './components/HeroImage';
import ProductSimple from './components/ProjectCard';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <WithSubnavigation/>
      <CallToActionWithVideo/>
      <ProductSimple/>
      <SmallWithSocial/>
    </ChakraProvider>
  );
}

export default App;
