import { Heading, Box } from "@chakra-ui/react";

import { CardSlider } from "./CardSlider";

export function DiscoverSection() {
  return (
    <>
      <Heading ml="5" fontSize="18" fontWeight="normal">Discover new book</Heading>

      <Box>
        <CardSlider />
      </Box>
    </>
  );
}
