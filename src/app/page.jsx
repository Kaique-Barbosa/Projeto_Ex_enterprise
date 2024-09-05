// import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Container,
} from "@chakra-ui/react";
import Header from '@/components/Header'

import { ChakraBaseProvider } from "@chakra-ui/react";
export default function Home() {
  return (
    <ChakraBaseProvider >
      <Box as="main" bg="lightgray" minH="100vh"  >
    <Header/>


        {/* Footer */}
        <Box as="footer" bg="gray.800" color="gray.200" py={10}>
          <Container maxW="container.xl" textAlign="center">
            <Text>&copy; 2024 Minha Marca. Todos os direitos reservados.</Text>
          </Container>
        </Box>
      </Box>
    </ChakraBaseProvider>
  );
}

// Componente de Feature
