import { Box, Icon, Link, Text } from "@chakra-ui/react";
import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaSearch } from "react-icons/fa";

export default function TopBar() {
  return (
    <Box
      display={{ base: "none", md: "flex" }}
      justifyContent="center"
      bg="#ffdab9"
    >
      <Box
        className="borderGreen"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        width={"1280px"}
        padding={2}
      >
        {/* LEFT */}
        <Box
          className="borderGreen"
          display="flex"
          flexDirection="row"
          gap={6}
          ml={8}
        >
          <Text>tech-blog@email.com</Text>
          <Text>+40 123 456 789</Text>
        </Box>

        {/* RIGHT */}
        <Box
          className="borderGreen"
          display="flex"
          flexDirection="row"
          gap={8}
          mr={8}
        >
          <Link href="/">
            <Icon as={FaLinkedin} boxSize={6} _hover={{ color: "blue.500" }} />
          </Link>{" "}
          <Link href="/">
            <Icon as={FaTwitter} boxSize={6} _hover={{ color: "blue.500" }} />
          </Link>{" "}
          <Link href="/">
            <Icon as={FaGithub} boxSize={6} _hover={{ color: "white" }} />
          </Link>
          <Box>
            <Icon as={FaSearch} boxSize={6} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
