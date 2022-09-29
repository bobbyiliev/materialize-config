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

const SshConnection = () => {
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
      user: "",
      port: "",
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
          SSH Connection
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
                <FormControl p="2">
                  <Input
                    name="name"
                    placeholder="Connection name"
                    onChange={event => handleFormChange(event, index)}
                    value={form.name}
                  />
                </FormControl>
                <FormControl p="2">
                  <Input
                    name="host"
                    placeholder="SSH Host / IP"
                    onChange={event => handleFormChange(event, index)}
                    value={form.host}
                  />
                </FormControl>
              </Flex>
              <Flex>
                <FormControl p="2">
                  <Input
                    name="user"
                    placeholder="SSH User"
                    onChange={event => handleFormChange(event, index)}
                    value={form.user}
                  />
                </FormControl>
                <FormControl p="2">
                  <Input
                    name="port"
                    placeholder="Port"
                    onChange={event => handleFormChange(event, index)}
                    value={form.port}
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
                CREATE CONNECTION {form.name} <br />
                &nbsp; FOR SSH TUNNEL <br />
                &nbsp; HOST '{form.host}', <br />
                &nbsp; USER '{form.user}', <br />
                &nbsp; PORT {form.port}; <br />
                <br />
                -- <i>Get the public key and add it to your SSH host:</i>
                <br />
                -- <i>SELECT * FROM mz_ssh_tunnel_connections;</i>
              </Code>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SshConnection;
