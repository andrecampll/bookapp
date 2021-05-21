import { Box, Heading, Text, Image } from "@chakra-ui/react";

import { useBooks } from "../hooks/useBooks";

import { Header } from "../components/Header";
import { DiscoverSection } from "../components/DiscoverSection";
import { ReadingSection } from "../components/ReadingSection";
import { ReviewsSection } from "../components/ReviewsSection";
import { Footer } from "../components/Footer";

export default function Home() {
  const { book } = useBooks();

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

      <Box
        w="100%"
        maxW="938px"
        m="0 auto"
        position="relative"
      >
        <Box
          position="absolute"
          zIndex="-1"
          display="flex"
          justifyContent="flex-end"
          w="100%"
        >
          <Image
            src="/svg/Oval.svg"
            transform="rotate(180deg)"
          />
        </Box>
      </Box>
      <DiscoverSection />
      { book.title && <ReadingSection /> }
      <ReviewsSection />

      <Footer />
    </>
  )
}
