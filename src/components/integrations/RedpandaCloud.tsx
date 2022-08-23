import {
  Code,
  Heading,
} from "@chakra-ui/react";

const RedpandaCloud = () => {
    return (
        <>
            <Heading as="h1" size="2xl" pt="8" pb="4">
                Redpanda Cloud
            </Heading>
            <Code p="4" className="sqlOutput" fontSize="md">
                -- Create secrets <br />
                CREATE SECRET redpanda_username AS 'your_username'; <br />
                CREATE SECRET redpanda_password AS 'your_password'; <br />
                CREATE SECRET redpanda_ca_cert AS  decode('your_base64_certificate_encoded', 'base64');<br />
                <br />
                -- Create connection <br />
                CREATE CONNECTION redpanda_cloud <br />
                &nbsp; FOR KAFKA <br />
                &nbsp; BROKER 'your_broker', <br />
                &nbsp; SASL MECHANISMS = 'SCRAM-SHA-256', <br />
                &nbsp; SASL USERNAME = SECRET redpanda_username, <br />
                &nbsp; SASL PASSWORD = SECRET redpanda_password, <br />
                &nbsp; SSL CERTIFICATE AUTHORITY = SECRET redpanda_ca_cert; <br />
                <br />
                -- Create source <br />
                CREATE SOURCE your_topic <br />
                &nbsp; FROM KAFKA CONNECTION redpanda_cloud TOPIC 'your_topic' <br />
                &nbsp; FORMAT BYTES; <br />
            </Code>
        </>
    );
}

export default RedpandaCloud;