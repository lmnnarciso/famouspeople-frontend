import React from "react";
import { useColorMode, Button, Box, useTheme } from "@chakra-ui/core";

function Test(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();
  const bgColor = { light: "red.500", dark: "red.200" };
  const color = { light: "white", dark: "gray.800" };
  //   console.log("themeeeee", theme);
  console.log("props.theme", theme);
  return (
    <>
      <Box flex="1" {...{ bg: "tomato", color: "black" }} mb={4}>
        This box's style will change based on the color mode.
      </Box>
      <Button size="sm" onClick={toggleColorMode}>
        Toggle Mode
      </Button>
    </>
  );
}

export default Test;
