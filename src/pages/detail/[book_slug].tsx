import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Container } from "@chakra-ui/react";

import { useBooks } from '../../hooks/useBooks';

import { HeaderContent } from '../../components/BookDetails/HeaderContent';
import { ActionFooter } from '../../components/BookDetails/ActionFooter';
import { Content } from "../../components/BookDetails/Content";


export default function Detail() {
  const { book_slug } = useRouter().query;

  const { readBook, book } = useBooks();

  useEffect(() => {
    async function loadSelectedBook() {
      await readBook(book_slug);
    }

    loadSelectedBook();
  }, []);

  return (
    <>
      <title>BookApp - {book.title}</title>

      <Box bgColor="sand.500" w="100%" >
        <HeaderContent bookImage={book.image} />
      </Box>

      <Container maxW={['auto', '800px']} pt={["16", "36"]} px="5">
        <Content {...book} />

        <ActionFooter />
      </Container>
    </>
  )
}
