"use client";

import { Header } from "@/components/header/Header";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import Card from "@/components/Card";
import SobreEmpresa from "@/components/sobreEmpresa/SobreEmpresa";
import Image from "next/image";
// importação de imagens

import consultoria from "@/public/img/consultoria.jpg";
import locacao from "@/public/img/imoveis.jpg";
import ecommerce from "@/public/img/ecommerce.jpg";
import Sobre from "@/components/sobre/Sobre";
import SobreDevs from "@/components/sobreDevs/SobreDevs";
import Footer from "@/components/footer/Footer";
import BotaoLinks from "@/components/botaoLinks/BotaoLinks";

export function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Header />

      <SectionTitle texto={["Conheça a ", "Ex Enterprise"]} />

      <Sobre title="Conheça um pouco sobre a empresa">
        <p className="text-balance font-semibold">
          Empresa multifacetada que oferece consultoria especializada em
          tecnologia da informação, um e-commerce robusto para venda de produtos
          de informática e serviços de locação de imóveis. Com uma equipe
          altamente qualificada e um representante palestrante renomado no setor
          de TI, nos destacamos pela nossa capacidade de entregar soluções
          inovadoras e personalizadas.
        </p>
      </Sobre>

      <div className="container max-w-9xl items-center flex flex-col gap-8 my-12">
        <h2 className="text-center">Veja os nossos serviços</h2>

        <Card.Root>
          <Card.Container>
            <Card.Header flex>
              <Image
                className="object-cover h-full rounded-t-lg sm:rounded-l-lg sm:rounded-r-none"
                alt="Col"
                src={consultoria}
              />
            </Card.Header>
            <Card.Body>
              <div className="flex flex-col gap-4 self-stretch">
                <Card.Title>Consultoria</Card.Title>
                <Card.Description>
                  Realize conosco uma sessão com os melhores profissionais do
                  mercado
                </Card.Description>
              </div>
              <BotaoLinks href="/consultoria" texto="Acessar" />
            </Card.Body>
          </Card.Container>
        </Card.Root>
        <Card.Root>
          <Card.Container inverter>
            <Card.Header flex>
              <Image
                className="object-cover h-full rounded-t-lg sm:rounded-r-lg sm:rounded-l-none"
                alt="Col"
                src={locacao}
              />
            </Card.Header>
            <Card.Body>
              <div className="flex flex-col gap-4 self-stretch">
                <Card.Title>Locação de Imóveis</Card.Title>
                <Card.Description>
                  Aloque um de nossos imóveis, acompanhe a disponibilidade no
                  site
                </Card.Description>
              </div>
              <BotaoLinks href="/imoveis" texto="Acessar" />
            </Card.Body>
          </Card.Container>
        </Card.Root>
        <Card.Root>
          <Card.Container>
            <Card.Header flex>
              <Image
                className="object-cover h-full rounded-t-lg sm:rounded-l-lg sm:rounded-r-none"
                alt="Col"
                src={ecommerce}
              />
            </Card.Header>
            <Card.Body>
              <div className="flex flex-col gap-4 self-stretch">
                <Card.Title>E-commerce</Card.Title>
                <Card.Description>
                  Adiquira produtos de tecnologia com qualidade e confiança
                </Card.Description>
              </div>
              <BotaoLinks href="/ecomerce" texto="Acessar" />
            </Card.Body>
          </Card.Container>
        </Card.Root>
      </div>
      <SobreEmpresa />
      <SobreDevs />
      <Footer />
    </div>
  );
}
