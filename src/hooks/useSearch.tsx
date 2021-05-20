import { createContext, ReactNode, useContext, useState } from "react";

import { Book } from "./useBooks";

import { apiClient } from "../services/apiClient";
import { sliceTitles } from "../utils/sliceTitles";

type SearchProviderProps = {
  children: ReactNode;
}

type SearchContextDTO = {
  searchBooks: Book[];
  search: string | string[];
  createSearch: (searchInput: string | string[]) => Promise<void>;
}

const SearchContext = createContext({} as SearchContextDTO);

export function SearchProvider({ children }: SearchProviderProps) {
  const [ search, setSearch ] = useState<string | string[]>('');
  const [ books, setBooks ] = useState<Book[]>([]);

  async function createSearch(searchInput: string | string[]) {
    setSearch(searchInput);

    const { data } = await apiClient(`/volumes?q=${searchInput}`);

    console.log(data);

    const booksData = data.items.map((book) => ({
      id: book.id,
      title: sliceTitles(book.volumeInfo.title),
      authors: book.volumeInfo.authors,
      image: book.volumeInfo.imageLinks?.thumbnail,
    }));

    setBooks(booksData);
  }

  return (
    <SearchContext.Provider
      value={{
        search,
        createSearch,
        searchBooks: books
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);

  return context;
}
