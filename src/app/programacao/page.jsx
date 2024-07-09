"use client";
import React from "react";
import Image from "next/image";
import trompete from "../../../public/trompete.png";
import violao from "../../../public/violão.png";
import {
  programaçãoBarreirinhas,
  programaçãoSlz,
} from "../../data/dataProgramaçao";
import { CiLocationOn } from "react-icons/ci";
import { motion } from "framer-motion";
import bg from "../../../public/pattern.png";
import ProgramSection from "../../components/layout/programSection";

function Programação() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      id="Atrações"
      className="min-h-screen relative pb-10"
    >
      <Image
        src={bg}
        alt=""
        className="absolute -z-10 opacity-20"
        objectFit="cover"
        fill={true}
      />

      <div className="px-6 mb-12 py-2 w-auto sm:w-full overflow-hidden justify-between bg-background-primary flex items-center md:justify-center">
        <Image src={violao} alt="" width={100} height={100} />
        <div className="text-5xl md:text-7xl font-bold w-2/3 z-30 mb text-background-white">
          Shows
        </div>
        <Image
          src={trompete}
          alt=""
          width={200}
          height={200}
          className="h-14 translate-y-10 sm:h-auto sm:translate-y-0"
        />
      </div>

      <ProgramSection
        id="São Luís"
        title="São Luís"
        date="1 e 3 de Agosto"
        program={programaçãoSlz}
      />
      <ProgramSection
        id="Barreirinhas"
        title="Barreirinhas"
        date="9 e 10 de Agosto"
        program={programaçãoBarreirinhas}
      />
    </motion.div>
  );
}

export default Programação;
