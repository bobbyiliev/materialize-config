import { useState } from 'react';
import { ChakraProvider, Container, Divider, VStack } from '@chakra-ui/react'
import './App.css';

import Cluster from './components/Cluster';
import PostgresConnection from './components/PostgresConnection';
import Secret from './components/Secret';
import KafkaConnection from './components/KafkaConnection';

function App() {

  return (
    <ChakraProvider>
      <VStack>
        <Cluster />
        <Divider />
        <Secret />
        <Divider />
        <PostgresConnection />
        <Divider />
        
        <Divider />
      </VStack>
    </ChakraProvider>
  );
}

export default App;