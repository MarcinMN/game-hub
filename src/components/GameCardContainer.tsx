/* A Box that holds a GameCard component.  Prop is "children" of
type ReactNode. Since GameGrid has a GameCardContainer that has a
GameCard within it, GameCard is the "child" here. Returns a Box
component that contains a GameCard. */

import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
