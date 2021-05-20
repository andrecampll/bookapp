import { Flex, Box, Image, Button } from "@chakra-ui/react";
import Link from 'next/link';

import { FiArrowLeft } from 'react-icons/fi'

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
        <Image
          src={bookImage}
          h={["234", "300"]}
          borderRadius="5"
          position="absolute"
          top="20"
          boxShadow="0px 10px 10px rgba(216, 216, 216, 0.5)"
        />
      </Flex>
    </Box>
  );
}
