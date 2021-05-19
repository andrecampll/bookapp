import { Grid } from "@chakra-ui/react";
import { Card } from "./Card";

export function CardSlider() {
  return (
    <Grid
      templateColumns={[
        "repeat(5, 272px)",
        "repeat(6, 350px)",
        "repeat(6, 450px)"
      ]}
      gap={["5", "5"]}
      overflowX="auto"
      pl={["5", "10"]}
      sx={{
        "&": {
          // scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch'
        },
      }}
    >
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  );
}
