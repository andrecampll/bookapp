import Link from 'next/link';
import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";

import { useBooks } from "../../hooks/useBooks";

import { BiBookBookmark } from 'react-icons/bi';
import { IoMdPhotos } from 'react-icons/io';

export function Card() {
  const { book } = useBooks();

  return (
    <Flex
      bgColor="green.300"
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
        <Link href={`detail/${book.id}`}>
          <a>
            {
              book.image ? (
                <Image
                  src={book.image}
                  h={["136", "200", "300"]}
                  maxW="201"
                  borderRadius="5"
                  position="relative"
                  bottom={["7", "8", "9"]}
                />
              ) : (
                <Flex
                  h={["160px", "200px", "300px"]}
                  w={["95px", "131px", "196px"]}
                  maxW="201"
                  background="gray.100"
                  borderRadius="5"
                  position="relative"
                  bottom={["7", "8", "9"]}
                  align="center"
                  justify="center"
                >
                  <IoMdPhotos size={20} />
                </Flex>
              )
            }
          </a>
        </Link>
      </Box>

      <Box h="100%" ml={["111", "150", "225"]}>
        <Heading
          as="h4"
          fontFamily="Playfair Display"
          fontSize={["20", "24", "38"]}
        >
          {book.title}
        </Heading>
        <Text fontSize={["10", "16"]} color="gray.700" fontStyle="normal" mt="1">
          by {book.authors}
        </Text>

        <Flex fontSize={["10", "12", "14"]} align="center" mt={["5", "14", "32"]}>
          <BiBookBookmark />&nbsp;Chapter<Text color="red"> &nbsp;2</Text>&nbsp;From 9
        </Flex>
      </Box>
    </Flex>
  );
}
