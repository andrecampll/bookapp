import { useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Box, Container } from "@chakra-ui/react";

import { Book, useBooks } from '../../hooks/useBooks';

import { HeaderContent } from '../../components/BookDetails/HeaderContent';
import { ActionFooter } from '../../components/BookDetails/ActionFooter';
import { Content } from "../../components/BookDetails/Content";
import { apiClient } from '../../services/apiClient';

type DetailProps = {
  book: Book;
}

export default function Detail({ book }: DetailProps) {
  const { setSelectedBook } = useBooks();

  useEffect(() => {
    async function loadSelectedBook() {
      await setSelectedBook(book);
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

export const getStaticPaths: GetStaticPaths = async () => {

  const paths = [
    {
      params: { book_slug: 'Y_uCtAEACAAJ' }
    }
  ]

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { book_slug } = params;

  const { data } = await apiClient.get(`volumes/${book_slug}`);

  const book = {
    id: data.id,
    title: data.volumeInfo.title,
    authors: data.volumeInfo.authors.reduce((currentAuthor, nextAuthor) => (
      `${currentAuthor}, ${nextAuthor}`
    )),
    image: data.volumeInfo.imageLinks?.thumbnail ?? 'https://books.google.com.br/googlebooks/images/no_cover_thumb.gif',
    description: data.volumeInfo.description,
  };

  return {
    props: {
      book
    }
  }
}
