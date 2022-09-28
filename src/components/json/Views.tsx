import { useState } from "react";
import {
  Box,
  Button,
  Input,
  Code,
  Flex,
  FormControl,
  Heading,
  Textarea,
  Spacer,
} from "@chakra-ui/react";

var flatten = require('flat')

const Views = () => {
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
  };

  const addFields = () => {
    let object = {
      json: '{"a": "b", "c": true, "d": 1}',
      name: "your_view",
      source: "your_source",
    };

    setFormFields([...formFields, object]);
  };

  const escapeString = (s: String) => {
    s = s.replace(/'/g, `''`);
    s = s.replace(/->/g, `'->>'`);
    return s;
  };

  const escapeIdent = (s: String) => {
    s = s.replace(/"/g, `""`);
    s = s.replace(/->/g, `_`);
    return s;
  };

  const materialize = json => {
    // Check if valid JSON
    try {
        JSON.parse(json);
    } catch (e) {
        return "Invalid JSON";
    }

    // Flatten JSON
    let flat = flatten(JSON.parse(json), { delimiter: '->'});
    let keys = Object.keys(flat);
    const selectItems = Object.entries(flat)
      .map(([k, v]) => {
        let subscript = escapeString(k);
        let colName = escapeIdent(k);
        let cast = "";
        switch (typeof v) {
          case "boolean":
            cast = "::bool";
            break;
          case "number":
            cast = "::numeric";
            break;
          case "string":
            cast = "::text";
            break;

        }
        return `(data->>'${subscript}')${cast} AS "${colName}"`;
      }).join(`, \n`);

    return selectItems;
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
          JSON Views
        </Heading>
        <Spacer />
        <Button colorScheme="blue" onClick={addFields}>
          Add More
        </Button>
      </Flex>
      <form onSubmit={submit}>
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
                    name="source"
                    placeholder="Source Name"
                    onChange={event => handleFormChange(event, index)}
                    value={form.source}
                  />
                </FormControl>
              </Flex>
              <Flex>
                <FormControl p="2">
                  <Textarea
                    h="full"
                    name="json"
                    placeholder="JSON"
                    onChange={event => handleFormChange(event, index)}
                    value={form.json}
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
                CREATE MATERIALIZED VIEW {form.name} AS SELECT
                &nbsp; {materialize(form.json).split(`\n`).map((item, index) => {
                        return (
                            <div key={index}>
                            &nbsp; &nbsp; {item}
                            <br />
                            </div>
                        );
                        })
                    } 
                &nbsp; FROM (SELECT CONVERT_FROM(data, 'utf8')::jsonb AS data
                FROM {form.source});
              </Code>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Views;
