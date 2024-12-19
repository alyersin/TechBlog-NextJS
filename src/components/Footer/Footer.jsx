import { Box, Text, Link, Icon } from "@chakra-ui/react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <Box bg="#FF7A3D" py={6}>
      <Box
        className="borderBlue"
        maxWidth="1280px"
        mx="auto"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        textAlign={{ base: "center", md: "left" }}
        px={{ base: 4, md: 10 }}
      >
        <Box display="flex" flexDirection="column" gap={4}>
          <Text fontWeight="bold" fontSize="lg" color="white">
            Tech Blogger
          </Text>
          <Box
            display="flex"
            gap={6}
            justifyContent={{ base: "center", md: "start" }}
          >
            <Link
              href="/about"
              color="white"
              _hover={{ textDecoration: "underline" }}
            >
              About Us
            </Link>
            <Link
              href="/categories"
              color="white"
              _hover={{ textDecoration: "underline" }}
            >
              All Categories
            </Link>
            <Link
              href="/best-posts"
              color="white"
              _hover={{ textDecoration: "underline" }}
            >
              Best Posts
            </Link>
            <Link
              href="/contact"
              color="white"
              _hover={{ textDecoration: "underline" }}
            >
              Contact
            </Link>
            <Link
              href="/services"
              color="white"
              _hover={{ textDecoration: "underline" }}
            >
              Services
            </Link>
          </Box>
        </Box>

        <Box
          display="flex"
          gap={6}
          mt={{ base: 4, md: 0 }}
          justifyContent={{ base: "center", md: "start" }}
        >
          <Link href="https://facebook.com" isExternal>
            <Icon
              as={FaFacebookF}
              boxSize={6}
              color="white"
              _hover={{ color: "black" }}
            />
          </Link>
          <Link href="https://twitter.com" isExternal>
            <Icon
              as={FaTwitter}
              boxSize={6}
              color="white"
              _hover={{ color: "black" }}
            />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <Icon
              as={FaInstagram}
              boxSize={6}
              color="white"
              _hover={{ color: "black" }}
            />
          </Link>
        </Box>
      </Box>

      <Box mt={4} textAlign="center">
        <Text fontSize="sm" color="white">
          © 2024 Tech Blog - ChakraUI Responsive Theme
        </Text>
      </Box>
    </Box>
  );
}
