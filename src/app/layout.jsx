import { Work_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ChakraProvider } from "@chakra-ui/react";
import Providers from "@/providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Ex Enterprise",
  description: "Cuidando do Futuro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${workSans.className} antialiased bg-gradient-to-b from-base-100  via-base-200 via-50% via-base-300 via-70% to-primary to-90% text-secondary`}
      >
        <Providers>
          <ThemeProvider atribute="class" defaultTheme="dark">
            <ChakraProvider>{children}</ChakraProvider>
          </ThemeProvider>
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
