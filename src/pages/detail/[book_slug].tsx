import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Container } from "@chakra-ui/react";

import { apiClient } from '../../services/apiClient';

import { HeaderContent } from '../../components/BookDetails/HeaderContent';
import { ActionFooter } from '../../components/BookDetails/ActionFooter';
import { Content } from "../../components/BookDetails/Content";

type Book = {
  title: string;
  authors: string[];
  image: string;
  description: string;
};

export default function Detail() {
  const { book_slug } = useRouter().query;

  const [ book, setBook ] = useState<Book>({} as Book);

  useEffect(() => {
    async function loadBook() {
      const { data } = await apiClient.get(`volumes/${book_slug}`);

      const bookData = {
        title: data.volumeInfo.title,
        authors: data.volumeInfo.authors.reduce((currentAuthor, nextAuthor) => (
          `${currentAuthor}, ${nextAuthor}`
        )),
        image: data.volumeInfo.imageLinks?.thumbnail,
        description: data.volumeInfo.description,
      };

      setBook(bookData);
    }

    loadBook();
  }, []);

  console.log(book)

  return (
    <>
      <title>BookApp - Hooked</title>

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
