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
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";

const PostgresSource = () => {
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
      connection: "",
      publication: "",
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
          Postgres Source
        </Heading>
        <Spacer />
        <Button colorScheme="blue" onClick={addFields}>
          Add More..
        </Button>
      </Flex>
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <Flex key={index}>
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
                  name="connection"
                  placeholder="Connection"
                  onChange={event => handleFormChange(event, index)}
                  value={form.connection}
                />
              </Box>
              <Box p="2">
                <Input
                  name="publication"
                  placeholder="Publication"
                  onChange={event => handleFormChange(event, index)}
                  value={form.publication}
                />
              </Box>
              <Box p="2">
                <Button colorScheme="blue" onClick={() => removeFields(index)}>
                  Remove
                </Button>
              </Box>
            </Flex>
          );
        })}
      </form>
      <br />
      <div>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <Code p="2" className="sqlOutput">
                CREATE SOURCE "{form.name}" <br />
                &nbsp; FROM POSTGRES CONNECTION {form.connection} <br />
                &nbsp; PUBLICATION '{form.publication}';
              </Code>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default PostgresSource;
