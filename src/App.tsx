import React from 'react';
import { useEffect } from "react";
import { ChakraProvider, Container, Divider, VStack } from "@chakra-ui/react";
import "./App.css";

import Cluster from "./components/statements/Cluster";
import Header from "./Header";
import KafkaConnection from "./components/statements/KafkaConnection";
import KafkaSource from "./components/statements/KafkaSource";
import PostgresConnection from "./components/statements/PostgresConnection";
import PostgresSource from "./components/statements/PostgresSource";
import Secret from "./components/statements/Secret";
import SchemaRegistryConnection from "./components/statements/SchemaRegistryConnection";
import theme from "./theme/index";

function App() {
  useEffect(() => {
    document.title = "Materialize Config";
  });

  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <Header />
        <Container as="main" maxW="4xl" px="5" py="3">
          <Cluster />
          <Divider />
          <Secret />
          <Divider />
          <PostgresConnection />
          <Divider />
          <KafkaConnection />
          <Divider />
          <SchemaRegistryConnection />
          <Divider />
          <KafkaSource />
          <Divider />
          <PostgresSource />
          <Divider />
        </Container>
      </VStack>
    </ChakraProvider>
  );
}

export default App;
