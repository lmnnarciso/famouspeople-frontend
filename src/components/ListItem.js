import React from "react";
import { Box, Flex, Avatar, Heading, Text } from "@chakra-ui/core";
const ListItem = props => {
  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      cursor="pointer"
      onClick={() => console.log("test")}
    >
      <Flex>
        <Box mr="8">
          <Avatar
            size="xl"
            name="Christian Nwamba"
            src="https://bit.ly/code-beast"
          />
        </Box>
        <Box>
          <Heading fontSize="xl">List Title</Heading>
          <Text mt={4}>List Description</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default ListItem;
