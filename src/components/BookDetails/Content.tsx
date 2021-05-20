import { Heading, Box, Text } from "@chakra-ui/react";

type Book = {
  title: string;
  authors: string[];
  description: string;
};

export function Content({ title, authors, description }: Book) {
  return (
    <>
      <Heading fontWeight="normal" fontSize="24">
        <strong>{title}</strong>
      </Heading>
      <Heading mt="2" as="h3" fontWeight="normal" fontSize="16" color="pink.500">
        {authors}
      </Heading>

      <Box mt="2" mb="32">
        <Text
          fontSize="16"
          mb="6"
          color="gray.500"
          dangerouslySetInnerHTML={{
            __html: description
          }}
        />
      </Box>
    </>
  );
}
