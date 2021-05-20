import { ChakraProvider } from "@chakra-ui/react";
import { BooksProvider } from "../hooks/useBooks";
import { SearchProvider } from "../hooks/useSearch";

import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <BooksProvider>
      <SearchProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </SearchProvider>
    </BooksProvider>
  );
}

export default MyApp
