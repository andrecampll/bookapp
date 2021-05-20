import { useEffect, useState } from "react";
import { Heading, Flex, Link } from "@chakra-ui/react";

import { apiClient } from "../../services/apiClient";

import { Card } from "./Card";

type Book = {
  id: string;
  title: string;
  authors: string[];
  image: string;
};

export function ReadingSection() {
  const [ book, setBook ] = useState<Book>({} as Book);

  useEffect(() => {
    async function loadBook() {
      const { data } = await apiClient.get('volumes?q=naruto');

      const bookData = {
        id: data.items[0].id,
        title: data.items[0].volumeInfo.title,
        authors: data.items[0].volumeInfo.authors.reduce((currentAuthor, nextAuthor) => (
          `${currentAuthor}, ${nextAuthor}`
        )),
        image: data.items[0].volumeInfo.imageLinks?.thumbnail,
      };

      setBook(bookData);
    }

    loadBook();
  }, []);

  return (
    <>
      <Flex
        justify="space-between"
        align="center"
        px={["5", "10"]}
        m={["0 auto", "0", "0 auto"]}
        maxW="1018"
      >
        <Heading fontSize="18" fontWeight="normal">
          Currently Reading
        </Heading>
        <Link color="blue.400">All</Link>
      </Flex>

      <Flex maxW="1018" m="0 auto">
        <Card {...book} />
      </Flex>
    </>
  );
}
