/* Dynamic page heading that changes based on active filters. Prop is a 
GameQuery object. If there is a selection for platform and/or genre, that
information will be concatenated onto the header. If there are no such
selections, the header will simply show "Games". */

import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

/* Builds a heading based on platform/genre selections, then returns a 
Heading component. */
const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
