import React from 'react';
import { useEffect } from "react";
import { ChakraProvider, Container, Divider, VStack } from "@chakra-ui/react";
import "./App.css";

import Cluster from "./components/Cluster";
import Header from "./Header";
import KafkaConnection from "./components/KafkaConnection";
import KafkaSource from "./components/KafkaSource";
import PostgresConnection from "./components/PostgresConnection";
import PostgresSource from "./components/PostgresSource";
import Secret from "./components/Secret";
import SchemaRegistryConnection from "./components/SchemaRegistryConnection";
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