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
  Spacer,
} from "@chakra-ui/react";

const Secret = () => {
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
          Add More
        </Button>
      </Flex>
      <form onSubmit={submit}>
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
                  name="secret"
                  placeholder="Secret"
                  onChange={event => handleFormChange(event, index)}
                  value={form.secret}
                />
              </FormControl>
              <Box p="2">
                <Checkbox
                  type="checkbox"
                  name="encrypted"
                  key={index}
                  isChecked={form.encrypted}
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
          return (
            <div key={index}>
              <Code p="2" className="sqlOutput">
                CREATE SECRET {form.name} AS
                {form.encrypted ? (
                  <> decode({form.secret}, 'base64')</>
                ) : (
                  <> {form.secret}</>
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

export default Secret;
