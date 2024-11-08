import {Work_Sans} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ChakraProvider } from "@chakra-ui/react";

const workSans = Work_Sans({subsets: ['latin']})

export const metadata = {
  title: "Ex Enterprise",
  description: "Cuidando do Futuro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${workSans.className} antialiased bg-gradient-to-b from-branco dark:from-preto-950 via-cinza-50 dark:via-preto-900 via-40% via-cinza-100 dark:via-preto-850 via-60%  to-cinza-200 dark:to-preto-800 to-80% text-preto-950 dark:text-cinza-200`}
      >
        <ThemeProvider atribute="class" defaultTheme="dark">
          <ChakraProvider>{children}</ChakraProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
