
import Image from "next/image";
import { ChakraBaseProvider } from "@chakra-ui/react";
// import { Link } from "@chakra-ui/next-js";
import { Box } from '@chakra-ui/react'
 
export default function Home() {
  return (
    <ChakraBaseProvider>
      <Box border='10px' borderColor='gray.200' >
        <p>Teste</p>
      </Box>
    </ChakraBaseProvider>
  );
}
