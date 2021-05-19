import { Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { apiClient } from "../../services/apiClient";
import { sliceTitles } from "../../utils/sliceTitles";

import { Card } from "./Card";

type Book = {
  title: string;
  authors: string[];
  image: string;
};

export function CardSlider() {
  const [ books, setBooks ] = useState<Book[]>([]);

  useEffect(() => {
    async function loadBooks() {
      const { data } = await apiClient.get('volumes?q=naruto');

      const booksData = data.items.map((book) => ({
        title: sliceTitles(book.volumeInfo.title),
        authors: book.volumeInfo.authors,
        image: book.volumeInfo.imageLinks?.thumbnail,
      }));

      setBooks(booksData);
    }

    loadBooks();
  }, []);

  return (
    <Grid
      templateColumns={[
        "repeat(10, 272px)",
        "repeat(10, 350px)",
        "repeat(10, 450px)"
      ]}
      gap={["5", "5"]}
      overflowX="auto"
      pl={["5", "10"]}
      sx={{
        "&": {
          WebkitOverflowScrolling: 'touch'
        },
      }}
    >
      {
        books.map((book, index) => (
          <Card {...book} key={index} />
        ))
      }
    </Grid>
  );
}
