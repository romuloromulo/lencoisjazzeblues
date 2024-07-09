"use client";
import React from "react";
import Image from "next/image";
import { atracoes } from "../../data/index";
import trompete from "../../../public/trompete.png";
import violao from "../../../public/violão.png";
import Link from "next/link";
import { motion } from "framer-motion";
import BannerComponent from "../../components/layout/banner";

function Atrações() {
  const renderAtraçoes = atracoes.map((item, index) =>
    item.imagem !== "" ? (
      <div
        key={index}
        className="flex flex-col items-center justify-center md:min-w-[400px] text-center font-semibold text-zinc-100 text-sm pb-2 bg-background-primary rounded-lg"
      >
        <div className="z-10 rounded-md w-full items-center justify-center  h-[300px]  flex verflow-hidden   mb-2 relative">
          <Link href={`atracoes/${item?.id}`} className="group ">
            <Image
              src={item?.imagem}
              alt={`Foto de ${item?.nome}`}
              layout="fill"
              objectFit="cover"
              className="shadow-lg rounded-md"
              loading="lazy"
              placeholder="blur"
              // sizes="(max-width: 750px)50vw, (max-width:1200px) 30vw, 20vw"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="bg-black bg-opacity-70 absolute h-full w-full top-0 left-0 transition-opacity flex justify-center items-center"
            >
              <div className="bg-background-primary p-2 rounded-lg">
                Saiba mais
              </div>
            </motion.div>
          </Link>
        </div>
        <div className="flex items-center justify-between space-x-4 py-4">
          <Link
            href={`atracoes/${item?.id}`}
            className="flex items-center justify-center"
          >
            <div className="text-lg text-background-white hover:text-zinc-100 hover:-translate-y-2 duration-300">
              {item?.nome}
            </div>{" "}
          </Link>

          <div className="text-primary-pink text-lg">({item?.estado})</div>
        </div>

        {/* <div className="border-b mt-1 border-zinc-700 w-[2rem]" /> */}
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
      <BannerComponent title="Shows" />

      {/* <div className="w-full border-b border-black/50 mb-8"></div> */}

      <div className="container mx-auto z-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 justify-center items-center">
        {renderAtraçoes}
      </div>
    </motion.div>
  );
}

export default Atrações;
