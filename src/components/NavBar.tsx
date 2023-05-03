/* A navigation bar component that contains a logo, a search box, and a switch for 
dark mode. Note that the search text is being passed from SearchInput, through
NavBar, and then up to App.tsx so the searchText can be added to gameQuery.  */

import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

/* searchText from SearchInput which is passed to App.tsx */
interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
