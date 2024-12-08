"use client";
import Image from "next/image";
import React, { useState } from "react";
import Download from "@/icons/Download/Download";
import ButtonWithIcon from "@/components/Buttons/ButtonWithIcon";
import api from "@/utils/api";

// Função para baixar o eBook
async function baixarEbook(titulo, setToast) {
  const nomeArquivo = `${titulo}.pdf`; // Concatena o título com ".pdf"
  console.log(nomeArquivo)
  try {
    const response = await api.get(`/ebooks/baixar/${nomeArquivo}`);
    console.log("eBook baixado com sucesso!");
    setToast({ type: "success", message: "Download iniciado com sucesso!" });
  } catch (error) {
    console.error("Erro ao baixar o eBook:", error);
    setToast({
      type: "error",
      message: error.response?.data?.error || "Erro desconhecido ao baixar o eBook.",
    });
  }
}

export default function CardModel5({ titulo, descricao, capa }) {
  const [toast, setToast] = useState(null); // Estado para armazenar o tipo e mensagem do toast

  return (
    <div className="w-80 md:w-full h-fit md:h-96 flex flex-col md:flex-row justify-between items-center bg-cinza-200_neutro bg-opacity-10 p-4 gap-6 rounded-xl backdrop-filter backdrop-blur-lg backdrop-saturate-150">
      <Image
        src={capa}
        className="w-80 h-96 md:h-fit rounded-lg"
        alt="Capa de ebook"
      />
      <div className="w-full h-full flex flex-col gap-3">
        <div className="flex-1 self-stretch">
          <h3 className="mb-4">{titulo}</h3>
          <p>{descricao}</p>
        </div>
        <ButtonWithIcon
          icon={<Download css="size-4 text-inherit fill-current" />}
          texto="Download"
          css="self-center md:self-start"
          funcaoOnclick={() => baixarEbook(titulo, setToast)} // Passa `setToast` como argumento
        />
      </div>

      {/* Toast */}
      {toast && (
        <div className="toast toast-top toast-center">
          <div
            className={`alert ${
              toast.type === "success" ? "alert-success" : "alert-info"
            }`}
          >
            <span>{toast.message}</span>
          </div>
        </div>
      )}
    </div>
  );
}
