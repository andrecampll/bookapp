import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";

import { FiInstagram } from 'react-icons/fi';

export function Card() {
  return (
    <Flex
      bgColor="blue.800"
      py="3"
      px="5"
      borderRightRadius="5"
      justify="space-between"
      minW="88%"
      minH="100"
      mt="8"
    >
      <Box position="absolute">
        <Image
          src="https://m.media-amazon.com/images/I/41q7gZyFigL.jpg"
          h="136"
          w="91"
          borderRadius="5"
          position="relative"
          bottom="30"
        />
      </Box>

      <Box h="100%" ml="111">
        <Heading color="white.100" fontFamily="Playfair Display" fontSize="20">
          Hooked
        </Heading>
        <Text fontSize="10" color="white.100" fontStyle="normal" mt="1">
          by Nir Eyal
        </Text>

        <Flex fontSize="10" align="center" color="white.100" mt="5">
          <FiInstagram />&nbsp;Chapter<Text color="red"> &nbsp;2</Text>&nbsp;From 9
        </Flex>
      </Box>
    </Flex>
  );
}
