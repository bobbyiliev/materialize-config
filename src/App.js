import { useEffect } from "react";

import { ChakraProvider, Divider, VStack } from "@chakra-ui/react";
import "./App.css";

import Cluster from "./components/Cluster";
import Header from "./Header";
import KafkaConnection from "./components/KafkaConnection";
import KafkaSource from "./components/KafkaSource";
import PostgresConnection from "./components/PostgresConnection";
import Secret from "./components/Secret";
import SchemaRegistryConnection from "./components/SchemaRegistryConnection";

function App() {
  useEffect(() => {
    document.title = "Materialize Config";
  });

  return (
    <ChakraProvider>
      <VStack>
        <Header />
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
      </VStack>
    </ChakraProvider>
  );
}

export default App;
