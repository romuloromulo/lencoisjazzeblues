import React from "react";
import bg from "../../../public/pattern.png";
import { motion } from "framer-motion";
import Image from "next/image";
import trompete from "../../../public/trompete.png";
import violao from "../../../public/violão.png";
import BannerComponent from "../../components/layout/banner";
function page() {
  return (
    <div className="w-full">
      {/* <Image
        src={bg}
        alt=""
        className="absolute -z-10 opacity-20"
        objectFit="cover"
        fill={true}
      /> */}
      <BannerComponent title="O Festival" />

      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="p-4 bg-background-primary rounded-full shadow-sm mb-8">
          <h1 className="text-4xl font-bold text-background-white">
            15 anos de Lençóis Jazz e Blues
          </h1>
        </div>
        <div className="w-[80%] flex flex-col justify-center items-center mb-24">
          <p className="text-xl font-bold text-background-primary/80">
            Democrático, inclusivo e diverso, o Lençóis Instrumental 2024
            celebra os 15 anos do Lençóis Jazz e Blues Festival com boas
            atrações musicais e entrada gratuita. O festival será realizado dias
            1º e 3 de agosto em São Luís, e de 9 a 10 de agosto em Barreirinhas,
            com oficinas, DJs, shows de artistas locais e nacionais, além da
            Feira Cultural DELAS na área externa da Concha Acústica em São Luís.
            A edição de 15 anos do Lençóis Instrumental 2024 começa em 1º de
            agosto no Teatro Arthur Azevedo. A abertura ocorrerá às 18h com o
            lançamento do livro/álbum &quot;O Legado dos Lençóis Jazz &amp;
            Blues Festival&quot; exclusivo para convidados, no Teatro Arthur
            Azevedo, localizado na Rua do Sol, Centro Histórico de São Luís. O
            evento principal começa às 20h com entrada solidária: troque seu
            ingresso por 1 kg de alimento não perecível. O Lençóis Instrumental
            2024 reunirá atrações nacionais e locais em São Luís e Barreirinhas.
            No line-up, nomes como Hercules Gomes, Hamilton de Holanda, Renato
            Borghetti, Ana Cañas, Zeca Baleiro, Rodrigo Suricato, Seu
            Raimundinho, Ruy Mário, Andrezinho, Jefferson e Taryn Spilmann,
            entre outros. Em seus 15 anos, o festival realiza oficinas para
            troca de informações entre músicos convidados e artistas locais,
            promovendo uma conexão essencial. O Lençóis Instrumental 2024 conta
            com o patrocínio do Instituto Cultural Vale e Banco do Nordeste,
            através da Lei Federal de Incentivo à Cultura. Realização: Tutuca
            Viana Produções.
          </p>
          <div className="max-w-[80%] p-4 bg-background-primary rounded-full shadow-sm mb-8 relative mt-8">
            <h1 className="text-4xl font-bold text-background-white text-center">
              Histórico do Lençóis Jazz e Blues Festival
            </h1>
          </div>
          <p className="text-xl font-bold text-background-primary/80">
            Há 15 anos, em 2009, nasceu em Barreirinhas o Lençóis Jazz e Blues
            Festival, pioneiro no Maranhão e o primeiro do gênero na cidade sob
            o comando do músico maranhense Tutuca Viana. O festival se
            consolidou como um evento renomado, reconhecido nacional e
            internacionalmente, com legados importantes nos âmbitos econômico,
            turístico, cultural e social. Os cenários escolhidos, São Luís, ilha
            Patrimônio da Humanidade, e Barreirinhas, nos Lençóis Maranhenses,
            um dos mais imponentes e belos santuários ecológicos do planeta,
            contribuem para a singularidade do evento.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
