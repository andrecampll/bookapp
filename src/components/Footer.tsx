import { Grid, Flex, Text } from "@chakra-ui/react";

import { FiHome, FiBook, FiUser } from 'react-icons/fi';

export function Footer() {
  return (
    <Grid
      bgColor="white.100"
      w="100%"
      minH="59"
      px="12"
      py="2"
      templateColumns="repeat(3, 1fr)"
      gap="20"
      pos="fixed"
      bottom="0"
      display={["grid", "grid", "none"]}
    >
      <Flex direction="column" align="center">
        <FiHome fontSize="18"/>
        <Text as="span" mt="2" fontSize="10">Home</Text>
      </Flex>
      <Flex direction="column" align="center">
        <FiBook fontSize="18"/>
        <Text as="span" mt="2" fontSize="10">Libraries</Text>
      </Flex>
      <Flex direction="column" align="center">
        <FiUser fontSize="18"/>
        <Text as="span" mt="2" fontSize="10">Profile</Text>
      </Flex>
    </Grid>
  );
}
