import { Box, Heading, Text } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { DiscoverSection } from "../components/DiscoverSection";
import { ReadingSection } from "../components/ReadingSection";
import { ReviewsSection } from "../components/ReviewsSection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <title>BookApp - Home</title>

      <Box
        w="100%"
        pt="8"
        px={["5", "40px"]}
        m={["0 auto", "0", "0 auto"]}
        maxW="1018"
      >
        <Header />

        <Heading fontSize="24" display="flex" my="30" fontWeight="normal">
          Hi,
          <Text color="pink.500" fontWeight="semibold">
            &nbsp;Mehmed Al Fatih
          </Text>&nbsp;👋
        </Heading>
      </Box>

      <DiscoverSection />
      <ReadingSection />

      <ReviewsSection />

      <Footer />
    </>
  )
}
