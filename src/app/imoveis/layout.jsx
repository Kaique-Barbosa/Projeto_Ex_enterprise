import Footer from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import React from "react";

export default function ImoveisLayout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
