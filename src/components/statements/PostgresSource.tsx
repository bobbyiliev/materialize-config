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

const PostgresSource = () => {
  const [formFields, setFormFields] = useState([]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
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
    <>
      <Flex p="4">
        <Heading as="h2" size="xl">
          Postgres Source
        </Heading>
        <Spacer />
        <Button colorScheme="blue" onClick={addFields}>
          Add More
        </Button>
      </Flex>
      <form>
        {formFields.map((form, index) => {
          return (
            <Flex key={index}>
              <FormControl p="2">
                <Input
                  name="name"
                  placeholder="Name"
                  onChange={event => handleFormChange(event, index)}
                  value={form.name}
                />
              </FormControl>
              <FormControl p="2">
                <Input
                  name="connection"
                  placeholder="Connection"
                  onChange={event => handleFormChange(event, index)}
                  value={form.connection}
                />
              </FormControl>
              <FormControl p="2">
                <Input
                  name="publication"
                  placeholder="Publication"
                  onChange={event => handleFormChange(event, index)}
                  value={form.publication}
                />
              </FormControl>
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
              <Code p="4" className="sqlOutput" fontSize="md">
                CREATE SOURCE "{form.name.trim()}" <br />
                &nbsp; FROM POSTGRES CONNECTION {form.connection.trim()} <br />
                &nbsp; (PUBLICATION '{form.publication.trim()}');
              </Code>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PostgresSource;
