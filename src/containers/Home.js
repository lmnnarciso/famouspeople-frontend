import React, { useState, useEffect } from "react";
import Select from "react-select";
import {
  Box,
  Flex,
  Stack,
  useTheme,
  useColorMode,
  Button,
  Input
} from "@chakra-ui/core";

import ListItem from "../components/ListItem";
import ProfileCardDetails from "../components/ProfileCardDetails";
import axios from "axios";

const options = [
  { value: "actor-1", label: "Edward Norton" },
  { value: "actor-2", label: "Al Pacino" },
  { value: "actor-3", label: "Brad Pitt" }
];

function Home() {
  let theme = useTheme();
  let { colorMode, toggleColorMode } = useColorMode();
  let [selectedActorBio, setActorBio] = useState({});
  let [actorMovies, setActorMovies] = useState([]);
  let [personList, setPersonList] = useState([]);
  let [itemShow, setItemShow] = useState(5);
  let [searchQuery, setSearchQuery] = useState("a");
  // let mode = {
  //   ...{colorMode ?
  //   theme.colors.dark
  //   :
  //   null}
  // };
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/person/287?api_key=758823861978bf8eb5c5684636768527"
      )
      .then(res => {
        console.log(res);
        setActorBio(res.data);
      });
    axios
      .get(
        `https://api.themoviedb.org/3/search/person?api_key=758823861978bf8eb5c5684636768527&query=${searchQuery}`
      )
      .then(res => {
        console.log(res);
        setPersonList(res.data.results);
      });

    setItemShow(5);
  }, [searchQuery]);

  let onClickSelectActor = data => {
    console.log("data actor", data);
    setActorBio({ ...selectedActorBio, ...data });
  };

  console.log("selectedAcotr bio", selectedActorBio);
  return (
    <div>
      <Box mt="12" mb="24" maxHeight="30vh">
        <Flex align="center" justify="center" align="center">
          <ProfileCardDetails {...selectedActorBio} {...setActorMovies} />

          <Stack spacing={8} minW="600px">
            <Box flexGrow="1">
              <Input
                borderWidth="3px"
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
              />
            </Box>
            {personList.map((person, index) => {
              let rangeOf5 = 5;

              if (itemShow !== rangeOf5) {
                if (index >= itemShow - rangeOf5 && index <= itemShow - 1) {
                  return (
                    <ListItem
                      onClick={onClickSelectActor}
                      {...person}
                      visibility="visible"
                    />
                  );
                }
              } else {
                if (index <= itemShow - 1) {
                  return (
                    <ListItem
                      onClick={onClickSelectActor}
                      {...person}
                      visibility="visible"
                    />
                  );
                }
              }
              return <ListItem {...person} display={"none"} />;
            })}
            <Box alignContent="center">
              <Flex>
                <Button
                  disabled={itemShow - 5 <= 0 ? true : false}
                  flexGrow="1"
                  onClick={() => {
                    if (itemShow !== 5) {
                      setItemShow(itemShow - 5);
                    }
                  }}
                >
                  Prev
                </Button>
                <Button
                  disabled={itemShow >= personList.length ? true : false}
                  flexGrow="1"
                  onClick={() => {
                    setItemShow(itemShow + 5);
                  }}
                >
                  Next
                </Button>
              </Flex>
            </Box>
          </Stack>
        </Flex>
      </Box>
    </div>
  );
}

export default Home;
