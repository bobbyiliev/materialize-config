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

const PostgresConnection = () => {
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
      host: "",
      port: "",
      database: "",
      username: "",
      password: "",
      sslMode: "",
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
          Postgres Connection
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
                    name="host"
                    placeholder="Host"
                    onChange={event => handleFormChange(event, index)}
                    value={form.host}
                  />
                </FormControl>
              </Flex>
              <Flex>
                <FormControl p="2" w="full">
                  <Input
                    name="port"
                    placeholder="Port"
                    onChange={event => handleFormChange(event, index)}
                    value={form.port}
                  />
                </FormControl>
                <FormControl p="2" w="full">
                  <Input
                    name="database"
                    placeholder="Database"
                    onChange={event => handleFormChange(event, index)}
                    value={form.database}
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
                <Box p="2">
                  <Input
                    name="sslMode"
                    placeholder="SSL Mode"
                    onChange={event => handleFormChange(event, index)}
                    value={form.sslMode}
                  />
                </Box>
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
              <Code p="4" className="sqlOutput" fontSize="md">
                CREATE CONNECTION {form.name} FOR POSTGRES <br />
                &nbsp; HOST {form.host}, <br />
                &nbsp; PORT {form.port}, <br />
                &nbsp; DATABASE {form.database}, <br />
                &nbsp; USER SECRET {form.username}, <br />
                &nbsp; PASSWORD SECRET {form.password}
                {form.sslMode && (
                  <>
                    , <br /> &nbsp; SSL MODE {form.sslMode}
                  </>
                )}
                ; <br />
              </Code>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default PostgresConnection;
