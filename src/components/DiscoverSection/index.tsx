import { Heading, Box, Flex, Link, Image } from "@chakra-ui/react";

import { CardSlider } from "./CardSlider";

export function DiscoverSection() {
  return (
    <>
      <Flex
        justify="space-between"
        align="center"
        px={["5", "10"]}
        m={["0 auto", "0", "0 auto"]}
        maxW="1018"
      >
        <Heading fontSize="18" fontWeight="normal">
          Discover new book
        </Heading>
        <Link color="blue.400">More</Link>
      </Flex>

      <Box
        mb="7"
        maxW="1018"
        mx="auto"
      >
        <CardSlider />
      </Box>
    </>
  );
}
