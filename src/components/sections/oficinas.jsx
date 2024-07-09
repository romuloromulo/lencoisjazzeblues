import Image from "next/image";
import React from "react";
import ImageBg from "../../../public/dunas.png";

function Oficinas() {
  return (
    <section
      id="Shows"
      className="relative bg-background-primary mx-auto min-h-svh pb-8 overflow-hidden z-20" // Adicione overflow-hidden para evitar que a imagem vaze para fora da seção
    >
      {/* <Image alt="" src={ImageBg} className="absolute -z-10" fill={true} /> */}
      {/* <Image
        src={ImageBg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="pointer-events-none" // Adicione pointer-events-none para que a imagem não capture eventos de clique
        priority // Adicione priority para garantir que a imagem seja carregada primeiro
      /> */}
      <div className="sm:container mx-auto flex flex-col items-center justify-center z-10">
        <div className="sm:p-4  rounded-full shadow-sm mt-20">
          <h1 className="text-6xl text-yellow-50 font-bold  ">Oficinas</h1>
        </div>
        <div className=" rounded-lg px-4 md:px-8 py-4 mt-8 w-full  md:w-[90%]">
          <p className="text-xl font-bold text-background-white/80">
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
      </div>
    </section>
  );
}

export default Oficinas;
