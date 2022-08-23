import { Code, Heading } from "@chakra-ui/react";

const AwsMsk = () => {
  return (
    <>
      <Heading as="h1" size="2xl" pt="8" pb="4">
        AWS MSK
      </Heading>
      <Code p="4" className="sqlOutput" fontSize="md">
        -- Create secrets <br />
        CREATE SECRET up_sasl_username AS '
        <strong>
          <u>your_msk_sasl_username</u>
        </strong>
        ';
        <br />
        CREATE SECRET up_sasl_password AS '
        <strong>
          <u>your_msk_sasl_password</u>
        </strong>
        ';
        <br />
        <br />
        -- Create connection <br />
        CREATE CONNECTION msk_kafka <br />
        &nbsp; FOR KAFKA <br />
        &nbsp; BROKER '
        <strong>
          <u>your_broker</u>
        </strong>
        ', <br />
        &nbsp; SASL MECHANISMS = 'SCRAM-SHA-512', <br />
        &nbsp; SASL USERNAME = SECRET up_sasl_username, <br />
        &nbsp; SASL PASSWORD = SECRET up_sasl_password; <br />
        <br />
        -- Create source <br />
        CREATE SOURCE{" "}
        <strong>
          <u>your_topic</u>
        </strong>{" "}
        <br />
        &nbsp; FROM KAFKA CONNECTION msk_kafka TOPIC '
        <strong>
          <u>your_topic</u>
        </strong>
        ' <br />
        &nbsp; FORMAT TEXT; <br />
      </Code>
    </>
  );
};

export default AwsMsk;
