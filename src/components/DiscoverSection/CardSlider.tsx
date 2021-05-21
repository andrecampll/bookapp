import { Grid } from "@chakra-ui/react";
import { motion } from "framer-motion";
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
          WebkitOverflowScrolling: 'touch',
        },
        "&::-webkit-scrollbar": {
          display: 'none',
        },
      }}
    >
      {
        books.map((book, index) => (
          <motion.div
          >
            <Link key={index} href={`detail/${book.id}`}>
              <a>
                <Card {...book} />
              </a>
            </Link>
          </motion.div>
        ))
      }
    </Grid>
  );
}
