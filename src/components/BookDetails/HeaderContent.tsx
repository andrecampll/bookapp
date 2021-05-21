import { Flex, Box, Image, Button } from "@chakra-ui/react";
import Link from 'next/link';

import { FiArrowLeft } from 'react-icons/fi'
import { IoMdPhotos } from "react-icons/io";

type HeaderContentProps = {
  bookImage: string;
}

export function HeaderContent({ bookImage }: HeaderContentProps) {
  return (
    <Box pt="8" px="5" bgColor="sand.500" minH="282" maxW="800px" m="0 auto">
      <Link href="/">
        <Button as="a" p="0" bgColor="transparent" cursor="pointer">
          <FiArrowLeft size="20"/>
        </Button>
      </Link>
      <Flex align="center" justify="center" width="100%">
        {
          bookImage ? (
            <Image
              src={bookImage}
              h={["234", "300"]}
              borderRadius="5"
              position="absolute"
              top="20"
              boxShadow="0px 10px 10px rgba(216, 216, 216, 0.5)"
            />
          ) : (
            <Flex
              h={["234", "300"]}
              w={["153.5px", "197px", "197px"]}
              background="gray.100"
              borderRadius="5"
              position="absolute"
              top="20"
              align="center"
              justify="center"
            >
              <IoMdPhotos />
            </Flex>
          )
        }
      </Flex>
    </Box>
  );
}
