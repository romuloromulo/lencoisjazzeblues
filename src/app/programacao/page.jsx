"use client";
import React from "react";
import Image from "next/image";
import {
  programaçãoBarreirinhas,
  programaçãoSlz,
} from "../../data/dataProgramaçao";
import { motion } from "framer-motion";
import bg from "../../../public/pattern.png";
import ProgramSection from "../../components/layout/programSection";
import BannerComponent from "../../components/layout/banner";
import prog from "../../../public/ProgramaçãoDias/Programação Dias/Programação_Feed_São Luis_01.png";

function Programação() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      id="Atrações"
      className="min-h-screen relative pb-10 bg-background-white"
    >
      {/* <Image
        src={bg}
        alt=""
        className="absolute -z-10 opacity-20"
        objectFit="cover"
        fill={true}
      /> */}

      <BannerComponent title="Programação" />
      {/* <Image src={prog} alt="" width={400} height={400} /> */}
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
