"use client";
import React from 'react'
import PropTypes from 'prop-types'
import SessionTitle from '@/components/sessionTitle/SessionTitle'
import { Card } from "@/components/card/Card";

// importação de imagens
import logo from "@/public/img/logo.png";
import consultoria from "@/public/img/consultoria.jpg";
import locacao from "@/public/img/imoveis.jpg";
import ecommerce from "@/public/img/ecommerce.jpg";

 const ConsultoriaPage = (
    // Props
) => {
  return (
    <div className="flex flex-col items-center  justify-center  relative bg-[--cores-container-fundo] w-[100%]">
      <SessionTitle texto={['Conheça a nossa', 'Consultoria em T.I']}/>  

          <Card
            imagem={consultoria}
            titulo="Análise e Diagnóstico de Sistemas de TI"
            subTitulo="Avaliação detalhada da
            infraestrutura tecnológica existente para identificar pontos de melhoria e
            oportunidades de otimização."
            altLink="texto alternativo"
            inverter={false}
            linkButton="/consultoria"
            usarBotao={true}
          />
    

      <div className='my-[15%]'>
          <Card
            imagem={consultoria}
            titulo="Análise e Diagnóstico de Sistemas de TI"
            subTitulo="Avaliação detalhada da
            infraestrutura tecnológica existente para identificar pontos de melhoria e
            oportunidades de otimização."
            altLink="texto alternativo"
            inverter={true}
            linkButton="/consultoria"
          />
          <Card
            imagem={locacao}
            titulo="Desenvolvimento de Soluções Personalizadas"
            subTitulo="Criação e implementação de
            soluções sob medida para atender às necessidades específicas dos clientes, desde
            software até integração de sistemas."
            altLink="texto alternativo"
            inverter={false}
            linkButton="/imoveis"
          />
          <Card
            imagem={ecommerce}
            titulo="Implementação de Sistemas e Softwares"
            subTitulo="Planejamento e execução de
            projetos de implementação de novos sistemas e softwares, garantindo uma
            transição suave e eficiente."
            altLink="texto alternativo"
            inverter={true}
            linkButton="/ecomerce"
          />
          <Card
            imagem={ecommerce}
            titulo="Treinamentos e Workshops em Tecnologia da Informação"
            subTitulo="Capacitação de
            equipes através de treinamentos práticos e workshops, focados em novas
            tecnologias, boas práticas e tendências do mercado de TI."
            altLink="texto alternativo"
            inverter={false}
            linkButton="/ecomerce"
          />
        </div>

    </div>
  )
}

ConsultoriaPage.propTypes = {

}

export default ConsultoriaPage
