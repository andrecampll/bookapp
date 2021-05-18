import { Heading, Flex, Link, Image, Box } from "@chakra-ui/react";

export function ReviewsSection() {
  return (
    <Box mb="16">
      <Flex justify="space-between" align="center" mb="4" px={["5", "10"]}>
        <Heading fontSize="18" fontWeight="normal">
          Reviews of The Days
        </Heading>
        <Link color="blue.400">All Video</Link>
      </Flex>

      <Flex px={["5", "10"]}>
        <Image
          src="https://i.ytimg.com/vi/vBzBgewl4ac/maxresdefault.jpg"
          borderRadius="5"
          maxH="460"
        />
      </Flex>
    </Box>
  );
}
