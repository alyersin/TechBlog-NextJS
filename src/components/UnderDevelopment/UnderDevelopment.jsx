import React from "react";
import { Box, Text, VStack, Icon } from "@chakra-ui/react";
import { MdConstruction } from "react-icons/fa";

export default function UnderDevelopment() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgGradient="linear(to-r, gray.100, gray.300)"
      textAlign="center"
      p={6}
    >
      <VStack spacing={6}>
        <Icon as={MdConstruction} boxSize={16} color="gray.600" />
        <Text fontSize="2xl" fontWeight="bold" color="gray.700">
          This Page is Under Development
        </Text>
      </VStack>
    </Box>
  );
}
