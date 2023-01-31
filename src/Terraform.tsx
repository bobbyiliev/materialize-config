import React from "react";
import { useEffect } from "react";
import { ChakraProvider, Container, Divider, VStack, List, ListIcon, ListItem, Center, Link } from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons'
import "./App.css";

import Header from "./Header";

import theme from "./theme/index";

function Terraform() {
  useEffect(() => {
    document.title = "Materialize Terraform Modules";
  });

  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <Header />
        <Container as="main" maxW="4xl" px="5" py="3">
        <Center p="4">
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                <Link href='https://github.com/MaterializeInc/terraform-aws-msk-privatelink' isExternal>Materialize + PrivateLink + MSK</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                <Link href='https://github.com/MaterializeInc/terraform-aws-kafka-privatelink' isExternal>Materialize + PrivateLink + Self-Managed Kafka</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                <Link href='https://github.com/bobbyiliev/terraform-materialize-rds' isExternal>Materialize + RDS</Link>
              </ListItem>
            </List>
          </Center>
          <Divider />
        </Container>
      </VStack>
    </ChakraProvider>
  );
}

export default Terraform;
