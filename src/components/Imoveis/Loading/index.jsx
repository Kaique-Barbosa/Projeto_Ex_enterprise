import React from "react";
import LoadingImoveisCard from "./LoadingImoveisCard";

export default function LoadingImoveis() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <LoadingImoveisCard />
      <LoadingImoveisCard />
      <LoadingImoveisCard />
    </div>
  );
}
