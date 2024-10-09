"use client";
import { HomePage } from "@/screens/home/HomePage";
import { WindowWidthProvider } from "@/app/WindowWidthContext";


export default function Home({}) {
  return (
    <WindowWidthProvider>
      <HomePage />
      
    </WindowWidthProvider>
  );
}
