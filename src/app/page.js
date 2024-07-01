import Image from "next/image";
import ImageBg from "../../public/pattern.png";

export default function Home() {
  return (
    <>
      <div id="Home" className="h-full w-full absolute -z-10">
        <Image
          src={ImageBg}
          objectFit="cover"
          alt="Imagem de fundo"
          className="-z-10"
        />{" "}
        <Image
          src={ImageBg}
          objectFit="cover"
          alt="Imagem de fundo"
          className="-z-10"
        />{" "}
        <Image
          src={ImageBg}
          objectFit="cover"
          alt="Imagem de fundo"
          className="-z-10"
        />{" "}
        <Image
          src={ImageBg}
          objectFit="cover"
          alt="Imagem de fundo"
          className="-z-10"
        />{" "}
        <Image
          src={ImageBg}
          objectFit="cover"
          alt="Imagem de fundo"
          className="-z-10"
        />{" "}
      </div>
    </>
  );
}
