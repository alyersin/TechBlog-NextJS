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
import LoginRegisterModal from "../LoginRegisterModal/LoginRegisterModal";

export default function Header() {
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();

  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

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
          width={{ base: "170px", md: "340px" }}
          height="auto"
          margin={{
            base: "14px 30px",
            md: "20px 0 20px 40px",
          }}
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
          onClick={onDrawerOpen}
          display={{ base: "flex", md: "none" }}
          margin={"14px 30px 14px 0"}
        />
        {/* DRAWER */}
        <Drawer isOpen={isDrawerOpen} placement="top" onClose={onDrawerClose}>
          <DrawerOverlay
            style={{
              top: "80px",
            }}
          />
          <DrawerContent mt="70px" position="relative">
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody py={0}>
              <Button variant="ghost" width="100%" onClick={onDrawerClose}>
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
                  <Button variant="ghost" width="100%" onClick={onDrawerClose}>
                    News
                  </Button>
                  <Button variant="ghost" width="100%" onClick={onDrawerClose}>
                    Apps
                  </Button>
                  <Button variant="ghost" width="100%" onClick={onDrawerClose}>
                    Gaming
                  </Button>
                  <Button variant="ghost" width="100%" onClick={onDrawerClose}>
                    Security
                  </Button>
                  <Button variant="ghost" width="100%" onClick={onDrawerClose}>
                    Tech
                  </Button>
                  <Button variant="ghost" width="100%" onClick={onDrawerClose}>
                    Hacks
                  </Button>
                  <Button variant="ghost" width="100%" onClick={onDrawerClose}>
                    Gear
                  </Button>
                  <Button variant="ghost" width="100%" onClick={onDrawerClose}>
                    Tips
                  </Button>
                </Box>
              </Collapse>
              <Button variant="ghost" width="100%" onClick={onDrawerClose}>
                Services
              </Button>
              <Button variant="ghost" width="100%" onClick={onDrawerClose}>
                About Us
              </Button>
              <Button variant="ghost" width="100%" onClick={onDrawerClose}>
                Contact Us
              </Button>

              {/* Login Button */}
              <Button
                variant="solid"
                width="100%"
                bgColor="#FF7A3D"
                color="white"
                onClick={() => {
                  onModalOpen();
                  onDrawerClose();
                }}
                _hover={{ bg: "#FF5E1F" }}
              >
                Login / Register
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
          flexWrap="nowrap"
          overflow="hidden"
        >
          <Link href="../pages/TopPosts">
            <Text
              _hover={{ color: "#FF7A3D" }}
              _active={{ color: "#FF7A3D" }}
              fontSize={{
                base: "sm",
                md: "md",
                lg: "0.9rem",
              }}
              whiteSpace="nowrap"
            >
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
              fontSize={{
                base: "sm",
                md: "md",
                lg: "0.9rem",
              }}
              whiteSpace="nowrap"
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
            <Text
              _hover={{ color: "#FF7A3D" }}
              fontSize={{
                base: "sm",
                md: "md",
                lg: "0.9rem",
              }}
              whiteSpace="nowrap"
            >
              Services
            </Text>
          </Link>
          <Link href="../pages/AboutUs">
            <Text
              _hover={{ color: "#FF7A3D" }}
              fontSize={{
                base: "sm",
                md: "md",
                lg: "0.9rem",
              }}
              whiteSpace="nowrap"
            >
              About Us
            </Text>
          </Link>
          <Link href="../pages/ContactUs">
            <Text
              _hover={{ color: "#FF7A3D" }}
              fontSize={{
                base: "sm",
                md: "md",
                lg: "0.9rem",
              }}
              whiteSpace="nowrap"
            >
              Contact Us
            </Text>
          </Link>

          <Box
            className="borderGreen"
            textAlign="center"
            mx="auto"
            margin="10px 20px 10px 20px"
            color="white"
            fontWeight="700"
            flexShrink={0}
          >
            <Button
              bgColor="#FF7A3D"
              borderRadius="30px"
              padding={{
                base: "10px 20px",
                md: "12px 24px",
                lg: "14px 28px",
              }}
              margin="auto"
              onClick={onModalOpen}
              fontSize={{
                base: "sm",
                md: "md",
                lg: "0.9rem",
              }}
              _hover={{
                background: "#FF7A3D",
                transform: "scale(1.1)",
                transition: "all 0.2s ease-in-out",
              }}
            >
              SIGN IN
            </Button>
            {/* Modal */}
            <LoginRegisterModal isOpen={isModalOpen} onClose={onModalClose} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
