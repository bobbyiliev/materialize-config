import {
  Code,
  Heading,
} from "@chakra-ui/react";

const Upstash = () => {
    return (
        <>
            <Heading as="h1" size="2xl" pt="8" pb="4">
                Upstash Kafka
            </Heading>
            <Code p="4" className="sqlOutput" fontSize="md">
                -- Create secrets <br />
                CREATE SECRET up_sasl_username AS '<strong><u>your_upstash_sasl_username</u></strong>';<br />
                CREATE SECRET up_sasl_password AS '<strong><u>your_upstash_sasl_password</u></strong>';<br />
                <br />
                -- Create connection <br />
                CREATE CONNECTION upstash_kafka <br />
                &nbsp; FOR KAFKA <br />
                &nbsp; BROKER '<strong><u>your_broker</u></strong>', <br />
                &nbsp; SASL MECHANISMS = 'SCRAM-SHA-256', <br />
                &nbsp; SASL USERNAME = SECRET up_sasl_username, <br />
                &nbsp; SASL PASSWORD = SECRET up_sasl_password; <br />
                <br />
                -- Create source <br />
                CREATE SOURCE <strong><u>your_topic</u></strong> <br />
                &nbsp; FROM KAFKA CONNECTION upstash_kafka TOPIC '<strong><u>your_topic</u></strong>' <br />
                &nbsp; FORMAT BYTES; <br />
            </Code>
        </>
    );
}

export default Upstash;