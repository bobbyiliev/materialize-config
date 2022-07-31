import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Code,
  Flex,
  FormControl,
  Heading,
  Input,
  Select,
  Spacer,
} from "@chakra-ui/react";

const SchemaRegistryConnection = () => {
  const [formFields, setFormFields] = useState([]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const submit = e => {
    e.preventDefault();
    console.log(formFields);
  };

  const addFields = () => {
    let object = {
      name: "",
      url: "",
      username: "",
      password: "",
      certificate: "",
      key: "",
      ca: "",
    };

    setFormFields([...formFields, object]);
  };

  const removeFields = index => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  return (
    <Container maxW="2xl">
      <Flex p="4">
        <Heading as="h2" size="xl">
          Schema Registry Connection
        </Heading>
        <Spacer />
        <Button colorScheme="blue" onClick={addFields}>
          Add More
        </Button>
      </Flex>
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <Flex>
                <FormControl p="2" w="full">
                  <Input
                    name="name"
                    placeholder="Name"
                    onChange={event => handleFormChange(event, index)}
                    value={form.name}
                  />
                </FormControl>
                <FormControl p="2" w="full">
                  <Input
                    name="url"
                    placeholder="URL"
                    onChange={event => handleFormChange(event, index)}
                    value={form.url}
                  />
                </FormControl>
              </Flex>
              <Flex>
                <FormControl p="2" w="full">
                  <Input
                    name="username"
                    placeholder="Username"
                    onChange={event => handleFormChange(event, index)}
                    value={form.username}
                  />
                </FormControl>
                <FormControl p="2" w="full">
                  <Input
                    name="password"
                    placeholder="Password"
                    onChange={event => handleFormChange(event, index)}
                    value={form.password}
                  />
                </FormControl>
              </Flex>
              <Flex>
                <FormControl p="2">
                  <Input
                    name="certificate"
                    placeholder="SSL Certificate"
                    onChange={event => handleFormChange(event, index)}
                    value={form.certificate}
                  />
                </FormControl>
                <FormControl p="2">
                  <Input
                    name="key"
                    placeholder="SSL Key"
                    onChange={event => handleFormChange(event, index)}
                    value={form.key}
                  />
                </FormControl>
                <FormControl p="2">
                  <Input
                    name="ca"
                    placeholder="CA Certificate"
                    onChange={event => handleFormChange(event, index)}
                    value={form.ca}
                  />
                </FormControl>
              </Flex>
              <Flex>
                <Spacer />
                <Box p="2">
                  <Button
                    colorScheme="blue"
                    onClick={() => removeFields(index)}
                  >
                    Remove
                  </Button>
                </Box>
              </Flex>
            </div>
          );
        })}
      </form>
      <br />
      <div>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <Code p="2" className="sqlOutput">
                CREATE CONNECTION {form.name} <br />
                &nbsp; FOR CONFLUENT SCHEMA REGISTRY <br />
                &nbsp; URL {form.url}
                {form.username && (
                  <>
                    , <br />
                    &nbsp; USERNAME = SECRET {form.username}
                  </>
                )}
                {form.password && (
                  <>
                    , <br />
                    &nbsp; PASSWORD = SECRET {form.password}
                  </>
                )}
                {form.certificate && (
                  <>
                    , <br />
                    &nbsp; SSL CERTIFICATE = SECRET {form.certificate}
                  </>
                )}
                {form.key && (
                  <>
                    , <br />
                    &nbsp; SSL KEY = SECRET {form.key}
                  </>
                )}
                {form.ca && (
                  <>
                    , <br />
                    &nbsp; SSL CERTIFICATE AUTHORITY = SECRET {form.ca}
                  </>
                )}
                ;
              </Code>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default SchemaRegistryConnection;
