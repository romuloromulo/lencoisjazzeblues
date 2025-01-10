import Image from "next/image";
import ImageBg from "../../public/dunas.png";
import LogoFestival from "../../public/Logo1.png";
import Link from "next/link";
import Shows from "../components/sections/shows";
import Oficinas from "../components/sections/oficinas";
import Pousadas from "../components/sections/pousadas";
import Footer from "../components/layout/footer";
// import Livro from "../../public/Livro_lencois.pdf";

export default function Home() {
  return (
    <main>
      <section
        id="Header"
        className="relative container mx-auto min-h-screen bg-background-secondary py-4"
      >
        <div className="absolute inset-0 z-0">
          {/* <Image
            src={ImageBg}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className=""
          /> */}
        </div>
        <div className="relative z-10 mx-auto w-full text-zinc-100 flex-col flex text-center items-center justify-center">
          <div className="md:flex-row flex flex-col font-bold">
            <span className="text-md md:text-lg z-10">
              Ministério da Cultura
            </span>
            <span className="text-md md:text-lg ml-1 z-10">
              E Instituto Cultural Vale
            </span>
          </div>
          <div className="font-thin">apresentam</div>
        </div>
        <div className="relative z-20 w-full flex md:flex-row flex-col items-center justify-center sm:space-x-36">
          <div>
            <Image
              src={LogoFestival}
              alt="Logo Festival"
              width={450}
              height={450}
            />
          </div>
          {/* <div className="text-center flex flex-col mx-auto -mt-4 sm:mt-6 z-50">
            <div className="mt-8 flex flex-col items-center w-auto">
              <div className="text-zinc-100 text-3xl md:text-4xl lg:flex-col lg:flex">
                <span className="font-bold md:text-7xl text-5xl bg-gradient-to-r from-primary-pink to-primary-yellow bg-clip-text text-transparent">
                  São Luís:
                </span>
                <div>
                  <b> 1 e 3 </b> de Agosto
                </div>
                <div className="text-xl font-semibold mt-2">
                  <Link
                    href="https://maps.app.goo.gl/SsRw2ZXmehowb6sf7"
                    className="font-bold hover:text-purple-600 hover:underline duration-300"
                    target="_blank"
                  >
                    Teatro Arthur Azevedo e{" "}
                  </Link>
                  <Link
                    href="https://maps.app.goo.gl/uiLdkW1BR7ajqKWq9"
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
                <span className="font-bold md:text-7xl text-5xl bg-gradient-to-r from-primary-yellow to-primary-pink bg-clip-text text-transparent">
                  Barreirinhas:
                </span>
                <div>
                  <b> 9 e 10 </b> de Agosto
                </div>
                <div className="text-xl mt-1">
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
            <div className="w-full mx-auto sm:w-full mb-8 md:w-[12rem] h-auto flex justify-center items-center">
              <Link href="/programacao">
                <div className="bg-gradient-to-r from-orange-500 via-primary-pink to-primary-yellow hover:bg-transparent hover:text-zinc-100 rounded-lg w-full sm:w-[12rem] py-4 px-8 flex justify-center items-center text-2xl font-bold text-white text-center duration-300 ease-out hover:-translate-y-[15%]">
                  Programação
                </div>
              </Link>
            </div>
          </div> */}
          <div className="text-center flex flex-col mx-auto -mt-12 sm:mt-6 z-50">
            <div className="pb-8">
              <div className="text-zinc-100 text-3xl md:text-4xl lg:flex-col lg:flex">
                <span className="font-bold md:text-5xl text-5xl bg-gradient-to-r from-primary-yellow to-primary-pink bg-clip-text text-transparent ">
                  Baixe nosso livro!
                </span>
              </div>
            </div>
            <div className="w-full mx-auto sm:w-full mb-8 md:w-[12rem] h-auto flex justify-center items-center">
              <a
                href="/Livro_lencois.pdf"
                target="_blank" // Substitua pelo caminho do arquivo PDF
                download="Lençóis Instrumental" // Substitua pelo nome sugerido para o arquivo
                className="bg-gradient-to-r from-orange-500 via-primary-pink to-primary-yellow hover:bg-transparent hover:text-zinc-100 rounded-lg w-full sm:w-[12rem] py-4 px-8 flex justify-center items-center text-2xl font-bold text-white text-center duration-300 ease-out hover:-translate-y-[15%]"
              >
                Baixar
              </a>
            </div>
          </div>
        </div>
      </section>
      <Shows />
      <Oficinas />
      <Pousadas />
    </main>
  );
}
