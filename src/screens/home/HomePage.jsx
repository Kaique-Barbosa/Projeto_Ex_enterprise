"use client";
import { Header } from "@/components/header/Header";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import { Card } from "@/components/card/Card";
import SobreEmpresa from "@/components/sobreEmpresa/SobreEmpresa";
// importação de imagens

import consultoria from "@/public/img/consultoria.jpg";
import locacao from "@/public/img/imoveis.jpg";
import ecommerce from "@/public/img/ecommerce.jpg";
import Sobre from "@/components/sobre/Sobre";
import SobreDevs from "@/components/sobreDevs/SobreDevs";
import { EntreEmContato } from "@/components/entreEmContato/EntreEmContato";
import Footer from "@/components/footer/Footer";

export function HomePage() {
  return (
      <div className="flex flex-col items-center justify-center w-full">
        {/* <HomePage/> */}
        <Header />

        <SectionTitle texto={["Conheça a ", "Ex Enterprise"]} />
        
        <Sobre title="Conheça um pouco sobre a empresa">
          <p className="text-balance font-semibold">
            Empresa multifacetada que oferece consultoria especializada em
            tecnologia da informação, um e-commerce robusto para venda de
            produtos de informática e serviços de locação de imóveis. Com uma
            equipe altamente qualificada e um representante palestrante renomado
            no setor de TI, nos destacamos pela nossa capacidade de entregar
            soluções inovadoras e personalizadas.
          </p>
        </Sobre>

        <div>
          <Card
            imagem={consultoria}
            titulo="Consultoria"
            subTitulo="Realize conosco uma sessão com os melhores profissionais do mercado"
            altLink="imagem representando consultoria"
            inverter={true}
            linkButton="/consultoria"
          />
          <Card
            imagem={locacao}
            titulo="Locação de Imóveis"
            subTitulo="Aloque um de nossos escritorios, aconpanhe a disponibilidade no site"
            altLink="iamgem de locação de imoveis"
            inverter={false}
            linkButton="/imoveis"
          />
          <Card
            imagem={ecommerce}
            titulo="E-commerce"
            subTitulo="Adiquira produtos de tecnologia com qualidade e confiança"
            altLink="iamgem de locação de imoveis"
            inverter={true}
            linkButton="/ecomerce"
          />
        </div>
        <SobreEmpresa />
        <SobreDevs />
        <EntreEmContato />
        <Footer/>
      </div>
    
  );
}
