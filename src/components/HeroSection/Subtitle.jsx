import React from "react";

export default function Subtitle({ text, textAlignment }) {
  return <p className={`text-pretty text-${textAlignment}`}>{text}</p>;
}
