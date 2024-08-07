"use client";
import Image from "next/image";
import Link from "next/link";
import { SiInstagram, SiFacebook, SiYoutube } from "react-icons/si";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import Logo from "../../../public/logoSemSax.png";
import { usePathname } from "next/navigation";

import { useState } from "react";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const pathname = usePathname();
  console.log(pathname);

  function handleNav() {
    console.log("teste");
    setOpenNav((prev) => !prev);
  }

  return (
    <div id="NavBar">
      <nav className="w-full lg:px-15 bg-neutral-900 h-24 z-50 p-10 justify-between items-center px-10 hidden md:flex">
        <div id="MenuEsquerda">
          <Link href="/">
            <Image src={Logo} width={150} height={35} alt="Logo Culturarte" />
          </Link>
        </div>
        <div id="MenuMeio">
          <ul className="text-neutral-50 text-2xl font-bold flex space-x-4">
            <Link href="/">
              <li
                className={`hover:bg-neutral-800/80 duration-300 rounded-md p-2 ${
                  pathname === "/" ? "text-orange-500" : ""
                }`}
              >
                Home
              </li>
            </Link>
            <Link href="/sobre">
              <li
                className={`hover:bg-neutral-800/80 duration-300 rounded-md p-2 ${
                  pathname === "/sobre" ? "text-orange-500" : ""
                }`}
              >
                Sobre
              </li>
            </Link>
            <Link href="/oficinas">
              <li
                className={`hover:bg-neutral-800/80 duration-300 rounded-md p-2 ${
                  pathname === "/oficinas" ? "text-orange-500" : ""
                }`}
              >
                Oficinas
              </li>
            </Link>
            <Link href="/atracoes">
              <li
                className={`hover:bg-neutral-800/80 duration-300 rounded-md p-2 ${
                  pathname === "/atracoes" ? "text-orange-500" : ""
                }`}
              >
                Atrações
              </li>
            </Link>
            <Link href="/programacao">
              <li
                className={`hover:bg-neutral-800/80 duration-300 rounded-md p-2 ${
                  pathname === "/programacao" ? "text-orange-500" : ""
                }`}
              >
                Programação
              </li>
            </Link>
          </ul>
        </div>
        <div id="MenuDireita" className="flex items-center space-x-4">
          <Link
            href="https://www.instagram.com/lencoisfestival/"
            target="_blank"
          >
            <div className="bg-gradient-to-r from-primary-yellow  to-primary-pink rounded-full p-2 hover:bg-transparent hover:-translate-y-[15%]  duration-300 ease-out">
              <SiInstagram size={22} />
            </div>
          </Link>
          <Link
            href="https://www.facebook.com/LencoisJazzBluesFestival"
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
      </nav>

      <nav
        id="Mobile menu"
        className={`transition-transform duration-500 ease-out transform z-50 ${
          !openNav ? "translate-y-0" : "-translate-y-full"
        } flex px-2 md:hidden shadow-sm items-center fixed justify-between w-full h-24 bg-neutral-900 cursor-pointer`}
        style={{ top: 0 }}
      >
        <Link href="/" className="">
          <Image
            alt="Logo Festival Lençois Jazz e Blues"
            src={Logo}
            height={150}
            width={150}
          />
        </Link>
        <div onClick={handleNav} className="m-4">
          <IoMenu size={38} className="text-white font-bold" />
        </div>
      </nav>

      <div
        id="Mobile dropdown menu"
        className={`fixed left-0 top-0 w-screen md:hidden h-full bg-neutral-900 z-50 p-10 overflow-hidden transition-transform duration-500 ease-out ${
          openNav ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
        onClick={handleNav}
      >
        <div className="flex justify-between">
          <Image
            src={Logo}
            width={100}
            height={100}
            alt="logo"
            loading="lazy"
          />
          <AiOutlineClose size={30} className="text-white font-bold" />
        </div>
        <ul className="flex min-w-[12rem] text-2xl flex-col mt-8 font-bold text-zinc-200 gap-2">
          <Link href="/">
            <li
              className={`p-4 hover:bg-neutral-800/80 rounded-md ${
                pathname === "/" ? "bg-neutral-800/80" : ""
              }`}
            >
              Home
            </li>
          </Link>
          <div className="flex-grow border-t z-10 border-neutral-700"></div>
          <Link href="/sobre">
            <li
              className={`p-4 hover:bg-neutral-800/80 rounded-md ${
                pathname === "/sobre" ? "bg-neutral-800/80" : ""
              }`}
            >
              Sobre
            </li>
          </Link>
          <div className="flex-grow border-t z-10 border-neutral-700"></div>
          <Link href="/oficinas">
            <li
              className={`p-4 hover:bg-neutral-800/80 rounded-md ${
                pathname === "/oficinas" ? "bg-neutral-800/80" : ""
              }`}
            >
              Oficinas
            </li>
          </Link>
          <div className="flex-grow border-t z-10 border-neutral-700"></div>
          <Link href="/atracoes">
            <li
              className={`p-4 hover:bg-neutral-800/80 rounded-md ${
                pathname === "/atracoes" ? "bg-neutral-800/80" : ""
              }`}
            >
              Atrações
            </li>
          </Link>
          <div className="flex-grow border-t z-10 border-neutral-700"></div>
          <Link href="/programacao">
            <li
              className={`p-4 hover:bg-neutral-800/80 rounded-md ${
                pathname === "/programacao" ? "bg-neutral-800/80" : ""
              }`}
            >
              Programação
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
