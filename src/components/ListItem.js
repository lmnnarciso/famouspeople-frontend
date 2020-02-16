import React from "react";
import { Box, Flex, Avatar, Heading, Text } from "@chakra-ui/core";
const ListItem = props => {
  console.log("list props", props);
  let { profile_path = "https://bit.ly/code-beast" } = props;
  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      cursor="pointer"
      onClick={() => props.onClick(props)}
      visibility={props.visibility}
      display={props.display}
    >
      <Flex>
        <Box mr="8">
          <Avatar
            size="xl"
            // name="Christian Nwamba"
            src={`${process.env.REACT_APP_API_URL_IMG}${profile_path}`}
          />
        </Box>
        <Box>
          <Heading fontSize="xl">{props.name}</Heading>
          <Text mt={4}>{props.known_for_department}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default ListItem;
