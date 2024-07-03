import Image from "next/image";
import ImageBg from "../../public/dunas.png";
import LogoFestival from "../../public/Logo1.png";
import Link from "next/link";
import Shows from "@/components/sections/shows";

export default function Home() {
  return (
    <main>
      <section
        id="Header"
        className="relative container mx-auto min-h-screen bg-background-primary"
      >
        {/* <Image
          src={ImageBg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="-z-10"
        /> */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center sm:space-x-36">
          <div>
            <Image
              src={LogoFestival}
              alt="Logo Festival"
              width={450}
              height={450}
            />
          </div>
          <div className="text-center flex flex-col mx-auto -mt-4 sm:mt-6">
            <div className="mt-8 flex flex-col items-center w-auto">
              <div className="text-zinc-100 text-3xl md:text-4xl lg:flex-col lg:flex">
                <span className="font-bold md:text-7xl text-4xl bg-gradient-to-r from-primary-pink to-primary-yellow bg-clip-text text-transparent">
                  São Luís:
                </span>
                <div>
                  <b> 1 e 3 </b> de Agosto
                </div>
                <div className="text-xl font-semibold mt-2">
                  <span className="">Local:</span>{" "}
                  <Link
                    href="https://maps.app.goo.gl/a12pcFR1EUSSfjVn6"
                    className="font-bold hover:text-purple-600 hover:underline duration-300"
                    target="_blank"
                  >
                    Concha Acústica
                  </Link>
                </div>
              </div>
            </div>
            <div className="pb-8">
              <div className="text-zinc-100 text-3xl md:text-4xl lg:flex-col lg:flex">
                <span className="font-bold md:text-7xl text-4xl bg-gradient-to-r from-primary-yellow to-primary-pink bg-clip-text text-transparent">
                  Barreirinhas:
                </span>
                <div>
                  <b> 9 e 10 </b>de Novembro
                </div>
                <div className="text-xl mt-1">
                  <span className="font-semibold">Local:</span>{" "}
                  <Link
                    href="https://maps.app.goo.gl/BT7DB95nGz2vNzsg7"
                    target="_blank"
                  >
                    <span className="hover:text-red-600 hover:underline font-bold duration-300">
                      Praça da Matriz
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full mx-auto sm:w-full md:w-[12rem] h-auto flex justify-center items-center">
              <Link href="/programacao">
                <div className="bg-gradient-to-r from-orange-500 via-primary-pink to-primary-yellow hover:bg-transparent hover:text-zinc-100 rounded-lg w-full sm:w-[12rem] py-4 px-8 flex justify-center items-center text-2xl font-bold text-white text-center duration-300 ease-out hover:-translate-y-[15%]">
                  Programação
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Shows />
    </main>
  );
}
