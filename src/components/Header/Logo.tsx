import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize={["", "4xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      display={["none", "none", "flex"]}
      mr=""
      w="64"
    >
      BookApp
      <Text color="pink.500" as="span" ml="1">.</Text>
    </Text>
  )
}
