"use client";
import React from "react";
import Image from "next/image";
import { atracoes } from "@/data/index";
import Link from "next/link";
import { motion } from "framer-motion";

function Atrações() {
  const renderAtraçoes = atracoes.map((item, index) =>
    item.imagem !== "" ? (
      <div
        key={index}
        className="flex flex-col items-center justify-center text-center font-semibold text-zinc-100 text-sm "
      >
        <div className="z-10 rounded-full  w-[200px] h-[200px] flex items-center justify-center overflow-hidden m-1 mb-2 relative">
          <Link href={`atracoes/${item?.id}`} className="group ">
            <Image
              src={item?.imagem}
              alt={`Foto de ${item?.nome}`}
              layout="fill"
              objectFit="cover"
              className="shadow-lg"
              loading="lazy"
              placeholder="blur"
              sizes="(max-width: 750px)50vw, (max-width:1200px) 30vw, 20vw"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="bg-black bg-opacity-70 absolute h-full w-full top-0 left-0 transition-opacity flex justify-center items-center"
            >
              <div className="bg-yellow-500 p-2 rounded-lg">Saiba mais</div>
            </motion.div>
          </Link>
        </div>
        <Link
          href={`atracoes/${item?.id}`}
          className="flex-col items-center justify-center"
        >
          <div className="text-lg text-yellow-500 hover:text-zinc-100 hover:-translate-y-2 duration-300">
            {item?.nome}
          </div>{" "}
        </Link>
        <div className="text-teal-400">{item?.estado}</div>
        <div className="border-b mx-auto mt-1 border-zinc-700 w-[2rem]" />
      </div>
    ) : null
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      id="Atrações"
      className="min-h-screen relative pb-10"
    >
      <div className="container mx-auto w-full flex items-center justify-center flex-col px-10 md:pt-[75px]">
        {/* <div className="md:w-auto md:h-auto mt-[75px] md:mt-2 w-[200px] pt-12">
          <Image
            src={Logo}
            width={250}
            height={250}
            className="mx-auto z-10"
            alt="Logo Culturarte"
          />
        </div> */}

        <div className="w-full mt-16 flex md:flex-row flex-col items-center justify-center  mb-4 md:mb-0 ">
          <div className=" w-[20%] hidden md:block border-b mt-[-1rem] md:mt-0 mb-4 md:mb-0 border-red-400"></div>
          <div className="relative  flex flex-col w-auto justify-center  md:pr-0 mb-12 ">
            <div className="text-5xl md:text-6xl font-bold text-white relative z-30 mb-1">
              Atrações
            </div>
            <h2 className="text-md font-light text-white text-center w-full relative z-30">
              Conheça as atrações dessa edição!
            </h2>
          </div>
          <div className=" w-[20%] border-b mt-[-1rem] md:mt-0 mb-4 md:mb-0 border-red-400"></div>
        </div>
      </div>
      <div className="container mx-auto z-30 grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center">
        {renderAtraçoes}
      </div>
    </motion.div>
  );
}

export default Atrações;
