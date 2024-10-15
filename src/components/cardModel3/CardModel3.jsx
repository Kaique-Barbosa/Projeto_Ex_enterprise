import React from "react";
import { useEffect, useState } from "react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import Image from "next/image";

const CardModel3 = ({ logo, titulo, subtitulo, mensagem }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.getItem("chakra-ui-color-mode") === "dark"
      ? setDarkMode(true)
      : setDarkMode(false);
  }, []);

  return (
    <div className="card w-full bg-cinza dark:bg-preto_secondario p-4 rounded-lg">
      <div className="card-header flex flex-col items-center text-center justify-center gap-6 mb-6">
        <Image className="w-14 rounded-full" src={logo} alt="logo" />
        <div>
          <Heading size="md" className="mb-1">{titulo}</Heading>
          <Text>{subtitulo}</Text>
        </div>
      </div>
      <div>
        <Text>{mensagem}</Text>
      </div>
    </div>
  );
};

export default CardModel3;
