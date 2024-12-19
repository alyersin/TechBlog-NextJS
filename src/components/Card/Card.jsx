import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";

export default function Card({
  title = "Default Title",
  description = "Default description",
  imageUrl,
  bgColor = "white",
  textColor = "black",
  border = "none",
  borderLeft = "none",
  borderRight = "none",
  borderTop = "none",
  width = "350px",
  height = "auto",
  mx = "auto",
  shadow = "md",
  borderRadius = "md",
  children,
}) {
  return (
    <Box
      bg={bgColor}
      color={textColor}
      width={width}
      height={height}
      mx={mx}
      boxShadow={shadow}
      border={border}
      borderLeft={borderLeft}
      borderRight={borderRight}
      borderTop={borderTop}
      borderRadius={borderRadius}
      overflow="hidden"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={0}
      cursor="pointer"
      _hover={{ boxShadow: "lg" }}
    >
      {imageUrl && (
        <Image src={imageUrl} alt={title} width="100%" height="auto" mb={4} />
      )}

      <Heading size="md" mb={2}>
        {title}
      </Heading>

      <Text fontSize="sm" mb={2}>
        {description}
      </Text>

      {children}
    </Box>
  );
}
