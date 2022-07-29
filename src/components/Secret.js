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

const Secret = () => {
  //   const [formFields, setFormFields] = useState([
  //     { name: "", secret: "", encrypted: "" },
  //   ]);
  const [formFields, setFormFields] = useState([]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    const isCheckbox = event.target.type === "checkbox";
    if (isCheckbox) {
      data[index][event.target.name] = event.target.checked;
    } else {
      data[index][event.target.name] = event.target.value;
    }
    setFormFields(data);
  };

  const submit = e => {
    e.preventDefault();
    console.log(formFields);
  };

  const addFields = () => {
    let object = {
      name: "",
      secret: "",
      encrypted: "",
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
          Secrets
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
                  name="secret"
                  placeholder="Secret"
                  onChange={event => handleFormChange(event, index)}
                  value={form.secret}
                />
              </Box>
              <Box p="2">
                <Checkbox
                  type="checkbox"
                  name="encrypted"
                  onChange={event => handleFormChange(event, index)}
                >
                  Encrypted
                </Checkbox>
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
          if (form.encrypted) {
            return (
              <div key={index}>
                <Code>
                  CREATE SECRET {form.name} AS decode( {form.secret}, 'base64' ){" "}
                  ;
                </Code>
              </div>
            );
          } else {
            return (
              <div key={index}>
                <Code>
                  CREATE SECRET {form.name} AS {form.secret} ;
                </Code>
              </div>
            );
          }
        })}
      </div>
    </Container>
  );
};

export default Secret;
