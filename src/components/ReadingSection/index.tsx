import { Heading, Flex, Link } from "@chakra-ui/react";

import { Card } from "./Card";

export function ReadingSection() {
  return (
    <>
      <Flex justify="space-between" align="center" px="5">
        <Heading fontSize="18" fontWeight="normal">
          Currently Reading
        </Heading>
        <Link color="blue.400">All</Link>
      </Flex>

      <Flex minW="">
        <Card />
      </Flex>
    </>
  );
}
