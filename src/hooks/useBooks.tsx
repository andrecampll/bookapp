import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { apiClient } from "../services/apiClient";
import { sliceTitles } from "../utils/sliceTitles";

export type Book = {
  id?: string;
  title: string;
  authors: string[];
  image: string;
  description?: string;
};

type BooksContextDTO = {
  book: Book;
  books: Book[];
  readBook: (bookId: string | string[]) => Promise<Book>;
}

type BooksProviderProps = {
  children: ReactNode;
}

const BooksContext = createContext({} as BooksContextDTO);

export function BooksProvider({ children }: BooksProviderProps) {
  const [ books, setBooks ] = useState<Book[]>([]);
  const [ book, setBook ] = useState<Book>({} as Book);

  useEffect(() => {
    apiClient.get('volumes?q=naruto')
      .then(response => {
        const booksData = response.data.items.map((book) => ({
          id: book.id,
          title: sliceTitles(book.volumeInfo.title),
          authors: book.volumeInfo.authors,
          image: book.volumeInfo.imageLinks?.thumbnail,
        }));

        setBooks(booksData);
      }
    );
  }, []);

  async function readBook(bookId: string | string[]) {
    const { data } = await apiClient.get(`volumes/${bookId}`);

    const bookData = {
      id: data.id,
      title: data.volumeInfo.title,
      authors: data.volumeInfo.authors.reduce((currentAuthor, nextAuthor) => (
        `${currentAuthor}, ${nextAuthor}`
      )),
      image: data.volumeInfo.imageLinks?.thumbnail,
      description: data.volumeInfo.description,
    };

    setBook(bookData);

    return book;
  };

  return (
    <BooksContext.Provider value={{ books, book, readBook }}>
      {children}
    </BooksContext.Provider>
  );
}

export function useBooks() {
  const context = useContext(BooksContext);

  return context;
}
