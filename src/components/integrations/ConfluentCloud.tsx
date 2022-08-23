import {
  Code,
  Heading,
} from "@chakra-ui/react";

const ConfluentCloud = () => {
    return (
        <>
            <Heading as="h1" size="2xl" pt="8" pb="4">
                Confluent Cloud
            </Heading>
            <Code p="4" className="sqlOutput" fontSize="md">
                -- Kafka secrets<br />
                CREATE SECRET IF NOT EXISTS CONFLUENT_SASL_USERNAME AS '<strong><u>your_kafka_username</u></strong>';<br />
                CREATE SECRET IF NOT EXISTS CONFLUENT_SASL_PASSWORD AS '<strong><u>your_kafka_password</u></strong>';<br />
                <br />
                -- Registry secrets<br />
                CREATE SECRET IF NOT EXISTS CONFLUENT_REGISTRY_USERNAME AS '<strong><u>your_registry_username</u></strong>';<br />
                CREATE SECRET IF NOT EXISTS CONFLUENT_REGISTRY_PASSWORD AS '<strong><u>your_registry_password</u></strong>';<br />
                <br />
                -- Create Kafka connection<br />
                CREATE CONNECTION confluent_cloud <br />
                &nbsp; FOR KAFKA <br />
                &nbsp; BROKER '<strong><u>your_broker</u></strong>', <br />
                &nbsp; SASL MECHANISMS = 'PLAIN', <br />
                &nbsp; SASL USERNAME = SECRET CONFLUENT_SASL_USERNAME, <br />
                &nbsp; SASL PASSWORD = SECRET CONFLUENT_SASL_PASSWORD; <br />
                <br />
                -- Create Registry connection<br />
                CREATE CONNECTION schema_registry <br />
                &nbsp; FOR CONFLUENT SCHEMA REGISTRY <br />
                &nbsp; URL '<strong><u>your_schema_registry</u></strong>', <br />
                &nbsp; USERNAME = SECRET CONFLUENT_REGISTRY_USERNAME, <br />
                &nbsp; PASSWORD = SECRET CONFLUENT_REGISTRY_PASSWORD; <br />
                <br />
                -- Create bytes source<br />
                CREATE SOURCE <strong><u>your_topic</u></strong> <br />
                &nbsp; FROM KAFKA CONNECTION confluent_cloud TOPIC '<strong><u>your_topic</u></strong>' <br />
                &nbsp; FORMAT BYTES; <br />
                <br />
                -- Create avro source<br />
                CREATE SOURCE <strong><u>your_avro_topic</u></strong> <br />
                &nbsp; FROM KAFKA CONNECTION confluent_cloud TOPIC '<strong><u>your_avro_topic</u></strong>' <br />
                &nbsp; FORMAT AVRO USING CONFLUENT SCHEMA REGISTRY CONNECTION schema_registry <br />
                &nbsp; ENVELOPE NONE; <br />
                <br />
                -- Create protobuf source<br />
                CREATE SOURCE <strong><u>your_protobuf_topic</u></strong> <br />
                &nbsp; FROM KAFKA CONNECTION kafka_connection TOPIC '<strong><u>your_protobuf_topic</u></strong>' <br />
                &nbsp; FORMAT PROTOBUF USING CONFLUENT SCHEMA REGISTRY CONNECTION schema_registry <br />
                &nbsp; ENVELOPE NONE; <br />
            </Code>
        </>
    );
}

export default ConfluentCloud;