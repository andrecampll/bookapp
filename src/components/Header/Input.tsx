import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  Box,
} from '@chakra-ui/react';

import { VscSearch } from 'react-icons/vsc';

import { useSearch } from '../../hooks/useSearch';

export function Input() {
  const router = useRouter();
  const { search: globalSearch, createSearch } = useSearch();

  const [ search, setSearch ] = useState(globalSearch as string);

  return (
    <Box
      w="100%"
      sx={{
        "& > form": {
          w: '100%'
        }
      }}
    >
      <form onSubmit={async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        createSearch(search);

        router.push('/search', {
          search
        });
      }}>
        <InputGroup w="100%">
          <InputLeftElement
            pointerEvents="none"
            children={<VscSearch color="gray" />}
          />
          <ChakraInput
            borderRadius="10"
            bgColor="white.100"
            border="0"
            color="gray.900"
            placeholder="Search book"
            value={search}
            onChange={event => setSearch(event.target.value)}
          />
        </InputGroup>
      </form>
    </Box>
  );
}
