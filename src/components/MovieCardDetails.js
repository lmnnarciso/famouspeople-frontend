import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  Badge,
  Flex,
  List,
  ListIcon,
  ListItem,
  Text
} from "@chakra-ui/core";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieCardDetails = props => {
  let [movieCast, setMovieCast] = useState([]);
  let [movieDetail, setMovieDetail] = useState({
    known_for_department: "Acting",
    profile_path: "/kc3M04QQAuZ9woUvH3Ju5T7ZqG5.jpg",
    id: "0000",
    gender: 2,
    name: "Fight Club",
    popularity: 10,
    known_for: []
  });
  let params = useParams();
  console.log("movie cast props", params.id);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=758823861978bf8eb5c5684636768527`
      )
      .then(res => {
        console.log(res);
        setMovieCast(res.data.cast);
      });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=758823861978bf8eb5c5684636768527`
      )
      .then(res => {
        console.log(res);
        setMovieDetail(res.data);
      });
  }, []);

  console.log(
    `${process.env.REACT_APP_API_URL_IMG}${movieDetail.profile_path}`
  );
  return (
    <Flex>
      <Box maxW="500px" ml="2" borderWidth="1px" rounded="lg" overflow="hidden">
        <Image
          src={`${process.env.REACT_APP_API_URL_IMG}${movieDetail.poster_path}`}
        />
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {/* <Badge rounded="full" px="2" variantColor="teal">
              {known_for_department}
            </Badge> */}
            <Box
              color="gray.900"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xl"
              textTransform="uppercase"
              ml="2"
            >
              {movieDetail.title}
            </Box>
          </Box>

          {/* <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {name}
          </Box> */}
        </Box>
      </Box>
      <Box
        minW="500px"
        borderWidth="1px"
        rounded="lg"
        overflow="hidden"
        mr="10"
      >
        <Box ml="2">
          {/* {known_for.map(movie => (
            <Box>
              <Image
                maxW="150px"
                src={`${process.env.REACT_APP_API_URL_IMG}${movie.poster_path}`}
              />
            </Box>
          ))} */}
          <Box>
            <Text fontSize="36px">Casts</Text>
            {/* <Text>as {cast.character}</Text> */}
          </Box>
          <List spacing={3}>
            {movieCast.slice(0, 10).map(cast => (
              <ListItem key={cast.cast_id}>
                {/* <ListIcon icon="check-circle" color="green.500" /> */}
                <Box>
                  <Text fontSize="24px">{cast.name}</Text>
                  <Text>as {cast.character}</Text>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Flex>
  );
};

export default MovieCardDetails;
