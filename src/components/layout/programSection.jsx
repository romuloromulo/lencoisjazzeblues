import React from "react";
import { CiLocationOn } from "react-icons/ci";

const ProgramSection = ({ id, title, date, program }) => (
  <div
    id={id}
    className="relative container bg-background-white/80 w-[80%] py-4 rounded-lg shadow-md mb-12"
  >
    <div className="flex flex-col  items-center lg:px-12 text-zinc-900">
      <div className="md:w-auto w-full items-center md:items-start justify-center text-center md:pr-12">
        <h1 className="text-5xl font-bold font-sans whitespace-nowrap">
          {title}
        </h1>
        <p className="text-md sm:text-lg font-semibold">{date}</p>
      </div>
      <ul className="flex flex-col md:flex-row p-4 rounded-xl text-zinc-800  items-start">
        {program.map((dia) => (
          <li key={dia.diaSemana} className="w-1/2">
            <div className="items-center w-full gap-2 mb-2">
              <h1
                className="text-zinc-900 text-2xl md:text-4xl font-bold"
                style={{ whiteSpace: "nowrap" }}
              >
                {dia.diaSemana}
              </h1>
              <h2 className="font-bold mb-4 flex items-center space-x-2">
                <span className="mr-1">
                  <CiLocationOn />
                </span>
                {dia.local}
              </h2>
            </div>
            <ul className="ml-1 md:ml-2 mb-6 text-xl md:text-2xl">
              {dia.eventos.map((evento) => (
                <li key={evento.titulo} className="text-zinc-900 mb-2">
                  <span className="font-bold">{evento.hora} </span>-{" "}
                  {evento.titulo}
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
