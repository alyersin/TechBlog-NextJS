"use client";

import {
  Box,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  useDisclosure,
  Collapse,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import "../../app/globals.css";
import Link from "next/link";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  return (
    <Box
      display="flex"
      justifyContent="center"
      position="sticky"
      top="0"
      zIndex="10"
    >
      <Box
        className="borderBlue"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignContent="center"
        alignItems="center"
        textAlign="center"
        width={"1280px"}
        mx="auto"
      >
        <Box
          className="borderGreen"
          width={{ base: "170px", md: "360px" }}
          height="auto"
          margin={{ base: "14px 30px", md: "20px 0 20px 40px" }}
        >
          <Link href="/">
            <Image
              src="/logo-1.avif"
              alt="Logo"
              width="100%"
              height="auto"
              objectFit="contain"
            />
          </Link>
        </Box>

        <IconButton
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          color="black"
          onClick={onOpen}
          display={{ base: "flex", md: "none" }}
          margin={"14px 30px 14px 0"}
        />
        {/* DRAWER */}
        <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
          <DrawerOverlay
            style={{
              top: "80px",
            }}
          />
          <DrawerContent mt="70px" position="relative">
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody py={0}>
              <Button variant="ghost" width="100%" onClick={onClose}>
                Top Posts
              </Button>
              <Button
                variant="ghost"
                width="100%"
                rightIcon={<ChevronDownIcon />}
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              >
                All Categories
              </Button>
              <Collapse in={isCategoriesOpen}>
                <Box pl={4} mt={2}>
                  <Button variant="ghost" width="100%" onClick={onClose}>
                    News
                  </Button>
                  <Button variant="ghost" width="100%" onClick={onClose}>
                    Apps
                  </Button>
                  <Button variant="ghost" width="100%" onClick={onClose}>
                    Gaming
                  </Button>
                  <Button variant="ghost" width="100%" onClick={onClose}>
                    Security
                  </Button>
                  <Button variant="ghost" width="100%" onClick={onClose}>
                    Tech
                  </Button>
                  <Button variant="ghost" width="100%" onClick={onClose}>
                    Hacks
                  </Button>
                  <Button variant="ghost" width="100%" onClick={onClose}>
                    Gear
                  </Button>
                  <Button variant="ghost" width="100%" onClick={onClose}>
                    Tips
                  </Button>
                </Box>
              </Collapse>
              <Button variant="ghost" width="100%" onClick={onClose}>
                Services
              </Button>

              <Button variant="ghost" width="100%" onClick={onClose}>
                About Us
              </Button>
              <Button variant="ghost" width="100%" onClick={onClose}>
                Contact Us
              </Button>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <Box
          className="borderGreen"
          display={{ base: "none", md: "flex" }}
          flexDirection="row"
          margin={"20px 40px 20px 0"}
          gap={4}
          alignItems="center"
        >
          <Link href="../pages/TopPosts">
            <Text _hover={{ color: "#FF7A3D" }} _active={{ color: "#FF7A3D" }}>
              Top Posts
            </Text>
          </Link>
          <Menu>
            {/* DROPDOWN */}
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              bg="transparent"
              px={0}
              fontWeight="normal"
              _hover={{ background: "none", color: "#FF7A3D" }}
              _active={{ background: "none" }}
            >
              All Categories
            </MenuButton>

            <MenuList>
              <MenuItem>News</MenuItem>
              <MenuItem>Apps</MenuItem>
              <MenuItem>Gaming</MenuItem>
              <MenuItem>Security</MenuItem>
              <MenuItem>Tech</MenuItem>
              <MenuItem>Hacks</MenuItem>
              <MenuItem>Gear</MenuItem>
              <MenuItem>Tips</MenuItem>
            </MenuList>
          </Menu>
          <Link href="../pages/Services">
            <Text _hover={{ color: "#FF7A3D" }}>Services</Text>
          </Link>
          <Link href="../pages/AboutUs">
            <Text _hover={{ color: "#FF7A3D" }}>About Us</Text>
          </Link>
          <Link href="../pages/ContactUs">
            <Text _hover={{ color: "#FF7A3D" }}>Contact Us</Text>
          </Link>

          <Box
            borderRadius="20px"
            margin="0 0 0 70px"
            padding="8px 22px"
            bgColor="#FF7A3D"
            color="white"
            fontWeight="700"
            _hover={{
              background: "#FF7A3D",
              transform: "scale(1.1)",
              transition: "all 0.2s ease-in-out",
            }}
          >
            <Link href="../pages/Login">
              <Text>SIGN IN</Text>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
