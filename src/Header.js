import React from "react";
import { Heading, Text } from '@chakra-ui/react'
const Header = () => {
  return (
    <>
      <Heading as="h1" size="2xl" p="8">
        Materialize Config
      </Heading>
      <Text pb="6" fontSize="md">
        Configure your Materialize instance
      </Text>
    </>
  );
}

export default Header;