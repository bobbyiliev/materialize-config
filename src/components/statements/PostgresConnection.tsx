import { useState } from "react";
import {
  Box,
  Button,
  Code,
  Flex,
  FormControl,
  Heading,
  Input,
  Spacer,
} from "@chakra-ui/react";

const PostgresConnection = () => {
  const [formFields, setFormFields] = useState([]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
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
      sshTunnel: "",
    };

    setFormFields([...formFields, object]);
  };

  const removeFields = index => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };
  return (
    <>
      <Flex p="4">
        <Heading as="h2" size="xl">
          Postgres Connection
        </Heading>
        <Spacer />
        <Button colorScheme="blue" onClick={addFields}>
          Add More
        </Button>
      </Flex>
      <form>
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
                <FormControl p="2" w="full">
                  <Input
                    name="sslMode"
                    placeholder="SSL Mode"
                    onChange={event => handleFormChange(event, index)}
                    value={form.sslMode}
                  />
                </FormControl>
                <FormControl p="2" w="full">
                  <Input
                    name="sshTunnel"
                    placeholder="SSH Tunnel"
                    onChange={event => handleFormChange(event, index)}
                    value={form.sshTunnel}
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
              <Code p="4" className="sqlOutput" fontSize="md">
                CREATE CONNECTION {form.name} FOR POSTGRES <br />
                &nbsp; HOST '{form.host.trim()}', <br />
                &nbsp; PORT {form.port.trim()}, <br />
                &nbsp; DATABASE '{form.database.trim()}', <br />
                &nbsp; USER SECRET {form.username.trim()}, <br />
                &nbsp; PASSWORD SECRET {form.password.trim()}
                {form.sslMode && (
                  <>
                    , <br /> &nbsp; SSL MODE {form.sslMode}
                  </>
                )}
                {form.sshTunnel && (
                  <>
                    , <br /> &nbsp; SSH TUNNEL {form.sshTunnel}
                  </>
                )}
                ; <br />
              </Code>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PostgresConnection;
