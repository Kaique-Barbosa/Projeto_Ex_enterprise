import React from 'react'
import BotaoLinks from "@/components/botaoLinks/BotaoLinks";

const FaleConosco = () => {
  return (
    <div className="flex gap-4 flex-col w-[80%]  items-center justify-center p-5 relative ">
         
          <div className="  w-full  font-semibold text-laranja_dark text-7xl ">
            Fale Conosco
          </div>

          <div className="flex  text-black dark:text-white items-center justify-center w-full p-5 g-5 ">

            <div className="flex  w-full ">
              <p className=" font-fontes-fonte-normal-regular font-medium ">
                Quer conversar com os noosos consultores?
                <br />
                Quer conhecer mais sobre os nossos servicos?
                <br />
                Ainda têm mais duvidas sobre a nossa consultoria?
                <br />
                Entre em contato pelo nosso formulário de contato.
              </p>
            </div>

            <div className="w-[30%]   flex items-center justify-center rounded-lg ">
              <BotaoLinks href="/" texto="entre em contato"  alt={"botão para página de contato"} css={"w-full text-center"} />
            </div>
          </div>
        </div>
  )
}

export default FaleConosco