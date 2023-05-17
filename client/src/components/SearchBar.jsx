import { Input, InputLeftElement, InputGroup, Icon } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export function SearchBar() {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<Icon as={SearchIcon} color="gray.300" />}
      />
      <Input type="text" placeholder="Search" />
    </InputGroup>
  );
}
