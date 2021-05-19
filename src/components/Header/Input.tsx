import {
  Input as ChakraInput,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react';

import { VscSearch } from 'react-icons/vsc';

export function Input() {
  return (
    <InputGroup w="100%">
      <InputLeftElement
        pointerEvents="none"
        children={<VscSearch color="gray" />}
      />
      <ChakraInput
        borderRadius="10"
        placeholder="Search book"
        bgColor="white.100"
        border="0"
        color="gray.900"
      />
    </InputGroup>
  );
}