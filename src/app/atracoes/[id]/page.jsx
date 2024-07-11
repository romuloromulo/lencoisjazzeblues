"use client";
import Image from "next/image";
import React from "react";
import { atracoes } from "../../../data/index";
import { SiInstagram, SiYoutube, SiSpotify } from "react-icons/si";
import { BsCalendar3, BsClock } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
import { motion } from "framer-motion";
import trompete from "../../../../public/trompete.png";
import bg from "../../../../public/pattern.png";

function Page({ params }) {
  console.log(params);
  const artista = atracoes.find((item) => item.id === params.id);
  console.log("ARTISTA", artista);

  if (!artista) {
    return <div>Artista não encontrado</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      className="min-h-screen  mx-auto md:pb-24 bg-background-white relative -z-0"
    >
      <Image
        src={bg}
        alt=""
        className="absolute -z-10 opacity-20"
        objectFit="cover"
        fill={true}
      />

      <div
        id="Container"
        className="px-2 md:px-10 flex lg:flex-row flex-col text-background-primary items-start
         w-full justify-center h-full md:pt-[30px] lg:space-x-8 container mx-auto"
      >
        <div
          id="Textos"
          className="flex flex-col items-center justify-center md:items-start md:justify-start w-full"
        >
          <div className="hidden text-background-primary font-bold md:block flex-col w-full items-start text-base mt-4">
            <div className="flex mt-1 items-center text-base ml-1">
              <div className="mr-2 flex space-x-1 items-center justify-center">
                <BsCalendar3 size={12} />
                <div>{artista?.data || "Data não disponível"}</div>
              </div>
              <div className="mr-2 flex space-x-1 items-center justify-center">
                <BsClock size={12} />
                <div>{artista.horario || "Horário não disponível"}</div>
              </div>
              <div className="flex items-center justify-center space-x-1">
                <CiLocationOn size={20} />
                <div>{artista.lugar || "Local não disponível"}</div>
              </div>
            </div>
          </div>
          <div className="flex text-center w-full flex-col lg:flex-row   items-center bg-blue mt-2">
            <div className="text-4xl text-center  md:text-left md:text-5xl font-bold text-background-primary z-20 ">
              {artista.nome}
            </div>
            <div className="md:text-4xl text-3xl font-semibold text-background-primary/80 ml-2">
              ({artista.estado || "Estado não disponível"})
            </div>
          </div>

          <div className="text-lg text-start mt-2 text-background-primary bg-white/50 p-4 rounded-lg font-semibold">
            {artista.release || "Release não disponível"}
          </div>
          <ul className="lg:flex gap-4 mt-4 hidden">
            {artista.instagram && (
              <li className="hover:text-yellow-500 duration-300 hover:-translate-y-2">
                <Link href={artista.instagram}>
                  <SiInstagram size={30} />
                </Link>
              </li>
            )}
            {artista.youtube && (
              <li className="hover:text-yellow-500 duration-300 hover:-translate-y-2">
                <Link href={artista.youtube}>
                  <SiYoutube size={30} />
                </Link>
              </li>
            )}
            {artista.spotify && (
              <li className="hover:text-yellow-500 duration-300 hover:-translate-y-2">
                <Link href={artista.spotify}>
                  <SiSpotify size={30} />
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div
          className="w-full mx-auto sm:w-1/2 order-first lg:order-last flex flex-col items-center justify-start
        "
        >
          <div className="text-zinc-100 font-bold mb-4 flex justify-between w-full items-center text-xs md:hidden">
            <div className="flex items-center justify-center space-x-1">
              <CiLocationOn size={20} />
              <div>{artista.lugar || "Local não disponível"}</div>
            </div>
            <div className="flex mt-1 items-center text-base">
              <div className="mr-2 flex space-x-1 items-center justify-center">
                <BsCalendar3 size={12} />
                <div>{artista.data || "Data não disponível"}</div>
              </div>
              <div className="mr-2 flex space-x-1 items-center justify-center">
                <BsClock size={12} />
                <div>{artista.horario || "Horário não disponível"}</div>
              </div>
            </div>
          </div>
          <div className="p-4 md:p-8 rounded-full">
            <div
              key={artista.id}
              className="z-10 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden m-1 relative p-8"
            >
              <Image
                src={artista.imagem}
                alt={`Foto de ${artista.nome}`}
                layout="fill"
                objectFit="cover"
                className="shadow-lg absolute top-0 left-0"
              />
            </div>
          </div>
          <ul className="flex gap-4 mt-4 lg:hidden">
            {artista.instagram && (
              <li className="hover:text-yellow-500 duration-300 hover:-translate-y-2">
                <Link href={artista.instagram}>
                  <SiInstagram size={30} />
                </Link>
              </li>
            )}
            {artista.youtube && (
              <li className="hover:text-yellow-500 duration-300 hover:-translate-y-2">
                <Link href={artista.youtube}>
                  <SiYoutube size={30} />
                </Link>
              </li>
            )}
            {artista.spotify && (
              <li className="hover:text-yellow-500 duration-300 hover:-translate-y-2">
                <Link href={artista.spotify}>
                  <SiSpotify size={30} />
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="px-2 flex items-center w-full justify-between text-sm md:hidden mb-8">
          <div>
            <Link href="/atracoes">
              <div className="text-sm px-4 font-semibold w-auto p-2 mt-8 whitespace-nowrap bg-background-secondary border-2 text-background-white  rounded-full hover:bg-transparent hover:-translate-y-2 hover:text-yellow-500 duration-300 cursor-pointer">
                Outras Atrações
              </div>
            </Link>
          </div>
          <div>
            <Link href="/programacao">
              <div className=" text-sm px-4 font-semibold p-2 mt-8 bg-purple-600 whitespace-nowrap bg-primary-pink text-background-white rounded-full hover:bg-transparent hover:-translate-y-2 hover:text-purple-600 duration-300 cursor-pointer">
                Programação completa
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Page;
