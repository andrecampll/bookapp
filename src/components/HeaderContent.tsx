import { Container, Box, Image, Button } from "@chakra-ui/react";
import Link from 'next/link';

import { FiArrowLeft } from 'react-icons/fi'

export function HeaderContent() {
  return (
    <Container pt="8" px="5" bgColor="sand.500" minH="282" w="100%">
      <Link href="/">
        <Button as="a" p="0" bgColor="transparent">
          <FiArrowLeft size="20"/>
        </Button>
      </Link>
      <Box position="absolute">
        <Image
          src="https://m.media-amazon.com/images/I/41q7gZyFigL.jpg"
          h="234"
          borderRadius="5"
          position="relative"
          top="2"
          left="58%"
          boxShadow="0px 10px 10px rgba(216, 216, 216, 0.5)"
        />
      </Box>
    </Container>
  );
}
