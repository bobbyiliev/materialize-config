import React from 'react';
import { useEffect } from "react";
import { ChakraProvider, Container, Divider, VStack } from "@chakra-ui/react";
import "./App.css";

import RedpandaCloud from "./components/integrations/RedpandaCloud";
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
        </Container>
      </VStack>
    </ChakraProvider>
  );
}

export default Integrations;
