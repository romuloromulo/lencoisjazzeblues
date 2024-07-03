import Image from "next/image";
import React from "react";
import ImageBg from "../../../public/dunas.png";

function Oficinas() {
  return (
    <section
      id="Shows"
      className="relative bg-background-primary mx-auto min-h-svh pb-8 overflow-hidden" // Adicione overflow-hidden para evitar que a imagem vaze para fora da seção
    >
      {/* <Image
        src={ImageBg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="pointer-events-none" // Adicione pointer-events-none para que a imagem não capture eventos de clique
        priority // Adicione priority para garantir que a imagem seja carregada primeiro
      /> */}
      <div className="w-full flex items-center justify-center z-10">
        <div className="p-4 bg-black rounded-full shadow-sm mt-20">
          <p className="text-6xl text-yellow-50 font-bold">Oficinas</p>
        </div>
      </div>
    </section>
  );
}

export default Oficinas;
