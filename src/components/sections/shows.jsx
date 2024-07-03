import Image from "next/image";
import React from "react";
import ImageBg from "../../../public/pattern.png";

function Shows() {
  return (
    <section
      id="Shows"
      className="relative bg-background-white border-t-2 border-primary-pink container -z-20 mx-auto h-svh"
    >
      <div>
        <Image
          alt="Background"
          src={ImageBg}
          layout="fill"
          objectFit="cover"
          className="-z-10 block"
        />
      </div>
    </section>
  );
}

export default Shows;
