import React from 'react';
import { useEffect } from "react";
import { ChakraProvider, Container, Divider, VStack } from "@chakra-ui/react";
import "./App.css";

import ConfluentCloud from './components/integrations/ConfluentCloud';
import RedpandaCloud from "./components/integrations/RedpandaCloud";
import Upstash from './components/integrations/Upstash';
import Header from "./Header";
import theme from "./theme/index";

function Integrations() {
  useEffect(() => {
    document.title = "Materialize Config";
  });

  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <Header />
        <Container as="main" maxW="4xl" px="5" py="3">
          <RedpandaCloud />
          <Divider />
          <ConfluentCloud />
          <Divider />
          <Upstash />
          <Divider />
        </Container>
      </VStack>
    </ChakraProvider>
  );
}

export default Integrations;
