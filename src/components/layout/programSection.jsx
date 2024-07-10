import Image from "next/image";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import bg from "../../../public/dunas.png";
import logoSlz from "../../../public/sao luis.png";

const ProgramSection = ({ id, title, date, program }) => (
  <div
    id={id}
    className="relative container bg-background-secondary w-[95%] sm:w-[80%] py-4 rounded-lg shadow-md mb-12"
  >
    <Image src={bg} alt="bg" fill={true} className="absolute -z-0" />
    <div className="flex flex-col  items-center lg:px-12 text-background-white">
      <div className="md:w-auto w-full items-center md:items-start justify-center text-center md:pr-12">
        <h1 className="text-5xl font-bold font-sans whitespace-nowrap">
          <Image src={logoSlz} alt="" width={400} height={400} />
        </h1>
        <p className="text-md sm:text-lg font-semibold">{date}</p>
      </div>
      <ul className="flex flex-col md:space-x-4 md:flex-row p-4 rounded-xl  items-start z-10">
        {program.map((dia) => (
          <li key={dia.diaSemana} className="md:w-1/2">
            <div className="items-center w-full gap-2 mb-2">
              <h1
                className=" text-2xl md:text-4xl font-bold"
                style={{ whiteSpace: "nowrap" }}
              >
                {dia.diaSemana}
              </h1>
              <h2 className="font-bold mb-4 flex items-center ">
                <span className="mr-1">
                  <CiLocationOn />
                </span>
                {dia.local}
              </h2>
            </div>
            <ul className="  mb-6 text-xl md:text-2xl ">
              {dia.eventos.map((evento) => (
                <li key={evento.titulo} className="mb-2 font-bold">
                  <span className="font-bold">{evento.hora} </span>-{" "}
                  {evento.titulo.toUpperCase()}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ProgramSection;
