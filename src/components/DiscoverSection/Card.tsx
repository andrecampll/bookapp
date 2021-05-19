import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { BiBarChartSquare } from 'react-icons/bi';

type CardProps = {
  title: string;
  authors: string[];
  image: string;
}

export function Card({ title, authors, image }: CardProps) {
  return (
    <motion.div
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Flex
        bgColor="blue.800"
        py="2"
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
        <Box h="100%" mW={'200'} w="50%">
          <Heading fontSize={["20", "30", "35"]} color="white.100" fontFamily="Playfair Display">
            {title}
          </Heading>
          <Text fontSize={["12", "14"]} color="white.100" fontStyle="italic">
            Nir Eyal
          </Text>

          <Flex
            fontSize={["10", "12"]}
            align="center"
            color="white.100"
            mt={["2", "5%", "8%"]}
          >
            <BiBarChartSquare />&nbsp;<strong>120+</strong>&nbsp;Read Now
          </Flex>
        </Box>

        <Box
          py="2"
          w="31%"
        >
          <Image
            src={image}
            height="100%"
            borderRadius="5"
          />
        </Box>
      </Flex>
    </motion.div>
  );
}
