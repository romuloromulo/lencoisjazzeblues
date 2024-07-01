"use client";
import Image from "next/image";
import Link from "next/link";
import { SiInstagram, SiFacebook } from "react-icons/si";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import Logo from "../../../public/logoSemSax.png";

import { useState } from "react";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  function handleNav() {
    console.log("teste");
    setOpenNav((prev) => !prev);
  }

  return (
    <div id="NavBar">
      <nav className="max-w-[1200px] w-full lg:px-15 p-1  justify-between items-center px-10 hidden  sm:flex">
        <div id="MenuEsquerda">
          <Link href="/">
            {/* <Image src={Logo} width={150} height={35} alt="Logo Culturarte" /> */}
          </Link>
        </div>
        <div id="MenuMeio">
          <ul className="flex justify-center items-center sm:space-x-4 md:space-x-8 lg:space-x-12 text-zinc-100 text-lg">
            <Link href="/">
              <li className=" ">
                <p className="relative hover:text-white group p-2">
                  Home
                  <span className="absolute left-0 bottom-1 w-full h-1 bg-red-600  rounded-full -z-10 group-hover:h-[80%]  group-hover:transition-all"></span>
                </p>
              </li>
            </Link>
            <Link href="/#Sobre">
              <li className=" ">
                <p className="relative hover:text-white group p-2">
                  Sobre
                  <span className="absolute left-0 bottom-1 w-full h-1 bg-teal-600  rounded-full -z-10 group-hover:h-[80%]  group-hover:transition-all"></span>
                </p>
              </li>
            </Link>
            <Link href={`/atracoes`}>
              <li className=" ">
                <p className="relative hover:text-white group p-2">
                  Atrações
                  <span className="absolute left-0 bottom-1 w-full h-1 bg-orange-600  rounded-full -z-10 group-hover:h-[80%]  group-hover:transition-all"></span>
                </p>
              </li>
            </Link>
            <Link href={`/programacao`}>
              <li className=" ">
                <p className="relative hover:text-white group p-2">
                  Programação
                  <span className="absolute left-0 bottom-1 w-full h-1 bg-purple-600  rounded-full -z-10 group-hover:h-[80%]  group-hover:transition-all"></span>
                </p>
              </li>
            </Link>
          </ul>
        </div>
        <div id="MenuEsquerda" className="flex items-center center space-x-4">
          <Link
            href="https://www.instagram.com/culturarte_maranhao/"
            target="_blank"
          >
            <div className="bg-red-600 border-2 border-red-600  rounded-full p-2 hover:bg-transparent hover:-translate-y-[15%]  duration-300  hover:text-white ease-out">
              <SiInstagram size={22} />
            </div>
          </Link>
          <Link
            href="https://www.facebook.com/LencoisJazzBluesFestival"
            target="_blank"
          >
            <div className="bg-yellow-400 border-2 border-yellow-400  rounded-full p-2 hover:bg-transparent hover:-translate-y-[15%] hover:text-white  duration-300 ease-out">
              <SiFacebook size={22} />
            </div>
          </Link>
        </div>
      </nav>

      <nav
        className={`transition-transform duration-500 ease-out transform ${
          !openNav ? "translate-y-0" : "-translate-y-full"
        } flex px-2 sm:hidden shadow-sm items-center fixed justify-between w-full h-24 bg-neutral-900 cursor-pointer`}
        style={{ top: 0 }}
      >
        <div className="">
          <Image
            alt="Logo Festival Lençois Jazz e Blues"
            src={Logo}
            height={150}
            width={150}
          />
        </div>
        <div onClick={handleNav} className="m-4">
          <IoMenu size={38} className="text-white font-bold" />
        </div>
      </nav>

      <div
        className={`fixed left-0 top-0 w-screen sm:hidden h-[80%] bg-neutral-900 z-50 p-10 overflow-hidden transition-transform duration-500 ease-out ${
          openNav ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
        onClick={handleNav}
      >
        <div className="flex justify-between flex-row-reverse">
          {/* <Image
            src={logoNav}
            width={100}
            height={100}
            alt="logo"
            loading="lazy"
          /> */}
          <AiOutlineClose size={30} className="text-white font-bold" />
        </div>
        <ul className="flex min-w-[12rem] w-[20%] text-xl flex-col mt-8 font-bold  text-zinc-200 gap-2">
          <Link href="" className="my-4">
            <li>Home</li>
          </Link>

          <Link href="/sobre " className="my-4">
            <li>Sobre</li>
          </Link>
          <Link href="/atracoes" className="my-4">
            <li>Atrações</li>
          </Link>
          <Link href="/programaçao" className="my-4">
            <li>Programação</li>
          </Link>
        </ul>
        {/* <Image
          src={baseDireita}
          className="botton-0 right-0 absolute"
          width={170}
          height={170}
          loading="lazy"
          alt="layout"
        /> */}
      </div>
    </div>
  );
}
