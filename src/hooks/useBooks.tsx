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
  setSelectedBook: (book: Book) => Promise<void>;
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

  async function setSelectedBook(book: Book) {
    setBook(book);
  };

  return (
    <BooksContext.Provider value={{ books, book, setSelectedBook }}>
      {children}
    </BooksContext.Provider>
  );
}

export function useBooks() {
  const context = useContext(BooksContext);

  return context;
}
