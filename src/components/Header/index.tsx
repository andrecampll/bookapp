import { Flex } from "@chakra-ui/react";

import { Logo } from "./Logo";
import { Input } from "./Input";
import { Nav } from "./Nav";

export function Header() {
  return (
    <Flex align="center" w="100%">
      <Logo />
      <Input />
      <Nav />
    </Flex>
  );
}
