import { Box } from "@chakra-ui/react";
import { Card } from "./Card";

export function CardSlider() {
  return (
    <Box display="flex" overflowX="auto">
      <Card />
      <Card />
    </Box>
  );
}
