/* Switch for dark/light mode toggle. Returns HStack component containing a Switch
and Text label. When Switch isChecked, page displays dark mode. Any time the Switch
toggles, toggleColorMode is used to flip between light and dark mode.  */

import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
