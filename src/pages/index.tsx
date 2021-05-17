import { Container, Heading, Text } from "@chakra-ui/react";

import { Input } from "../components/Input";
import { DiscoverSection } from "../components/DiscoverSection";
import { ReadingSection } from "../components/ReadingSection";

export default function Home() {
  return (
    <>
      <Container pt="8" px="5">
        <Input />

        <Heading fontSize="24" display="flex" my="30" fontWeight="normal">
          Hi,
          <Text color="pink.500" fontWeight="semibold">
            &nbsp;Mehmed Al Fatih
          </Text>&nbsp;👋
        </Heading>
      </Container>

      <DiscoverSection />
      <ReadingSection />
    </>
  )
}
