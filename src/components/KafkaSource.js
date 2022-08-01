import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
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
  const formats = ["AVRO", "PROTOBUF", "TEXT", "BYTES", "CSV"];
  const envelopes = ["NONE", "DEBEZIUM", "DEBEZIUM UPSERT", "UPSERT"];

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const addFields = () => {
    let object = {
      name: "",
      kafka: "",
      topic: "",
      format: "",
      envelope: "",
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
                    name="kafka"
                    placeholder="Kafka Connection Name"
                    onChange={event => handleFormChange(event, index)}
                    value={form.kafka}
                  />
                </FormControl>
              </Flex>
              <Flex>
                <FormControl p="2" w="full">
                  <Input
                    name="topic"
                    placeholder="Topic"
                    onChange={event => handleFormChange(event, index)}
                    value={form.topic}
                  />
                </FormControl>

                <FormControl p="2" w="full">
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
                </FormControl>
              </Flex>
              {(form.format === "AVRO" || form.format === "PROTOBUF") && (
                <Flex>
                  <FormControl p="2" w="full">
                    <Input
                      name="schema"
                      placeholder="Schema Registry Connection"
                      onChange={event => handleFormChange(event, index)}
                      value={form.schema}
                    />
                  </FormControl>
                </Flex>
              )}
              {form.format === "CSV" && (
                <Flex>
                  <FormControl p="2" w="full">
                    <Input
                      name="columns"
                      placeholder="Columns"
                      onChange={event => handleFormChange(event, index)}
                      value={form.columns}
                    />
                  </FormControl>
                </Flex>
              )}
              <Flex>
                <FormControl p="2" w="full">
                  <Select
                    placeholder="Envelope"
                    name="envelope"
                    onChange={event => handleFormChange(event, index)}
                    value={form.envelope}
                  >
                    {envelopes.map((envelope, index) => {
                      return (
                        <option key={index} value={envelope}>
                          {envelope}
                        </option>
                      );
                    })}
                  </Select>
                </FormControl>
              </Flex>
              <Flex>
                <Spacer />
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
                CREATE SOURCE {form.name} <br />
                &nbsp; FROM KAFKA CONNECTION {form.connection} <br />
                &nbsp; TOPIC '{form.topic}' <br />
                &nbsp; FORMAT {form.format}
                {form.schema && (
                  <>
                    <br />
                    &nbsp; USING CONFLUENT SCHEMA REGISTRY CONNECTION{" "}
                    {form.schema}
                  </>
                )}
                {form.format === "CSV" && (
                  <>
                    <br />
                    &nbsp; WITH {form.columns} COLUMNS
                  </>
                )}
                {form.envelope && (
                  <>
                    <br />
                    &nbsp; ENVELOPE {form.envelope}
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
