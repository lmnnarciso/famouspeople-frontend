import React from "react";
import { Box, Image, Badge, Flex } from "@chakra-ui/core";

const ProfileCardDetails = props => {
  //   console.log(data);
  // console.log(props);
  let {
    known_for_department = "Acting",
    profile_path = "/kc3M04QQAuZ9woUvH3Ju5T7ZqG5.jpg",
    id = "0000",
    gender = 2,
    name = "Brad Pitt(Default)",
    popularity = 10,
    known_for
  } = props;
  console.log(`${process.env.REACT_APP_API_URL_IMG}${profile_path}`);
  return (
    <Flex>
      <Box maxW="500px" ml="2" borderWidth="1px" rounded="lg" overflow="hidden">
        <Image
          maxH="250px"
          src={`${process.env.REACT_APP_API_URL_IMG}${profile_path}`}
          alt={`${name} image`}
        />
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge rounded="full" px="2" variantColor="teal">
              {known_for_department}
            </Badge>
            <Box
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
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {popularity} popularity
            </Box>
          </Box>
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
          {known_for.map(movie => (
            <Box>
              <Image
                maxW="150px"
                src={`${process.env.REACT_APP_API_URL_IMG}${movie.poster_path}`}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Flex>
  );
};

export default ProfileCardDetails;
