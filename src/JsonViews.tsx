import React from 'react';
import { useEffect } from "react";
import { ChakraProvider, Container, Divider, VStack, } from "@chakra-ui/react";
import "./App.css";
import Views from './components/json/Views';

import Header from "./Header";

import theme from "./theme/index";

function JsonViews() {
  useEffect(() => {
    document.title = "Materialize Config";
  });

  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <Header />
        <Container as="main" maxW="4xl" px="5" py="3">
          <Views />
          <Divider />
        </Container>
      </VStack>
    </ChakraProvider>
  );
}

export default JsonViews;
