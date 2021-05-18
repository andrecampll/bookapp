import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";

import { BiBookBookmark } from 'react-icons/bi';

export function Card() {
  return (
    <Flex
      bgColor="blue.800"
      py="3"
      px={["5", "10"]}
      borderRightRadius="5"
      justify="space-between"
      minW="88%"
      minH={["100", "165"]}
      my="8"
    >
      <Box position="absolute">
        <Image
          src="https://m.media-amazon.com/images/I/41q7gZyFigL.jpg"
          h={["136", "200"]}
          w={["", "auto"]}
          borderRadius="5"
          position="relative"
          bottom="30"
        />
      </Box>

      <Box h="100%" ml={["111", "150"]}>
        <Heading
          as="h4"
          color="white.100"
          fontFamily="Playfair Display"
          fontSize={["20", "24"]}
        >
          Hooked
        </Heading>
        <Text fontSize={["10", "16"]} color="white.100" fontStyle="normal" mt="1">
          by Nir Eyal
        </Text>

        <Flex fontSize={["10", "12"]} align="center" color="white.100" mt={["5", "14"]}>
          <BiBookBookmark />&nbsp;Chapter<Text color="red"> &nbsp;2</Text>&nbsp;From 9
        </Flex>
      </Box>
    </Flex>
  );
}
