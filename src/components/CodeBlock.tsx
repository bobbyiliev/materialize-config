import {
  Code,
} from "@chakra-ui/react";

export const CodeBlock = ({ content }) => {
    return (
        <Code p="4" className="sqlOutput" fontSize="md">
        {content}
        </Code>
    );
}