import React, { useState } from "react";
import Select from "react-select";
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Avatar,
  theme
} from "@chakra-ui/core";

import ListItem from "../components/ListItem";
import ProfileCardDetails from "../components/ProfileCardDetails";
import Data from "../data.json";
const options = [
  { value: "actor-1", label: "Edward Norton" },
  { value: "actor-2", label: "Al Pacino" },
  { value: "actor-3", label: "Brad Pitt" }
];

function Home() {
  console.log("theeeeme", theme);
  return (
    <div>
      <Box mt="24">
        <Flex align="center" justify="center">
          <ProfileCardDetails {...Data.results[2]} />

          <Stack spacing={8} minW="600px">
            <Box maxW="720px" ml="10" mb="10" pt="2">
              <Select options={options} />
            </Box>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </Stack>
        </Flex>
      </Box>
    </div>
  );
}

export default Home;
