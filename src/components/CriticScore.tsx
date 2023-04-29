/* Display the critic score in the GameCard. Returns Badge component showing the critic score.
Prop is score, which is a number value. Score value is used to determine the colorScheme of the
score displayed on the screen.  */

import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
