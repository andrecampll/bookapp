import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";

import { BiBookBookmark } from 'react-icons/bi';

type Book = {
  title: string;
  authors: string[];
  image: string;
};

export function Card({ title, authors, image }: Book) {
  return (
    <Flex
      bgColor="blue.800"
      py="3"
      px={["5", "10"]}
      borderRightRadius={"5"}
      borderLeftRadius={["0", "0", "5"]}
      justify="space-between"
      minW="88%"
      minH={["100", "165", "250"]}
      my={["8", "12"]}
      mx={["0", "0", "auto"]}
    >
      <Box position="absolute">
        <Image
          src={image}
          h={["136", "200", "300"]}
          borderRadius="5"
          position="relative"
          bottom={["7", "8", "9"]}
        />
      </Box>

      <Box h="100%" ml={["111", "150", "225"]}>
        <Heading
          as="h4"
          color="white.100"
          fontFamily="Playfair Display"
          fontSize={["20", "24", "30"]}
        >
          {title}
        </Heading>
        <Text fontSize={["10", "16"]} color="white.100" fontStyle="normal" mt="1">
          by {authors}
        </Text>

        <Flex fontSize={["10", "12", "14"]} align="center" color="white.100" mt={["5", "14", "32"]}>
          <BiBookBookmark />&nbsp;Chapter<Text color="red"> &nbsp;2</Text>&nbsp;From 9
        </Flex>
      </Box>
    </Flex>
  );
}
