"use client";
import React, { useState } from "react";
import Image from "next/image";

import {
  programaçãoBarreirinhas,
  programaçãoSlz,
} from "../../data/dataProgramaçao";

import { motion } from "framer-motion";
import { BiDownArrow } from "react-icons/bi";

function Programação() {
  const [programaçãoBarreirinha] = useState(programaçãoBarreirinhas);
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      id="Programação"
      className="min-h-screen relative pt-[75px]"
    >
      <div className="container mx-auto w-full flex items-start justify-between lg:pr-12 flex-col lg:flex-row ">
        <div className="w-full  flex md:flex-row flex-col items-center justify-between gap-4">
          <div className="relative p-12 md:pr-0 z-20">
            {/* <span className="absolute p-10 md:p-14 rounded-full bg-red-500 -z-40 top-[25%]  md:top-[15%] "></span>
              <span className="absolute p-6 md:p-8 rounded-full bg-yellow-500 -z-40 right-[25%] top-[35%] md:right-[15%] "></span> */}
            <div className="text-4xl text-center md:text-left md:text-6xl font-bold text-zinc-100 z-20 md:whitespace-nowrap">
              {" "}
              Programação 2023
            </div>
          </div>
          <div className="sm:w-[90%] w-[50%] border-b mt-[-1rem] md:mt-0 mb-4 md:mb-0 border-red-400 "></div>
        </div>
      </div>
      <div
        id="Barreirinhas"
        className=" container mx-auto  w-full flex md:flex-row flex-col  items-center  lg:px-12  md:mb-8 relative  text-zinc-100"
      >
        <div className="flex-col md:w-auto w-full flex items-center md:items-start justify-center md:justify-start border-white md:border-r md:border-red-300 md:pr-12">
          <h1 className="text-5xl font-semibold font-sans text-zinc-100">
            Barreirinhas
          </h1>
          <p className="text-md sm:text-lg font-semibold">
            2 a 4 de Novembro, <br className="hidden md:block" />
            Praça da Matriz
          </p>
          <p className="text-zinc-100 md:hidden mt-4">
            <BiDownArrow size={22} />
          </p>
        </div>
        <div className="w-full flex flex-col p-4  mx-4 rounded-xl text-zinc-800 shadow-md mb-8 ">
          <div>
            <ul>
              {programaçãoBarreirinha.map((dia) => (
                <li key={dia.diaSemana}>
                  <div className="flex items-center w-full gap-2 mb-2 text-zinc-100">
                    <h1
                      className="text-xl md:text-4xl font-bold"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {" "}
                      {dia.diaSemana}
                    </h1>{" "}
                    <div className="border-b-2  border-yellow-200 w-full" />
                  </div>
                  <ul className="ml-1 md:ml-2 mb-6 text-zinc-100">
                    {dia.eventos.map((evento) => (
                      <li key={evento.titulo} className="font-semibold mb-4">
                        {evento.hora} - {evento.titulo}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        id="São Luís"
        className="w-full  min-h-screen bg-zinc-100 relative md:pt-[75px]"
      >
        <div className="container mx-auto  flex md:flex-row flex-col  items-center  lg:px-12 text-zinc-900 py-10 md:py-20 ">
          <div className="flex-col md:w-auto w-full flex items-center md:items-start justify-center md:justify-start border-white md:border-r md:border-red-300 md:pr-12">
            <h1 className="text-5xl font-semibold font-sans ">São Luís</h1>
            <p className="text-md sm:text-lg font-semibold">
              10 a 12 de Novembro, Convento das Mercês
            </p>
            <p className="text-zinc-900 md:hidden mt-4">
              <BiDownArrow size={22} />
            </p>
          </div>
          <div className="w-full flex flex-col p-4  mx-4 rounded-xl text-zinc-800 shadow-lg">
            <div>
              <ul>
                {programaçãoSlz.map((dia) => (
                  <li key={dia.diaSemana}>
                    <div className="flex items-center w-full gap-2 mb-2">
                      <h1
                        className="text-xl text-zinc-900 md:text-4xl font-bold"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {" "}
                        {dia.diaSemana}
                      </h1>{" "}
                      <div className="border-b-2 border-purple-200 w-full" />
                    </div>
                    <ul className="ml-1 md:ml-2 mb-6">
                      {dia.eventos.map((evento) => (
                        <li
                          key={evento.titulo}
                          className="font-semibold mb-4 text-zinc-900"
                        >
                          {evento.hora} - {evento.titulo}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Programação;
