import { Container } from "@chakra-ui/react";

import { HeaderContent } from '../../components/HeaderContent';
import { ActionFooter } from '../../components/ActionFooter';
import { Content } from "../../components/BookDetails/Content";

export default function Home() {
  return (
    <>
      <title>BookApp - Hooked</title>

      <HeaderContent />

      <Container pt="16" px="5">
        <Content />

        <ActionFooter />
      </Container>
    </>
  )
}
