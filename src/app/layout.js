"use client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TopBar from "@/components/TopBar/TopBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ChakraProvider theme={theme}>
          <TopBar />
          <Header />
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
