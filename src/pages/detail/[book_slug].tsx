import { Container, Heading, Box, Text } from "@chakra-ui/react";

import { HeaderContent } from '../../components/HeaderContent';
import { ActionFooter } from '../../components/ActionFooter';

export default function Home() {
  return (
    <>
      <title>BookApp - Hooked</title>

      <HeaderContent />

      <Container pt="16" px="5">
        <Heading fontWeight="normal" fontSize="24">
          <strong>Hooked</strong> : How to Build Habid-Forming Products
        </Heading>
        <Heading mt="2" as="h3" fontWeight="normal" fontSize="16" color="pink.500">
          Nir Eyal
        </Heading>

        <Box mt="2">
          <Text fontSize="16" mb="6" color="gray.500">
            Why do some products capture widespread attention while others flop?
          </Text>
          <Text fontSize="16" mb="6" color="gray.500">
            Why do some products capture widespread attention while others flop?
          </Text>
          <Text fontSize="16" mb="6" color="gray.500">
            Why do some products capture widespread attention while others flop?
          </Text>
          <Text fontSize="16" mb="6" color="gray.500">
            Why do some products capture widespread attention while others flop?
          </Text>
          <Text fontSize="16" mb="6" color="gray.500">
            Why do some products capture widespread attention while others flop?
          </Text>
          <Text fontSize="16" mb="6" color="gray.500">
            Why do some products capture widespread attention while others flop?
          </Text>
          <Text fontSize="16" mb="6" color="gray.500">
            Why do some products capture widespread attention while others flop?
          </Text>
          <Text fontSize="16" mb="6" color="gray.500">
            Why do some products capture widespread attention while others flop?
          </Text>
        </Box>

        <ActionFooter />
      </Container>
    </>
  )
}
