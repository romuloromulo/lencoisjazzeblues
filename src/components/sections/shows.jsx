import Image from "next/image";
import React from "react";
import ImageBg from "../../../public/pattern.png";
import { atracoes } from "@/data";

function Shows() {
  return (
    <section
      id="Shows"
      className="relative bg-yellow-100 container -z-20 mx-auto h-svh"
    >
      <div>
        {/* <Image
          alt="Background"
          src={ImageBg}
          layout="fill"
          objectFit="cover"
          className="-z-10 block"
        /> */}
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="p-4  bg-background-primary rounded-full shadow-sm mt-4">
          <p className="text-6xl text-yellow-50 font-bold">Shows</p>
        </div>
      </div>
      <section className="relative">
        <div className=" w-full overflow-hidden">
          <div>
            {" "}
            {[...Array(1)].map((arr) => (
              <div
                key={arr}
                className="flex
                flex-nowrap
                animate-slide
          "
              >
                {atracoes.map((atracao) => (
                  <div
                    key={atracao.nome}
                    className=" relative
                    w-[200px]
                    m-20
                    shrink-0
                    flex
                    items-center
                  "
                  >
                    <div className="flex flex-col items-center justify-center text-center font-semibold text-zinc-100 text-sm ">
                      <div className="z-10 rounded-full  w-[200px] h-[200px] flex items-center justify-center overflow-hidden m-1 mb-2 relative">
                        <Image
                          key={atracao.nome}
                          src={atracao.imagem}
                          alt={atracao.nome}
                          width={288} // Ajuste conforme necessário para manter proporções
                          height={288} // Ajuste conforme necessário para manter proporções
                          layout="responsive" // Garante que a imagem mantenha a proporção correta
                          className="rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export default Shows;
