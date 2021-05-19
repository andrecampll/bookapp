import { Flex, Box, Image, Button } from "@chakra-ui/react";
import Link from 'next/link';

import { FiArrowLeft } from 'react-icons/fi'

export function HeaderContent() {
  return (
    <Box pt="8" px="5" bgColor="sand.500" minH="282" w="100%" m="0">
      <Link href="/">
        <Button as="a" p="0" bgColor="transparent">
          <FiArrowLeft size="20"/>
        </Button>
      </Link>
      <Flex align="center" justify="center" width="100%">
        <Image
          src="https://m.media-amazon.com/images/I/41q7gZyFigL.jpg"
          h="234"
          borderRadius="5"
          position="absolute"
          top="20"
          boxShadow="0px 10px 10px rgba(216, 216, 216, 0.5)"
        />
      </Flex>
    </Box>
  );
}
