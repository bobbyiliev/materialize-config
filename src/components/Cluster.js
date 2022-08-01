import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Code,
  Flex,
  FormControl,
  Heading,
  Input,
  Select,
  Spacer,
} from "@chakra-ui/react";

const Cluster = () => {
  const [formFields, setFormFields] = useState([]);
  const sizes = [
    "xsmall",
    "small",
    "medium",
    "large",
    "xlarge",
    "2xlarge",
    "3xlarge",
    "4xlarge",
    "5xlarge",
    "6xlarge",
  ];

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const addFields = () => {
    let object = {
      name: "",
      replica: "",
      size: "",
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
          Cluster
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
                  name="replica"
                  placeholder="Replica Name"
                  onChange={event => handleFormChange(event, index)}
                  value={form.replica}
                />
              </FormControl>
              <FormControl p="2">
                <Select
                  placeholder="Select option"
                  name="size"
                  onChange={event => handleFormChange(event, index)}
                  value={form.Size}
                >
                  {sizes.map((size, index) => {
                    return (
                      <option key={index} value={size}>
                        {size}
                      </option>
                    );
                  })}
                </Select>
              </FormControl>
              <Box>
                <FormControl p="2">
                  <Button
                    colorScheme="blue"
                    onClick={() => removeFields(index)}
                  >
                    Remove
                  </Button>
                </FormControl>
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
                CREATE CLUSTER {form.name} REPLICAS ({form.replica} (SIZE='
                {form.size}') );
              </Code>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Cluster;
