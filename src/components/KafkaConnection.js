import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Code,
  Flex,
  Heading,
  Input,
  Select,
  Spacer,
} from "@chakra-ui/react";

const KafkaConnection = () => {
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
        Kafka Connection
        </Heading>
        <Spacer />
        <Button colorScheme="blue" onClick={addFields}>
          Add More..
        </Button>
      </Flex>
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <Flex>
                <Box p="2">
                  <Input
                    name="name"
                    placeholder="Name"
                    onChange={event => handleFormChange(event, index)}
                    value={form.name}
                  />
                </Box>
                <Box p="2">
                  <Input
                    name="host"
                    placeholder="Host"
                    onChange={event => handleFormChange(event, index)}
                    value={form.host}
                  />
                </Box>

                <Box p="2">
                  <Input
                    name="port"
                    placeholder="Port"
                    onChange={event => handleFormChange(event, index)}
                    value={form.port}
                  />
                </Box>
                </Flex>
              <Flex>
                <Box p="2">
                  <Input
                    name="database"
                    placeholder="Database"
                    onChange={event => handleFormChange(event, index)}
                    value={form.database}
                  />
                </Box>

                <Box p="2">
                  <Input
                    name="username"
                    placeholder="Username"
                    onChange={event => handleFormChange(event, index)}
                    value={form.username}
                  />
                </Box>
                <Box p="2">
                  <Input
                    name="password"
                    placeholder="Password"
                    onChange={event => handleFormChange(event, index)}
                    value={form.password}
                  />
                </Box>
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
                <Box p="2">
                  <Button colorScheme="blue" onClick={() => removeFields(index)}>
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
              <Code p="2" w="full">
                CREATE CONNECTION {form.name} FOR POSTGRES <br />
                HOST {form.host}, <br />
                PORT {form.port}, <br />
                DATABASE {form.database}, <br />
                USER SECRET {form.username}, <br />
                PASSWORD SECRET {form.password}, <br />
                SSL MODE {form.sslMode}; <br />
              </Code>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default KafkaConnection;
