import React, { createContext, useState, useEffect } from "react";

// como usar nos componentes:
// importar :
// import { WindowWidthContext } from "@/app/WindowWidthContext";
//definir uma constante:
//const larguraDaTela = useContext(WindowWidthContext);
// só chamar a variavel para usar o a string passada

// Criação do contexto
export const WindowWidthContext = createContext();

// Provedor do contexto que fornecerá o tipo de dispositivo para todos os componentes
export const WindowWidthProvider = ({ children }) => {
  const [deviceType, setDeviceType] = useState("desktop"); // Estado inicial

  // Função para retornar o tipo de dispositivo baseado na largura da tela
  function getDeviceType(width) {
    if (width <= 500) {
      return "mobile";
    } else if (width > 500 && width <= 1200) {
      return "tablet";
    } else {
      return "desktop";
    }
  }

  useEffect(() => {
    // Garante que o código só é executado no lado do cliente
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const newDeviceType = getDeviceType(window.innerWidth);
        setDeviceType(newDeviceType);
      };

      // Atualiza o tipo de dispositivo com a largura inicial da janela
      handleResize();

      // Adiciona o event listener quando o componente monta
      window.addEventListener("resize", handleResize);

      // Remove o event listener quando o componente desmonta
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []); // [] garante que o listener é adicionado apenas uma vez

  return (
    <WindowWidthContext.Provider value={deviceType}>
      {children}
    </WindowWidthContext.Provider>
  );
};
