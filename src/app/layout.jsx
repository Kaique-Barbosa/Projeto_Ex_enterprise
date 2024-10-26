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
        className={`${workSans.className} antialiased bg-gradient-to-l from-branco dark:from-preto_primario from-50% to-[#FBFAFA] dark:to-preto_secondario text-preto_primario  dark:text-cinza`}
      >
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
