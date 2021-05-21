import { Heading, Flex, Link, Image, Box } from "@chakra-ui/react";

export function ReviewsSection() {
  return (
    <Box
      mb="16"
    >
      <Flex
        justify="space-between"
        align="center"
        px={["5", "10"]}
        m={["0 auto 16px", "0 auto 16px", "0 auto 32px"]}
        maxW="1018"
      >
        <Heading fontSize="18" fontWeight="normal">
          Reviews of The Days
        </Heading>
        <Link color="blue.400">All Video</Link>
      </Flex>

      <Flex px={["5", "10"]}>
        <Image
          src="https://i.ytimg.com/vi/vBzBgewl4ac/maxresdefault.jpg"
          borderRadius="5"
          m="0 auto"
          maxH="432"
        />
      </Flex>
    </Box>
  );
}
