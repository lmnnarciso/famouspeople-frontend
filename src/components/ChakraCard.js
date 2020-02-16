import React from "react";
import { Box, Image, Badge } from "@chakra-ui/core";

const ChakraCard = props => {
  //   console.log(data);
  console.log(props);
  let {
    known_for_department,
    profile_path,
    id,
    gender,
    name,
    popularity
  } = props;
  console.log(`${process.env.REACT_APP_API_URL_IMG}${profile_path}`);
  return (
    <Box maxW="250px" ml="2" borderWidth="1px" rounded="lg" overflow="hidden">
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

        {/* <Box>
          {formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box> */}

        <Box d="flex" mt="2" alignItems="center">
          {/* {Array(5)
            .fill("")
            .map((_, i) => (
              <Icon
                name="star"
                key={i}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            ))} */}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {popularity} popularity
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChakraCard;
