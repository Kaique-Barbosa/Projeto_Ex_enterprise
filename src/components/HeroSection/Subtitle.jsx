import React from "react";

export default function Subtitle({ children, textAlignment }) {
  return <p className={`text-pretty text-lg text-${textAlignment}`}>{children}</p>;
}
