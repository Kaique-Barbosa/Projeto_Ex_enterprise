import { Header } from "@/components/header/Header";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import Card from "@/components/Card";
import Image from "next/image";
import Section from "@/components/Section";
import LinkButton from "@/components/Buttons/LinkButton";
import Footer from "@/components/footer/Footer";

// importação de imagens
import consultoria from "@/public/img/consultoria.jpg";
import locacao from "@/public/img/imoveis.jpg";
import ecommerce from "@/public/img/ecommerce.jpg";
import devs1 from "@/public/img/devs1.png";
import devs2 from "@/public/img/devs2.png";

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
          Empresa multifacetada que oferece consultoria especializada em
          tecnologia da informação, um e-commerce robusto para venda de produtos
          de informática e serviços de locação de imóveis. Com uma equipe
          altamente qualificada e um representante palestrante renomado no setor
          de TI, nos destacamos pela nossa capacidade de entregar soluções
          inovadoras e personalizadas.
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
                  Aloque um de nossos imóveis, acompanhe a disponibilidade no
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
              soluções tecnológicas avançadas, produtos de informática de alta
              qualidade e serviços de locação de imóveis excepcionais,
            </span>
            <span>&nbsp;</span>
            <span className="text-accent">
              sempre com foco na inovação, na satisfação do cliente e na criação
              de valor sustentável.
            </span>
          </Section.Description>
          <LinkButton
            href={"/"}
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
              src={consultoria}
            />
            <Image
              className="w-full h-80 object-cover rounded-lg"
              alt="imagens ilustrativas "
              src={locacao}
            />
            <Image
              className="w-full h-80 object-cover rounded-lg"
              alt="imagens ilustrativas"
              src={ecommerce}
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
              usabilidade, eficiencia e seguranda do sistema.
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
          <Image className="w-full h-80" alt="Cover" src={devs1} />
          <Image className="w-full h-80" alt="Cover" src={devs2} />
        </div>
      </Section.Root>
      <Footer />
    </div>
  );
}
