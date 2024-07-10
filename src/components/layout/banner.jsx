import Image from "next/image"; // Importe o componente Image do Next.js
import trompete from "../../../public/trompete.png";
import violao from "../../../public/violão.png";
const BannerComponent = ({ title }) => {
  return (
    <div className="relative min-h-40 px-6 mb-12 py-2 w-auto sm:w-full overflow-hidden justify-between bg-background-primary flex items-center md:justify-center">
      <Image
        src={violao}
        alt=""
        width={100}
        height={100}
        className="absolute left-10"
      />
      <div className="text-5xl whitespace-nowrap md:text-7xl font-bold w-2/3 z-30 mb text-background-white">
        {title}
      </div>
      <Image
        src={trompete}
        alt=""
        width={200}
        height={200}
        className="h-14 translate-y-10 sm:h-auto sm:translate-y-0"
      />
    </div>
  );
};

export default BannerComponent;
