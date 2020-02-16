import React from "react";
import { Box, Image, Badge, Flex, Text, Stack } from "@chakra-ui/core";

import { Link } from "react-router-dom";
const ProfileCardDetails = props => {
  let {
    known_for_department = "Acting",
    profile_path = "/kc3M04QQAuZ9woUvH3Ju5T7ZqG5.jpg",
    id = 287,
    gender = 2,
    name = "Brad Pitt (Default)",
    popularity = 10,
    known_for = [
      {
        release_date: "1999-10-15",
        id: 550,
        vote_count: 18129,
        video: false,
        media_type: "movie",
        vote_average: 8.4,
        title: "Fight Club",
        genre_ids: [18],
        original_title: "Fight Club",
        original_language: "en",
        adult: false,
        backdrop_path: "/mMZRKb3NVo5ZeSPEIaNW9buLWQ0.jpg",
        overview:
          'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
        poster_path: "/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg"
      },
      {
        poster_path: "/ai0LXkzVM3hMjDhvFdKMUemoBe.jpg",
        id: 16869,
        vote_count: 13678,
        video: false,
        media_type: "movie",
        adult: false,
        backdrop_path: "/8pEnePgGyfUqj8Qa6d91OZQ6Aih.jpg",
        genre_ids: [18, 28, 53, 10752],
        original_title: "Inglourious Basterds",
        original_language: "en",
        title: "Inglourious Basterds",
        vote_average: 8.1,
        overview:
          'In Nazi-occupied France during World War II, a group of Jewish-American soldiers known as "The Basterds" are chosen specifically to spread fear throughout the Third Reich by scalping and brutally killing Nazis. The Basterds, lead by Lt. Aldo Raine soon cross paths with a French-Jewish teenage girl who runs a movie theater in Paris which is targeted by the soldiers.',
        release_date: "2009-08-18"
      },
      {
        poster_path: "/8zw8IL4zEPjkh8Aysdcd0FwGMb0.jpg",
        id: 807,
        vote_count: 12063,
        video: false,
        media_type: "movie",
        adult: false,
        backdrop_path: "/A0WKbRIojF9DUWG4XLCmg5JK6I5.jpg",
        genre_ids: [80, 9648, 53],
        original_title: "Se7en",
        original_language: "en",
        title: "Se7en",
        vote_average: 8.3,
        overview:
          'Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the "seven deadly sins" in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. Sommerset researches each sin in an effort to get inside the killer\'s mind, while his novice partner, Mills, scoffs at his efforts to unravel the case.',
        release_date: "1995-09-22"
      }
    ]
  } = props;
  console.log(`${process.env.REACT_APP_API_URL_IMG}${profile_path}`);
  console.log("know_for", known_for);
  return (
    <Flex borderWidth="1px" rounded="lg" mr="4" mb="8">
      <Box ml="2" rounded="lg" overflow="hidden">
        <Image
          maxH="500px"
          src={`${process.env.REACT_APP_API_URL_IMG}${profile_path}`}
          alt={`${name} image`}
        />
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge rounded="full" px="2" variantColor="teal">
              {known_for_department}
            </Badge>
            <Box
              variantColor="teal"
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {id}
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {name}
          </Box>

          <Box d="flex" mt="2" alignItems="center">
            <Box
              // isTruncated
              maxW="250px"
              maxH="250px"
              as="span"
              ml="2"
              color="gray.600"
              fontSize="sm"
            >
              <Text maxW>{props.biography}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        // minW="500px"
        // borderWidth="1px"
        // rounded="lg"
        overflow="hidden"
        mr="10"
      >
        <Box ml="2">
          <Stack>
            {known_for.map(movie => (
              <Flex pb="10">
                <Box minW="250px">
                  <Link to={`/movie/${movie.id}`}>
                    <Image
                      rounded="lg"
                      maxW="150px"
                      src={`${process.env.REACT_APP_API_URL_IMG}${movie.poster_path}`}
                    />
                    <Link></Link>
                  </Link>
                </Box>
                <Box ml="2" textAlign="center">
                  <Link to={`/movie/${movie.id}`}>
                    <Text color="blue.700" fontWeight="800" fontSize="md">
                      {movie.title}
                    </Text>
                  </Link>
                  <Text maxW="250px" fontWeight="400" fontSize="sm">
                    {movie.overview}
                  </Text>
                </Box>
              </Flex>
            ))}
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
};

export default ProfileCardDetails;
