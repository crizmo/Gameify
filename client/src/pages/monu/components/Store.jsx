import React from "react";
import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import GameCarousel from "./GameCarousel";
import AccCarousel from "./AccCarousel";
const Store = () => {
  return (
    <Box bg="#151515" pt="10" pb="20" w="full">
      <Box w="80%" margin={"auto"} mb="20">
        <HStack spacing={["50", "20", "260", "460", "610"]}>
          <Box>
            <Text color="#f45f02" mb="5" fontWeight={"500"}>
              Discover
            </Text>
            <Heading color="#fff" fontSize={[20, 17, 20, 25, 30]} mb="10">
              New games
            </Heading>
          </Box>
          <button className="oggu">Games</button>
        </HStack>
      </Box>
      <GameCarousel />

      <Box w="80%" margin={"auto"} mb="20">
        <HStack spacing={["50", "20", "260", "460", "610"]}>
          <Box>
            <Text color="#f45f02" mb="5" fontWeight={"500"}>
              Explore
            </Text>
            <Heading color="#fff" fontSize={[20, 17, 20, 25, 30]} mb="10">
              Various Accessories
            </Heading>
          </Box>
          <button className="oggu">Accessories</button>
        </HStack>
      </Box>
      <AccCarousel />
    </Box>
  );
};

export default Store;
