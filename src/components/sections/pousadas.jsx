import Image from "next/image";
import React from "react";
import dosLencois from "../../../public/pousadas/teste.jpg";
import doPorto from "../../../public/pousadas/pousadaDoPorto.png";
import doRancho from "../../../public/pousadas/pousadaDoRancho.png";
import doRio from "../../../public/pousadas/pousadaDoRio.png";
import granLençois from "../../../public/pousadas/granLençois.png";
import portoPreguiças from "../../../public/pousadas/portoPreguiças.png";
import murici from "../../../public/pousadas/murici.jpg";
import Link from "next/link";

function Pousadas() {
  const pousadas = [
    {
      src: dosLencois,
      name: "Pousada Paraiso dos Lençóis",
      link: "https://www.pousadaparaisodoslencois.com.br/",
    },
    {
      src: doPorto,
      name: "Pousada do Porto",
      link: "https://www.pousadadoporto.com/",
    },
    {
      src: doRancho,
      name: "Pousada do Rancho",
      link: "https://pousadadorancho.com.br/",
    },
    {
      src: doRio,
      name: "Pousada do Rio",
      link: "https://www.pousadadorioma.com.br/",
    },
    {
      src: granLençois,
      name: "Gran Lençóis Flat",
      link: "https://granlencoisflat.com/",
    },
    {
      src: portoPreguiças,
      name: "Porto Preguiças Resort",
      link: "https://portopreguicas.com.br/index.php",
    },
    {
      src: murici,
      name: "Pousada Murici",
      link: "https://www.instagram.com/pousadamurici",
    },
  ];

  return (
    <section
      id="Shows"
      className="relative bg-background-white mx-auto min-h-svh pb-20 overflow-hidden z-20"
    >
      <div className="sm:container mx-auto flex flex-col items-center justify-center z-10">
        <div className="sm:p-4 my-12 flex flex-col items-center justify-center px-8">
          <div className="flex items-center justify-center">
            <h1 className="text-6xl rounded-full shadow-sm font-bold p-4 px-6 bg-background-primary text-center">
              <span className="font-bold md:text-7xl text-5xl text-background-white my-auto">
                Hospedagem
              </span>
            </h1>
          </div>
          <p className="mt-2 font-semibold text-lg text-center w-[80%] md:w-full">
            Conheça as pousadas e hotéis parceiros do festival!
          </p>
        </div>
        <div className="px-4 md:px-8 w-full md:w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pousadas.map((pousada, index) => (
            <Link href={pousada.link} key={index}>
              <div className=" flex flex-col justify-center items-center">
                <div className="overflow-hidden rounded-full  w-56 h-56">
                  <div className="relative w-56 h-56 transform transition-transform duration-300 hover:scale-110">
                    <Image
                      src={pousada.src}
                      layout="fill"
                      objectFit="cover"
                      alt={pousada.name}
                    />
                  </div>
                </div>
                <p className="mt-2 font-semibold text-lg text-center">
                  {pousada.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pousadas;
