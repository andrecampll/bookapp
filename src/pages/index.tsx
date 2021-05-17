import { Container, Heading, Text } from "@chakra-ui/react";

import { Input } from "../components/Input";

export default function Home() {
  return (
    <Container py="8" px="5">
      <Input />

      <Heading display="flex" mt="30">
        Hi, <Text color="pink.500">&nbsp;Mehmed Al Fatih</Text>&nbsp;👋
      </Heading>
    </Container>
  )
}
