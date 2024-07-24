"use client";
import React, { useState, useRef, useEffect } from "react";
import BannerComponent from "../../components/layout/banner";
import { SlArrowDown } from "react-icons/sl";
import {
  saoLuisWorkshops,
  barreirinhasWorkshops,
} from "../../data/dataOficinas";
import Image from "next/image";
import teste from "../../../public/azuleijo2.png";
import Link from "next/link";

function Page() {
  const [openDetails, setOpenDetails] = useState({});

  const toggleDetails = (index) => {
    setOpenDetails((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const renderWorkshops = (workshops, cityName) => (
    <div className="mt-12 w-full ">
      <div className="p-4 text-center md:text-start  md:px-6 bg-background-primary  rounded-full shadow-sm ">
        <h1 className="text-3xl md:text-8xl font-bold text-background-white md:px-8 flex justify-between items-center">
          {cityName}
          <Image
            src={teste}
            alt=""
            width={50}
            height={50}
            className="ml-8 w-12 md:w-20" // w-12 = 50px, w-20 = 80px
          />
        </h1>
      </div>
      {workshops.map((workshop, workshopIndex) => (
        <div key={workshopIndex}>
          <div className="text-2xl font-bold md:px-8 mt-8">
            <p>Local: {workshop.local}</p>
          </div>
          {workshop.oficinas.map((oficina, index) => (
            <div
              key={index}
              className="w-full mb-8 border-gray-500/20 border-b rounded-md shadow-sm md:px-8 py-2 "
            >
              <div className="text-2xl font-semibold">
                <p className="text-3xl mb-2 font-bold">{oficina.titulo}</p>
                <p>Oficineiro: {oficina.oficineiro}</p>
                <p>Data: {oficina.data}</p>
                <p>Horário: {oficina.horario}</p>
              </div>
              <div className="mt-2">
                <div
                  className={`cursor-pointer text-2xl font-bold w-full flex items-center justify-center outline-none transition-transform duration-300 ${
                    openDetails[`${workshopIndex}-${index}`]
                      ? "transform rotate-180"
                      : ""
                  }`}
                  onClick={() => toggleDetails(`${workshopIndex}-${index}`)}
                >
                  <SlArrowDown />
                </div>
                <div
                  className={`overflow-hidden transition-max-height duration-300 ease-in-out px-4 mt-8 ${
                    openDetails[`${workshopIndex}-${index}`]
                      ? "max-h-96"
                      : "max-h-0"
                  }`}
                  style={{
                    maxHeight: openDetails[`${workshopIndex}-${index}`]
                      ? "1000px"
                      : "0px",
                  }}
                >
                  <div className="py-2 text-xl font-bold mb-12">
                    <p className>{oficina.descricao}</p>

                    <p>Inscrição: {oficina.inscricao}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
      {cityName === "São Luís" ? (
        <div className="w-full flex items-center justify-center pb-12 pt-4 ">
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfAPJLtcqpNVPEcGn3tDLrmmX2tK9rNl3oxEp0un52WOBqrfA/viewform">
            <div className="bg-background-primary  hover:text-zinc-100 rounded-lg w-full  py-6 px-8 flex justify-center items-center  text-3xl sm:text-5xl font-bold text-white text-center duration-300 ease-out hover:-translate-y-[8%]">
              Se increva
            </div>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );

  return (
    <div className="bg-background-white min-h-screen ">
      <BannerComponent title="Oficinas" />
      <div className="container md:px-24 ">
        {renderWorkshops(saoLuisWorkshops, "São Luís")}
        {renderWorkshops(barreirinhasWorkshops, "Barreirinhas")}
      </div>
    </div>
  );
}

export default Page;
