// import { Link } from "@chakra-ui/next-js";
import { Box } from "@chakra-ui/react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { ChakraBaseProvider } from "@chakra-ui/react";
export default function Home() {
  return (
    <ChakraBaseProvider>
      <Box as="main" bg="lightgray">
        <Header />
        <Footer />
      </Box>
    </ChakraBaseProvider>
  );
}

// Componente de Feature
