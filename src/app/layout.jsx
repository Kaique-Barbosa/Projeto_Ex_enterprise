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
        className={`${workSans.className} antialiased bg-gradient-to-b from-branco dark:from-preto_primario via-[#FBFAFA] dark:via-preto_secondario via-40% via-[#F2F3F3] dark:via-[#212020] via-60%  to-cinza dark:to-[#232222] to-80% text-preto_primario  dark:text-cinza relative`}
      >
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
