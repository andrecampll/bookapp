import { Box, Text, Image, Heading } from "@chakra-ui/react";
import { Book } from "../../hooks/useBooks";

export function CardBook({ id, image, title, authors }: Book ) {
  return (
    <Box key={id}>
      <Image
        src={image}
        borderRadius="5px"
      />
      <Box mt="2">
        <Heading fontSize="12">{title}</Heading>
        <Text fontSize="10" fontWeight="bold">
          By {authors}
        </Text>
      </Box>
    </Box>
  );
}
