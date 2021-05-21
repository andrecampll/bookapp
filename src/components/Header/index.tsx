import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useSearch } from "../../hooks/useSearch";

import { Flex } from "@chakra-ui/react";

import { Logo } from "./Logo";
import { Input } from "./Input";
import { Nav } from "./Nav";

type SearchFormData = {
  search: string;
};

const searchFormSchema = yup.object().shape({
  search: yup.string().required(),
});

export function Header() {
  const router = useRouter();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(searchFormSchema),
  });

  const { createSearch } = useSearch();

  const handleSearch: SubmitHandler<SearchFormData> = async ({ search }) => {
    // await new Promise(resolve => setTimeout(resolve, 2000));

    await createSearch(search);

    router.push('/search');
  }

  return (
    <Flex
      as="form"
      align="center"
      w="100%"
      onSubmit={handleSubmit(handleSearch)}
    >
      <Logo />
      <Input
        name="search"
        placeholder="Search Book"
        error={formState.errors.search}
        {...register('search')}
      />
      <Nav />
    </Flex>
  );
}
