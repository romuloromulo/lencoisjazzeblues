import Image from "next/image";
import React from "react";
import ImageBg from "../../../public/dunas.png";
import Link from "next/link";
import BannerComponent from "../layout/banner";

function Oficinas() {
  return (
    <section
      id="Shows"
      className="relative bg-background-primary mx-auto min-h-svh pb-8 overflow-hidden z-20" // Adicione overflow-hidden para evitar que a imagem vaze para fora da seção
    >
      <div className="sm:container mx-auto flex flex-col items-center justify-center z-10">
        <div className="sm:p-4  rounded-full shadow-sm mt-20">
          <h1 className="text-6xl font-bold p-4 b bg-gradient-to-r from-primary-yellow to-primary-pink rounded-full ">
            <span className="font-bold md:text-7xl text-5xl text-background-white ">
              Oficinas
            </span>
          </h1>
        </div>
        <div className=" rounded-lg px-4 md:px-8 py-4 mt-4 w-full  md:w-[90%]">
          <p className="text-2xl font-semibold text-background-white/80">
            O festival também promoverá oficinas de música em São Luís e
            Barreirinhas, oferecendo experiências enriquecedoras para estudantes
            e professores de música. Em São Luís, na Escola de Música do Estado
            do Maranhão (EMEM), Hércules Gomes e Rodrigo Suricato compartilharão
            suas técnicas e processos criativos, abordando desde o piano
            brasileiro até práticas artísticas. Já em Barreirinhas, no Auditório
            do IFMA Campus, Jefferson Gonçalves, Bitencourt Duo e Taryn Szpilman
            conduzirão oficinas focadas em harmonia musical, ritmo e a profissão
            de cantor nos dias atuais. As inscrições para as oficinas em São
            Luís serão abertas a partir do dia 20/07/2024, enquanto em
            Barreirinhas, as oficinas serão direcionadas exclusivamente aos
            alunos e professores do IFMA Campus.
          </p>
        </div>
        <Link href="/oficinas" className="mt-6">
          <div className="bg-gradient-to-r from-orange-500 via-primary-pink to-primary-yellow hover:bg-transparent hover:text-zinc-100 rounded-lg w-full sm:w-[12rem] py-4 px-8 flex justify-center items-center text-2xl font-bold text-white text-center duration-300 ease-out hover:-translate-y-[15%]">
            Saber mais
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Oficinas;
