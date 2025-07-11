import { Header } from "@/components/header/Header";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import Card from "@/components/Card";
import Image from "next/image";
import Section from "@/components/Section";
import LinkButton from "@/components/Buttons/LinkButton";
import Footer from "@/components/footer/Footer";

// importação de imagens
import imagemTnsta1 from "@/public/imagensDoInstagram/fotoInstagramEx1.jpg"
import imagemTnsta2 from "@/public/imagensDoInstagram/fotoInstagramEx2.jpg"
import imagemTnsta3 from "@/public/imagensDoInstagram/fotoInstagramEx3.jpg"
import consultoria from "@/public/novasImagens/consultoria-de-ti.jpg";
import locacao from "@/public/img/imoveis.jpg";
import ecommerce from "@/public/novasImagens/ecomerce.jpg";
import devs1 from "@/public/devs/devs1.jpg";
import devs2 from "@/public/devs/devs2.png";

export function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Header />

      <SectionTitle texto={["Conheça a ", "Ex Enterprise"]} />

      <Section.Root className="flex flex-col justify-center gap-6 min-h-80">
        <Section.Title className="text-center">
          Conheça um pouco mais sobre a empresa
        </Section.Title>
        <Section.Description className="text-center">
          Bem Vindo a Ex Enterprise. Somos uma organização versátil, 
          dedicada a oferecer soluções especializadas em tecnologia 
          da informação, um e-commerce confiável para produtos de 
          informática e serviços completos de locação de imóveis. 
          Contamos com uma equipe experiente e um representante de 
          destaque no setor de TI, reconhecido por suas palestras 
          e expertise. Procuramos entregar soluções criativas e 
          ajustadas às necessidades de nossos clientes.
        </Section.Description>
      </Section.Root>

      <div className="container max-w-9xl items-center flex flex-col gap-8 my-12">
        <h2 className="text-center">Veja os nossos serviços</h2>

        <Card.Root>
          <Card.Container>
            <Card.Header flex>
              <Image
                className="object-cover h-full rounded-t-lg md:rounded-l-lg md:rounded-r-none"
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
              <LinkButton
                href="/consultoria"
                texto="Acessar"
                style="outlineCircle"
                color="accent"
                className="hover:text-white"
              />
            </Card.Body>
          </Card.Container>
        </Card.Root>

        <Card.Root>
          <Card.Container inverter>
            <Card.Header flex>
              <Image
                className="object-cover h-full rounded-t-lg md:rounded-r-lg md:rounded-l-none"
                alt="Col"
                src={locacao}
              />
            </Card.Header>
            <Card.Body>
              <div className="flex flex-col gap-4 self-stretch">
                <Card.Title>Locação de Imóveis</Card.Title>
                <Card.Description>
                  Alugue um de nossos imóveis, acompanhe a disponibilidade no
                  site
                </Card.Description>
              </div>
              <LinkButton
                href="/imoveis"
                texto="Acessar"
                style="outlineCircle"
                color="accent"
                className="hover:text-white"
              />
            </Card.Body>
          </Card.Container>
        </Card.Root>

        <Card.Root>
          <Card.Container>
            <Card.Header flex>
              <Image
                className="object-cover h-full rounded-t-lg md:rounded-l-lg md:rounded-r-none"
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
              <LinkButton
                href="/ecommerce"
                texto="Acessar"
                style="outlineCircle"
                color="accent"
                className="hover:text-white"
              />
            </Card.Body>
          </Card.Container>
        </Card.Root>
      </div>
      <Section.Root className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8">
        <div className="flex-1 text-center flex flex-col gap-6">
          <Section.Title>Conheça mais sobre a empresa</Section.Title>
          <Section.Description>
            <span className="text-accent">Nossa missão é oferecer</span>
            <span>&nbsp;</span>
            <span>
              soluções tecnológicas de ponta, oferecer produtos de informática 
              de excelência e garantir serviços de locação de imóveis que superem 
              expectativas, com um compromisso contínuo com
            </span>
            <span>&nbsp;</span>
            <span className="text-accent">
              a inovação, a satisfação do cliente e a geração de valor duradouro.
            </span>
          </Section.Description>
          <LinkButton
            href={"https://www.instagram.com/exenterprise/"}
            alt="Botao link"
            texto="Acessar"
            style="outlineCircle"
            color="accent"
            className="self-center hover:text-white"
          />
        </div>
        <div className="flex-1">
          <div className="p-4 lg:p-0 grid xs:grid-cols-2 items-center justify-center gap-4">
            <Image
              className="items-center w-full h-80 row-span-2 object-cover rounded-lg"
              alt="imagens ilustrativas"
              src={imagemTnsta1}
            />
            <Image
              className="w-full h-80 object-cover rounded-lg"
              alt="imagens ilustrativas "
              src={imagemTnsta2}
            />
            <Image
              className="w-full h-80 object-cover rounded-lg"
              alt="imagens ilustrativas"
              src={imagemTnsta3}
            />
          </div>
        </div>
      </Section.Root>
      <Section.Root className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8">
        <div className="flex-1 flex flex-col gap-4 text-center justify-center">
          <Section.Title>
            Conheça mais sobre o time de desenvolvedores
          </Section.Title>
          <Section.Description>
            <span>Nosso time de devs</span>
            <span>&nbsp;</span>
            <span>
              busca inovação com sustentabilidade, utilizando das melhores
              tecnologias do marcado
            </span>
            <span>&nbsp;</span>
            <span>focando na</span>
            <span className="text-accent">
              {" "}
              usabilidade, eficiencia e segurança
            </span>
          </Section.Description>
           
          <LinkButton
            href={"https://biolink.info/devs-ex-enterprise"}
            alt={"Botao link"}
            texto={"Conhecer Devs"}
            className="self-center hover:text-white"
            style="outlineCircle"
            color="accent"
          />

        </div>
        <div className="flex-1 flex flex-col gap-4">
          <Image  className="w-full h-96 object-cover " alt="Cover" src={devs1} />
          <Image className="w-full h-96 object-cover" alt="Cover" src={devs2} />
        </div>
      </Section.Root>
      <Footer />
    </div>
  );
}
