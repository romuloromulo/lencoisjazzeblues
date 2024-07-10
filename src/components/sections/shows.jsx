import Image from "next/image";
import React from "react";
import { atracoes } from "../../data/index";
import Link from "next/link";

function Shows() {
  return (
    <section
      id="Shows"
      className="relative bg-background-white mx-auto md:min-h-svh pb-12 md:pb-20"
    >
      <div className="w-full flex items-center justify-center">
        <div className="p-4 px-6 bg-background-primary rounded-full shadow-sm mt-12">
          <p className="text-6xl text-yellow-50 font-bold">Shows</p>
        </div>
      </div>
      <section className="relative">
        <div className="w-full overflow-hidden mt-12">
          <div>
            {[...Array(1)].map((arr) => (
              <div
                key={arr}
                className="flex flex-nowrap animate-slide space-x-12 hover:animate-paused"
              >
                {atracoes.map((atracao) => (
                  <div
                    key={atracao.id}
                    className="flex flex-col items-center justify-center text-center font-semibold text-zinc-100 text-sm"
                  >
                    <div className="z-20  w-[300px] h-[300px] flex items-center flex-col justify-center overflow-hidden m-1 mb-2 relative rounded-full">
                      <Link
                        key={atracao.id}
                        href={`/atracoes/${atracao.id}`}
                        className="z-20"
                      >
                        <Image
                          key={atracao.nome}
                          src={atracao.imagem}
                          alt={atracao.nome}
                          objectFit="cover"
                          fill={true}
                          className="rounded-full"
                        />
                      </Link>
                    </div>
                    <h2 className="text-2xl font-bold text-background-primary whitespace-nowrap p-2 bg-gradient-to-r from-yellow-50 to-yellow-50/20 rounded-full">
                      {atracao.nome}
                    </h2>
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
