import { Grid, Button, Text } from "@chakra-ui/react";

import { FiBookOpen, FiShare } from 'react-icons/fi';
import { RiHeadphoneFill } from 'react-icons/ri';

export function ActionFooter() {
  return (
    <Grid
      bgColor="white.100"
      minH="59"
      px="3"
      py="2"
      templateColumns="repeat(3, 1fr)"
      gap="2"
      pos="fixed"
      bottom="50"
      borderRadius="2"
      boxShadow="3px 3px 23px rgba(107, 103, 70, 0.125901)"
    >
      <Button
        bgColor="transparent"
        leftIcon={<FiBookOpen color="#CFCBD2" size="20"/>}
      >
        <Text
          as="span"
          color="gray.900"
          fontSize="14"
          fontWeight="semibold"
        >
          Read
        </Text>
      </Button>
      <Button
        bgColor="transparent"
        leftIcon={<RiHeadphoneFill color="#CFCBD2" size="20"/>}
      >
        <Text
          as="span"
          color="gray.900"
          fontSize="14"
          fontWeight="semibold"
        >
          Listen
        </Text>
      </Button>
      <Button
        bgColor="transparent"
        leftIcon={<FiShare color="#CFCBD2" size="20"/>}
      >
        <Text
          as="span"
          color="gray.900"
          fontSize="14"
          fontWeight="semibold"
        >
          Share
        </Text>
      </Button>
    </Grid>
  );
}
