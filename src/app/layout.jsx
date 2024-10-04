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
    <html lang="pt-br" className="dark">
      <body
        className={`${workSans.className} antialiased bg-branco text-preto dark:bg-preto dark:text-cinza`}
      >
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
