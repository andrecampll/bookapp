import { Grid } from "@chakra-ui/react";
import Link from "next/link";
import { useBooks } from "../../hooks/useBooks";

import { Card } from "./Card";

export function CardSlider() {
  const { books } = useBooks();

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
          <Link key={index} href={`detail/${book.id}`}>
            <a>
              <Card {...book} />
            </a>
          </Link>
        ))
      }
    </Grid>
  );
}
