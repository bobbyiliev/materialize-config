import React from 'react';
import { useEffect } from "react";
import { ChakraProvider, Container, Divider, VStack, Center, Link } from "@chakra-ui/react";
import "./App.css";

import Header from "./Header";

import ConfluentCloud from './components/integrations/ConfluentCloud';
import RedpandaCloud from "./components/integrations/RedpandaCloud";
import Upstash from './components/integrations/Upstash';
import AwsMsk from './components/integrations/AwsMsk';
import theme from "./theme/index";

function Integrations() {
  useEffect(() => {
    document.title = "Materialize Config";
  });

  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <Header />
        <Center>
          <Link href="https://materialize.com/docs/integrations" isExternal>Materialize Integrations Documentation</Link>
        </Center>
        <Container as="main" maxW="4xl" px="5" py="3">
          <RedpandaCloud />
          <Divider />
          <ConfluentCloud />
          <Divider />
          <Upstash />
          <Divider />
          <AwsMsk />
          <Divider />
        </Container>
      </VStack>
    </ChakraProvider>
  );
}

export default Integrations;
