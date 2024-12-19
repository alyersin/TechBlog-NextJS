"use client";
import {
  Box,
  Heading,
  Text,
  Button,
  Icon,
  FormControl,
  Input,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import "../app/globals.css";
import Card from "@/components/Card/Card";
import Link from "next/link";
import { useState, useEffect } from "react";
import cardsData from "../data/cardsData";
import cardsDataTwo from "../data/cardsDataTwo";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [showAllCards, setShowAllCards] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cardContainerStyles = {
    width: { base: "100%", md: "140px" },
  };

  const MotionButton = motion(Button);

  return (
    <Box className="borderGreen" textAlign="center" mx="auto">
      {/* HERO SECTION */}
      <Box
        className="borderRed"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        backgroundImage="url('/bg/bg-1.jpg')"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        mx="auto"
      >
        {/* FEATURED CARDS */}
        <Box
          className="borderBlue"
          display="flex"
          justifyContent="center"
          flexDirection={isMobile ? "column" : "row"}
          flexWrap="wrap"
          gap={6}
          maxWidth="1280px"
          padding={6}
        >
          {cardsData
            .slice(0, isMobile && !showAllCards ? 3 : cardsData.length)
            .map((card) => (
              <Link key={card.id} href={`/page${card.id}`} passHref>
                <Box>
                  <Card
                    imageUrl={card.imageUrl}
                    title={card.title}
                    description={card.description}
                  />
                </Box>
              </Link>
            ))}
        </Box>

        {/* SHOW MORE BUTTON */}
        {isMobile && (
          <MotionButton
            leftIcon={
              <Icon as={showAllCards ? ChevronUpIcon : ChevronDownIcon} />
            }
            onClick={() => setShowAllCards((prev) => !prev)}
            variant="ghost"
            colorScheme="orange"
            mt={4}
            _hover={{ backgroundColor: "transparent", color: "#FF7A3D" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
          >
            {showAllCards ? "Show Less" : "Show More"}
          </MotionButton>
        )}
      </Box>

      {/* STICKY CARDS */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="stretch"
        flexDirection={{ base: "column", md: "row" }}
        flexWrap={{ base: "wrap", md: "nowrap" }}
        width="100%"
        maxWidth="1280px"
        mx="auto"
      >
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <Box key={index} {...cardContainerStyles}>
              <Card
                borderLeft={{
                  base: "none",
                  md: "1px solid orange",
                }}
                borderRight={{
                  base: "none",
                  md: index === 7 ? "1px solid orange" : "none",
                }}
                borderTop={{ base: "1px solid orange", md: "none" }}
                borderRadius="none"
                width={{ base: "100%", md: "140px" }}
                height={{ base: "80px", md: "136px" }}
              />
            </Box>
          ))}
      </Box>

      {/* POPULAR POSTS */}
      <Box
        className="borderRed"
        display="flex"
        flexDirection="column"
        gap={8}
        py={{ base: 10, md: 28 }}
        bg="#ffdab9"
      >
        <Heading>Popular Posts</Heading>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      </Box>

      {/* 3-CARD SECTION */}
      <Box
        className="borderRed"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        maxWidth="1280px"
        mx="auto"
      >
        <Box
          className="borderBlue"
          display="flex"
          justifyContent="center"
          flexDirection="row"
          flexWrap="wrap"
          gap={6}
          maxWidth="1280px"
          py={{ base: 10, md: 20 }}
        >
          {cardsDataTwo.map((card) => (
            <Link key={card.id} href={`/page${card.id}`} passHref>
              <Box>
                <Card
                  imageUrl={card.imageUrl}
                  title={card.title}
                  description={card.description}
                />
              </Box>
            </Link>
          ))}
        </Box>
      </Box>

      {/* BEST AWARDS */}
      <Box
        className="borderRed"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems="stretch"
        maxWidth="1280px"
        mx="auto"
        my={{ base: 0, md: 14 }}
        px={{ base: "0", md: "86px" }}
      >
        <Box
          className="borderBlue"
          display={{ base: "none", md: "flex" }}
          flex="1"
          height="auto"
        >
          <Box
            as="img"
            src="/assets/231.avif"
            alt="Descriptive text for the image"
            width="100%"
            height="100%"
            objectFit="cover"
            shadow="md"
          />
        </Box>

        <Box
          className="borderBlue"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          bgColor="#ffdab9"
          gap={4}
          textAlign={{ base: "center", md: "left" }}
          flex="2"
          padding={{ base: "20px", md: "50px 40px 50px 40px" }}
        >
          <Heading>Best-Of Awards 2024</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </Text>
        </Box>

        <Box
          className="borderGreen"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          bgImage="/assets/234.jpg"
          bgSize="cover"
          bgPos="center"
          bgRepeat="no-repeat"
          py={{ base: 24, md: 0 }}
          flex="1"
        >
          <Box
            borderRadius="20px"
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
              <Text>More About Us</Text>
            </Link>
          </Box>
        </Box>
      </Box>

      {/* SUBSCRIBE SECTION */}
      <Box
        className="borderRed"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        gap={4}
        maxWidth="1280px"
        margin="auto"
        py={{ base: 8, md: 20 }}
        px={{ base: 4, md: 20 }}
      >
        <Box
          className="borderBlue"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          textAlign="left"
          width="100%"
          maxWidth="500px"
          gap={26}
          py={{ base: 4, md: 14 }}
          px={{ base: 4, md: 20 }}
          margin="auto"
        >
          <Box>
            <Heading mb={4}>Subscribe To Our Newsletter.</Heading>
            <Text mb={6}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </Text>
          </Box>

          <FormControl
            display="flex"
            flexDirection="column"
            gap={4}
            width="100%"
          >
            <Input
              placeholder="Your Email Address.."
              size="lg"
              width="100%"
              borderRadius="md"
            />
            <Button
              colorScheme="orange"
              size="lg"
              borderRadius="md"
              _hover={{
                background: "#FF7A3D",
                transform: "scale(1.1)",
                transition: "all 0.2s ease-in-out",
              }}
            >
              Submit
            </Button>
          </FormControl>
        </Box>

        <Box
          className="borderRed"
          position="relative"
          overflow="hidden"
          width={{ base: "100%", md: "680px" }}
          borderRadius="md"
          margin="auto"
          shadow="md"
          sx={{
            aspectRatio: "1.6",
          }}
        >
          <Box
            as="iframe"
            src="https://www.youtube.com/embed/OI3gGmJzhVM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            border="0"
          />
        </Box>
      </Box>
    </Box>
  );
}
