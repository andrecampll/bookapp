import { ChakraProvider } from "@chakra-ui/react";
import { BooksProvider } from "../hooks/useBooks";

import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <BooksProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </BooksProvider>
  );
}

export default MyApp
