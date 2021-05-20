import { Box, Text, Grid, Image, Heading } from "@chakra-ui/react";

import { useBooks } from "../../hooks/useBooks";

import { Header } from "../../components/Header";
import { DiscoverSection } from "../../components/DiscoverSection";
import { ReadingSection } from "../../components/ReadingSection";
import { ReviewsSection } from "../../components/ReviewsSection";
import { Footer } from "../../components/Footer";

export default function Home() {
  const { book } = useBooks();

  return (
    <>
      <title>BookApp - Search</title>

      <Box
        w="100%"
        pt="8"
        px={["5", "40px"]}
        m={["0 auto", "0", "0 auto"]}
        maxW="1018"
      >
        <Header />
      </Box>

      <Box
        // mx="8"
        mt="10"
        mx="auto"
        mb="24"
        px={["5","10"]}
        maxW="937"
      >
        <Grid
          templateColumns={[
            "repeat(3, 1fr)",
            "repeat(6, 1fr)",
            "repeat(8, 1fr)"
          ]}
          gap="10px"
        >
          <Box

          >
            <Image
              src="http://books.google.com/books/content?id=Y_uCtAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
              borderRadius="5px"
            />
            <Box mt="2">
              <Heading fontSize="12">Naruto</Heading>
              <Text fontSize="10" fontWeight="bold">
                By Masashi Kishimoto
              </Text>
            </Box>
          </Box>
          <Box

          >
            <Image
              src="http://books.google.com/books/content?id=Y_uCtAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
              borderRadius="5px"
            />
            <Box mt="2">
              <Heading fontSize="12">Naruto</Heading>
              <Text fontSize="10" fontWeight="bold">
                By Masashi Kishimoto
              </Text>
            </Box>
          </Box>
          <Box

          >
            <Image
              src="http://books.google.com/books/content?id=Y_uCtAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
              borderRadius="5px"
            />
            <Box mt="2">
              <Heading fontSize="12">Naruto</Heading>
              <Text fontSize="10" fontWeight="bold">
                By Masashi Kishimoto
              </Text>
            </Box>
          </Box>
          <Box

          >
            <Image
              src="http://books.google.com/books/content?id=Y_uCtAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
              borderRadius="5px"
            />
            <Box mt="2">
              <Heading fontSize="12">Naruto</Heading>
              <Text fontSize="10" fontWeight="bold">
                By Masashi Kishimoto
              </Text>
            </Box>
          </Box>
          <Box

          >
            <Image
              src="http://books.google.com/books/content?id=Y_uCtAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
              borderRadius="5px"
            />
            <Box mt="2">
              <Heading fontSize="12">Naruto</Heading>
              <Text fontSize="10" fontWeight="bold">
                By Masashi Kishimoto
              </Text>
            </Box>
          </Box>
          <Box

          >
            <Image
              src="http://books.google.com/books/content?id=Y_uCtAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
              borderRadius="5px"
            />
            <Box mt="2">
              <Heading fontSize="12">Naruto</Heading>
              <Text fontSize="10" fontWeight="bold">
                By Masashi Kishimoto
              </Text>
            </Box>
          </Box>
          <Box

          >
            <Image
              src="http://books.google.com/books/content?id=Y_uCtAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
              borderRadius="5px"
            />
            <Box mt="2">
              <Heading fontSize="12">Naruto</Heading>
              <Text fontSize="10" fontWeight="bold">
                By Masashi Kishimoto
              </Text>
            </Box>
          </Box>
          <Box

          >
            <Image
              src="http://books.google.com/books/content?id=Y_uCtAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
              borderRadius="5px"
            />
            <Box mt="2">
              <Heading fontSize="12">Naruto</Heading>
              <Text fontSize="10" fontWeight="bold">
                By Masashi Kishimoto
              </Text>
            </Box>
          </Box>
          <Box

          >
            <Image
              src="http://books.google.com/books/content?id=Y_uCtAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
              borderRadius="5px"
            />
            <Box mt="2">
              <Heading fontSize="12">Naruto</Heading>
              <Text fontSize="10" fontWeight="bold">
                By Masashi Kishimoto
              </Text>
            </Box>
          </Box>
        </Grid>
      </Box>

      <Footer />
    </>
  )
}
