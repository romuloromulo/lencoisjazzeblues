"use client";
import React from "react";
import Image from "next/image";
import { atracoes } from "../../data/index";
import bg from "../../../public/dunas.png";
import Link from "next/link";
import { motion } from "framer-motion";

function Atrações() {
  const renderAtraçoes = atracoes.map((item, index) =>
    item.imagem !== "" ? (
      <div
        key={index}
        className="flex flex-col items-center justify-center text-center font-semibold text-zinc-100 text-sm bg-background-primary rounded-lg"
      >
        <div className="z-10 rounded-md w-[300px] bg-blue-300 h-[300px] flex items-center justify-center overflow-hidden m-1 mb-2 relative">
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
          <div className="text-lg text-background-white hover:text-zinc-100 hover:-translate-y-2 duration-300">
            {item?.nome}
          </div>{" "}
        </Link>
        <div className="text-background-white">{item?.estado}</div>
        <div className="border-b mt-1 border-zinc-700 w-[2rem]" />
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
      className="min-h-screen relative pb-10 bg-background-white"
    >
      <div className=" w-full flex items-center justify-center flex-col">
        <div className="px-6 my-12 py-2 bg-background-primary rounded-full">
          <div className="text-5xl md:text-6xl font-bold   z-30 mb-1 w-full text-background-white">
            Shows
          </div>

          {/* <h2 className="text-md font-light text-white text-center w-full relative z-30">
              Conheça as atrações dessa edição!
            </h2> */}
        </div>
        {/* <div className="w-full border-b border-black/50 mb-8"></div> */}
      </div>
      <div className="container mx-auto z-30 grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center">
        {renderAtraçoes}
      </div>
    </motion.div>
  );
}

export default Atrações;
