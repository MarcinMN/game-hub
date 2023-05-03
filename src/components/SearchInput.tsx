/* Search Input box for searching games by title. */

import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

/* Prop is a function that takes the searchText from the search
field. */
interface Props {
  onSearch: (searchText: string) => void;
}

/* Ref hook used since this is a simple form with one input. References an 
HTMLInputElement. Note that ref is references in the Input tag below. */
const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  /* InputGroup is used to include the BsSearch icon (InputLeftElement) 
  in the search field. Form element works using an event via onSubmit.
  preventDefault keeps the form from being posted to the server. Form width
  was set in index.css. When a search term is submitted, the text is sent to
  onSearch, which is used to generate the SearchInput  */
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
