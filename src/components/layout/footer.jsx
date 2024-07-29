import Image from "next/image";
import React from "react";
// import FooterP from "../../../public/images/logos/patrocineo-footer.jpeg";
import patrocinio from "../../../public/patrocinio2.png";
import { SiInstagram, SiFacebook, SiYoutube } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import Logo from "../../../public/Logo.png";
import Link from "next/link";

function Footer() {
  return (
    <section id="Footer" className="flex flex-col items-center bg-neutral-900">
      <div className="relative w-full md:container md:mt-20  p-0 bg-transparent  md:p-8">
        <Image
          src={patrocinio}
          className="object-cover md:object-contain sm:block w-ful"
          loading="lazy"
          width={1500}
          // sizes="(max-width: 750px)100vw, (max-width:1200px)100vw"
          alt=""
        />
        {/* <Image
            src={FooterP}
            className="object-cover md:object-contain sm:hidden"
            loading="lazy"
            sizes="(max-width: 750px)100vw, (max-width:1200px) 40vw, 30vw"
            alt=""
          /> */}
      </div>

      <div className=" w-full my-5" />
      <div
        id="Teste"
        className="container mt-2 px-4 mx-auto text-white text-2xl grid-cols-2  md:grid-cols-3 gap-4 md:gap-0 grid justify-items-center items-start "
      >
        <div className="w-auto flex flex-col items-start justify-center">
          <div className="w-auto">
            <Link href="/">
              <Image src={Logo} width={200} height={200} alt="logo" />{" "}
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          {" "}
          <div className="text-sm md:text-base mx-auto mb-1">Nos siga!</div>
          <div
            id="Meio"
            className="flex items-center center space-x-4 text-black"
          >
            <Link
              href="https://www.instagram.com/lencoisfestival/"
              target="_blank"
            >
              <div className="bg-gradient-to-r from-primary-yellow  to-primary-pink rounded-full p-2 hover:bg-transparent hover:-translate-y-[15%]  duration-300 ease-out">
                <SiInstagram size={22} />
              </div>
            </Link>
            <Link
              href="hhttps://www.facebook.com/LencoisJazzBluesFestival"
              target="_blank"
            >
              <div className="bg-gradient-to-r from-primary-yellow  to-primary-pink rounded-full p-2 hover:bg-transparent hover:-translate-y-[15%]  duration-300 ease-out">
                <SiFacebook size={22} />
              </div>
            </Link>
            <Link
              href="https://www.youtube.com/@lencoisjazzebluesfestival"
              target="_blank"
            >
              <div className="bg-gradient-to-r from-primary-yellow  to-primary-pink rounded-full p-2 hover:bg-transparent hover:-translate-y-[15%]  duration-300 ease-out">
                <SiYoutube size={22} />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex my-auto ">
          <div>Contato:</div>{" "}
          <div className="ml-2 hover:text-yellow-500 duration-300">
            <Link href="mailto:tutucaviana@yahoo.com.br">
              <AiOutlineMail size={30} />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t w-full border-zinc-900 my-10" />
      <div className="container mx-auto flex flex-col items-center justify-center p-8 text-zinc-100 text-sm  ">
        <div>
          Site desenvolvido por{" "}
          <Link
            href="https://portfolio-romulo.vercel.app/"
            className="hover:text-primary-pink duration-300 underline"
            target="_blank"
          >
            Rômulo Viana
          </Link>
        </div>
        © Lençois Intrumental
      </div>
    </section>
  );
}

export default Footer;
