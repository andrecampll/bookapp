import { Box, Text, Image, Heading, Flex } from "@chakra-ui/react";
import { IoMdPhotos } from 'react-icons/io';

import { Book } from "../../hooks/useBooks";

export function CardBook({ id, image, title, authors }: Book ) {
  return (
    <Box key={id} h="100%">
      {
        image ? (
          <Image
            src={image}
            borderRadius="5px"
          />
        ) : (
          <Flex
            h="80%"
            background="gray.100"
            maxW="120"
            borderRadius="5px"
            align="center"
            justify="center"
          >
            <IoMdPhotos />
          </Flex>
        )
      }
      <Box mt="2" maxW="128px">
        <Heading fontSize="12">{title}</Heading>
        <Text fontSize="10" fontWeight="bold">
          By {authors}
        </Text>
      </Box>
    </Box>
  );
}
