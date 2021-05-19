import { Box, Container } from "@chakra-ui/react";

import { HeaderContent } from '../../components/BookDetails/HeaderContent';
import { ActionFooter } from '../../components/BookDetails/ActionFooter';
import { Content } from "../../components/BookDetails/Content";

export default function Home() {
  return (
    <>
      <title>BookApp - Hooked</title>

      <Box bgColor="sand.500" w="100%" >
        <HeaderContent />
      </Box>

      <Container maxW={['auto', '800px']} pt={["16", "36"]} px="5">
        <Content />

        <ActionFooter />
      </Container>
    </>
  )
}
