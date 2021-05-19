import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { BiBarChartSquare } from 'react-icons/bi';

export function Card() {
  return (
    <motion.div
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Flex
        bgColor="blue.800"
        py="4"
        px={["5"]}
        borderRadius="5"
        justify="space-between"
        maxH={["139", "200", "250"]}
        h={["100%", "200"]}
        mt="4"
        sx={{
          "&": {
            scrollSnapAlign: 'start'
          }
        }}
      >
        <Box h="100%">
          <Heading color="white.100" fontFamily="Playfair Display">Hooked</Heading>
          <Text color="white.100" fontStyle="italic">Nir Eyal</Text>

          <Flex fontSize={["10", "12"]} align="center" color="white.100" mt={["5", "20"]}>
            <BiBarChartSquare />&nbsp;<strong>120+</strong>&nbsp;Read Now
          </Flex>
        </Box>

        <Box>
          <Image
            src="https://m.media-amazon.com/images/I/41q7gZyFigL.jpg"
            maxH={["111", "160"]}
            borderRadius="5"
          />
        </Box>
      </Flex>
    </motion.div>
  );
}
