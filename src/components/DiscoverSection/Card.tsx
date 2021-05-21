import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";

import { Book } from "../../hooks/useBooks";

import { BiBarChartSquare } from 'react-icons/bi';
import { IoMdPhotos } from "react-icons/io";

export function Card({ title, authors, image }: Book) {
  return (
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
      backgroundImage="url(/svg/oval-large.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="left bottom"
      backgroundSize="6rem"
    >
      <Box h="100%" w="50%">
        <Heading fontSize={["20", "30", "35"]} color="white.100" fontFamily="Playfair Display">
          {title}
        </Heading>
        <Text fontSize={["12", "14"]} color="white.100" fontStyle="italic">
          {authors.reduce((currentAuthor, nextAuthor) => (
            `${currentAuthor}, ${nextAuthor}`
          ))}
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
        w={["31%", "37%", "31%"]}
      >
        {
          image ? (
            <Image
              src={image}
              height="100%"
              borderRadius="5"
            />
          ) : (
            <Flex
              h="100%"
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
      </Box>
    </Flex>
  );
}
