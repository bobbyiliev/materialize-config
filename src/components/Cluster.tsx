import { useState } from "react";
import {
  Box,
  Button,
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
    if (event.target.name === "numberOfReplicas") {
      if (Number(event.target.value) > 30) {
        data[index][event.target.name] = 30;
      } else if (Number(event.target.value) < 1) {
        data[index][event.target.name] = 1;
      } else {
        data[index][event.target.name] = event.target.value;
      }
    } else {
      data[index][event.target.name] = event.target.value;
    }
    setFormFields(data);
  };

  const addFields = () => {
    let object = {
      name: "",
      replica: "replica",
      numberOfReplicas: 1,
      size: "small",
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
            <div key={index}>
              <Flex>
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
              </Flex>
              <Flex>
                <FormControl p="2">
                  <Input
                    name="numberOfReplicas"
                    placeholder="Number of Replicas"
                    onChange={event => handleFormChange(event, index)}
                    value={form.numberOfReplicas}
                    type="number"
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
                CREATE CLUSTER {form.name} REPLICAS ( <br />
                <>
                  {Array(Number(form.numberOfReplicas))
                    .fill(0)
                    .map((_, i) => {
                      return (
                        <span key={i}>
                          &nbsp; {form.replica}
                          {i == 0 ? " " : i + 1 + " "}
                          (SIZE='{form.size}')
                          {i < form.numberOfReplicas - 1 ? ", " : ""} <br />
                        </span>
                      );
                    })}
                </>
                );
              </Code>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cluster;
