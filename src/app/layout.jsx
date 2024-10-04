import {Work_Sans} from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";

const workSans = Work_Sans({subsets: ['latin']})

export const metadata = {
  title: "Ex Enterprise",
  description: "Cuidando do Futuro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${workSans.className} antialiased`}
      >
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
