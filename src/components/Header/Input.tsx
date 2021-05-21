import { forwardRef, ForwardRefRenderFunction, useState } from 'react';
import { FieldError } from 'react-hook-form';
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup,
  InputLeftElement,
  FormControl,
} from '@chakra-ui/react';

import { VscSearch } from 'react-icons/vsc';

type InputProps = {
  name: string;
  placeholder?: string;
  error: FieldError;
} & ChakraInputProps;

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
  name,
  placeholder,
  error,
  ...props
},
  ref
) => {
  return (
    <FormControl isInvalid={!!error}
      w="100%"
      sx={{
        "& > form": {
          w: '100%'
        }
      }}
    >
      <InputGroup w="100%">
        <InputLeftElement
          pointerEvents="none"
          children={<VscSearch color="gray" />}
        />
        <ChakraInput
          id={name}
          name={name}
          borderRadius="10"
          bgColor="white.100"
          border="0"
          color="gray.900"
          placeholder={placeholder}
          ref={ref}
          errorBorderColor="red.500"
          {...props}
        />
      </InputGroup>
    </FormControl>
  );
}

export const Input = forwardRef(InputBase);
