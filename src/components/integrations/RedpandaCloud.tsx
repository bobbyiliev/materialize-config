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
                CREATE SECRET redpanda_password AS '<strong><u>your_password</u></strong>'; <br />
                CREATE SECRET redpanda_ca_cert AS  decode('your_base64_certificate_encoded', 'base64');<br />
                <br />
                -- Create connection <br />
                CREATE CONNECTION redpanda_cloud <br />
                &nbsp; FOR KAFKA <br />
                &nbsp; BROKER '<strong><u>your_broker</u></strong>', <br />
                &nbsp; SASL MECHANISMS = 'SCRAM-SHA-256', <br />
                &nbsp; SASL USERNAME = '<strong><u>your_username</u></strong>', <br />
                &nbsp; SASL PASSWORD = SECRET redpanda_password, <br />
                &nbsp; SSL CERTIFICATE AUTHORITY = SECRET redpanda_ca_cert; <br />
                <br />
                -- Create source <br />
                CREATE SOURCE <strong><u>your_topic</u></strong> <br />
                &nbsp; FROM KAFKA CONNECTION redpanda_cloud TOPIC '<strong><u>your_topic</u></strong>' <br />
                &nbsp; FORMAT BYTES; <br />
            </Code>
        </>
    );
}

export default RedpandaCloud;