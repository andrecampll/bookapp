import { Heading, Flex, Link, Image } from "@chakra-ui/react";

export function ReviewsSection() {
  return (
    <>
      <Flex justify="space-between" align="center" mb="4">
        <Heading fontSize="18" fontWeight="normal">
          Reviews of The Days
        </Heading>
        <Link color="blue.400">All Video</Link>
      </Flex>

      <Flex>
        <Image
          src="https://i.ytimg.com/vi/vBzBgewl4ac/maxresdefault.jpg"
          borderRadius="5"
        />
      </Flex>
    </>
  );
}
