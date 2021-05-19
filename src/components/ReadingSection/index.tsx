import { Heading, Flex, Link } from "@chakra-ui/react";

import { Card } from "./Card";

export function ReadingSection() {
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
          Currently Reading
        </Heading>
        <Link color="blue.400">All</Link>
      </Flex>

      <Flex maxW="1018" m="0 auto">
        <Card />
      </Flex>
    </>
  );
}
