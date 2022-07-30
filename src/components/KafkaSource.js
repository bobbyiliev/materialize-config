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

const KafkaSource = () => {
  const [formFields, setFormFields] = useState([]);
  const formats = ["AVRO", "JSON", "PROTOBUF", "TEXT", "BYTES", "CSV"];

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
      kafka: "",
      topic: "",
      format: "",
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
          Kafka Source
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
                <Box p="2" w="full">
                  <Input
                    name="name"
                    placeholder="Name"
                    onChange={event => handleFormChange(event, index)}
                    value={form.name}
                  />
                </Box>
                <Box p="2" w="full">
                  <Input
                    name="kafka"
                    placeholder="Kafka Connection Name"
                    onChange={event => handleFormChange(event, index)}
                    value={form.kafka}
                  />
                </Box>
              </Flex>
              <Flex>
                <Box p="2" w="full">
                  <Input
                    name="topic"
                    placeholder="Topic"
                    onChange={event => handleFormChange(event, index)}
                    value={form.topic}
                  />
                </Box>

                <Box p="2" w="full">
                  <Select
                    placeholder="Select option"
                    name="format"
                    onChange={event => handleFormChange(event, index)}
                    value={form.format}
                  >
                    {formats.map((format, index) => {
                      return (
                        <option key={index} value={format}>
                          {format}
                        </option>
                      );
                    })}
                  </Select>
                </Box>
              </Flex>
              {form.format === "AVRO" && (
                <Flex>
                  <Box p="2" w="full">
                    <Input
                      name="schema"
                      placeholder="Schema Registry Connection"
                      onChange={event => handleFormChange(event, index)}
                      value={form.schema}
                    />
                  </Box>
                </Flex>
              )}
              {form.format === "PROTOBUF" && (
                <Flex>
                  <Box p="2" w="full">
                    <Input
                      name="schema"
                      placeholder="Schema Registry Connection"
                      onChange={event => handleFormChange(event, index)}
                      value={form.schema}
                    />
                  </Box>
                </Flex>
              )}
              {form.format === "CSV" && (
                <Flex>
                  <Box p="2" w="full">
                    <Input
                      name="columns"
                      placeholder="Columns"
                      onChange={event => handleFormChange(event, index)}
                      value={form.columns}
                    />
                  </Box>
                </Flex>
              )}
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
              <Code p="2" className="sqlOutput">
                CREATE SOURCE {form.name} <br />
                FROM KAFKA CONNECTION {form.connection} <br />
                TOPIC '{form.topic}' <br />
                FORMAT {form.format}
                {form.schema && (
                  <>
                    <br />
                    USING CONFLUENT SCHEMA REGISTRY CONNECTION {form.schema}
                  </>
                )}
                {form.format == "CSV" && (
                  <>
                    <br />
                    WITH {form.columns} COLUMNS
                  </>
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

export default KafkaSource;
