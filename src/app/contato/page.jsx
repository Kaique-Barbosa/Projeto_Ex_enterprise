"use client"
import { React } from "react";
import { Header } from "@/components/header/Header";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import Footer from "@/components/footer/Footer";
import Formulario from "@/components/formulario/Formulario";

const contatOPage = () => {


    return (
        <div className="flex flex-col items-center justify-center w-full">
            <Header />

            <SectionTitle css={"!m-0 !p-0"} texto={["Entre em ", "Contato"]} notBotao={true} />

            <h2 className="w-[60%] mx-0 font-medium text-lg text-center">Estamos prontos para ajudar! Preencha o formulário abaixo e responderemos o mais rápido possível.</h2>
            
            {/* <h2 className="w-[60%] mt-24 mx-0 font-medium text-sm text-center">Qual servico quer entrar em contato?</h2> */}

            <Formulario/>

            <Footer />

        </div>
    );
};

contatOPage.propTypes = {};

export default contatOPage;
