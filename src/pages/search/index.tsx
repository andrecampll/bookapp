import { Box, Text, Grid, Image, Heading } from "@chakra-ui/react";

import { useSearch } from "../../hooks/useSearch";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export default function Search() {
  const { searchBooks } = useSearch();

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
        maxW="999"
      >
        <Grid
          templateColumns={[
            "repeat(3, 1fr)",
            "repeat(3, 1fr)",
            "repeat(6, 1fr)"
          ]}
          gap="10px"
        >
          {
            searchBooks.map((book) => (
              <Box key={book.id}>
                <Image
                  src={book.image}
                  borderRadius="5px"
                />
                <Box mt="2">
                  <Heading fontSize="12">{book.title}</Heading>
                  <Text fontSize="10" fontWeight="bold">
                    By {book.authors}
                  </Text>
                </Box>
              </Box>
            ))
          }
        </Grid>
      </Box>

      <Footer />
    </>
  )
}
