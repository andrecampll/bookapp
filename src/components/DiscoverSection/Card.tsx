import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";

import { BiBarChartSquare } from 'react-icons/bi';

export function Card() {
  return (
    <Flex
      bgColor="blue.800"
      py="4"
      px="5"
      borderRadius="5"
      justify="space-between"
      minW="71%"
      maxH="139"
      mt="4"
      ml="5"
    >
      <Box h="100%">
        <Heading color="white.100" fontFamily="Playfair Display">Hooked</Heading>
        <Text color="white.100" fontStyle="italic">Nir Eyal</Text>

        <Flex fontSize="10" align="center" color="white.100" mt="5">
          <BiBarChartSquare />&nbsp;<strong>120+</strong>&nbsp;Read Now
        </Flex>
      </Box>

      <Box>
        <Image
          src="https://m.media-amazon.com/images/I/41q7gZyFigL.jpg"
          maxH="111"
          borderRadius="5"
        />
      </Box>
    </Flex>
  );
}
