import { Grid, Button, Text } from "@chakra-ui/react";

import { FiHome, FiBook, FiUser } from 'react-icons/fi';

export function Nav() {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap={["2", "2"]}
      fontSize={["", "4xl"]}
      display={["none", "none", "flex"]}
      ml="5"
      w="64"
    >
      <Button
        bgColor="transparent"
        leftIcon={<FiBook color="#CFCBD2" size="20"/>}
        sx={{
          "& > span": {
            marginRight: ["auto", "0", "0", "1"],
          }
        }}
      >
        <Text
          as="span"
          color="gray.900"
          fontSize="14"
          fontWeight="semibold"
          display={["none", "none", "none", "flex"]}
        >
          Library
        </Text>
      </Button>
      <Button
        bgColor="transparent"
        leftIcon={<FiUser color="#CFCBD2" size="20"/>}
        sx={{
          "& > span": {
            marginRight: ["auto", "0", "0", "1"],
          }
        }}
      >
        <Text
          as="span"
          color="gray.900"
          fontSize="14"
          fontWeight="semibold"
          display={["none", "none", "none", "flex"]}
        >
          Profile
        </Text>
      </Button>
    </Grid>
  )
}
