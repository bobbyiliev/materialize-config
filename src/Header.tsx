import React from "react";
import { Heading, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
const Header = () => {
  return (
    <>
      <Heading as="h1" size="2xl" pt="8" pb="4">
        Materialize Config
      </Heading>
      <Breadcrumb separator="|" pb="8">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Configuration Tool</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="/integrations">Integrations</BreadcrumbLink>
        </BreadcrumbItem>

      </Breadcrumb>
    </>
  );
};

export default Header;
