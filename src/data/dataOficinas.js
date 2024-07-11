export const saoLuisWorkshops = [
  {
    cidade: "São Luís",
    local: "Escola de Música do Estado do Maranhão – EMEM",
    oficinas: [
      {
        titulo: "Processos Criativos com Piano Brasileiro",
        oficineiro: "Hércules Gomes",
        descricao:
          "Considerado um dos mais representativos pianistas brasileiros da atualidade tanto por suas habilidades técnicas, como pela escolha do seu expressivo repertório que tem inspirado músicos do mundo inteiro a tocarem música brasileira.",
        data: "01/08/2024",
        horario: "10:00h às 12:00h",
        publicoAlvo:
          "Estudantes e professores de música de instituições públicas (EMEM, UFMA, UEMA, SESC, EMBMM...)",
        inscricao:
          "Através de formulário online a ser divulgado a partir do dia 20/07/2024 pelos canais do Festival e Instagram da EMEM",
      },
      {
        titulo: "O processo é a arte: A prática para além dos resultados",
        oficineiro: "Rodrigo Suricato",
        descricao: "Músico e artista integrante da Banda Barão Vermelho",
        data: "02/08/2024",
        horario: "09:30h às 11:30h",
        publicoAlvo:
          "Estudantes e professores de música de instituições públicas (EMEM, UFMA, UEMA, SESC, EMBMM...)",
        inscricao:
          "Através de formulário online a ser divulgado a partir do dia 20/07/2024 pelos canais do Festival e Instagram da EMEM",
      },
    ],
  },
];

export const barreirinhasWorkshops = [
  {
    cidade: "Barreirinhas",
    local: "Auditório do IFMA Campus Barreirinhas",
    oficinas: [
      {
        titulo:
          "Gaita, guitarra e percussão: harmonia, ritmo e construção musical",
        oficineiro:
          "Jefferson Gonçalves e Bitencourt Duo (Júlio Bittencourt e Luciano Bittencourt)",
        descricao:
          "Jefferson Gonçalves (Gaitista/produtor musical) e Bitencourt Duo – formado por Júlio Bittencourt (bateria e percussão) e Luciano Bittencourt (guitarra híbrida e violão).",
        data: "09/08/2024",
        horario: "08:00h às 12:00h",
        publicoAlvo: "Corpo discente e docente do IFMA Campus Barreirinhas",
        inscricao: "Não haverá inscrição",
      },
      {
        titulo: "Cantar: Arte e profissão nos dias atuais",
        oficineiro: "Taryn Szpilman",
        descricao:
          "Cantora, compositora e dubladora. Ficou conhecida pelo público em geral (além do jazz e do blues) por dublar a rainha Elsa no musical da Disney, Frozen.",
        data: "09/08/2024",
        horario: "08:00h às 12:00h",
        publicoAlvo: "Corpo discente e docente do IFMA Campus Barreirinhas",
        inscricao: "Não haverá inscrição",
      },
    ],
  },
];

// // Exemplo de uso do método map para extrair informações de São Luís
// saoLuisWorkshops.map((workshop) => {
//   console.log(`Cidade: ${workshop.cidade}`);
//   console.log(`Local: ${workshop.local}`);
//   workshop.oficinas.map((oficina) => {
//     console.log(`Oficina: ${oficina.titulo}`);
//     console.log(`Oficineiro: ${oficina.oficineiro}`);
//     console.log(`Descrição: ${oficina.descricao}`);
//     console.log(`Data: ${oficina.data}`);
//     console.log(`Horário: ${oficina.horario}`);
//     console.log(`Público Alvo: ${oficina.publicoAlvo}`);
//     console.log(`Inscrição: ${oficina.inscricao}`);
//     console.log("---");
//   });
// });

// // Exemplo de uso do método map para extrair informações de Barreirinhas
// barreirinhasWorkshops.map((workshop) => {
//   console.log(`Cidade: ${workshop.cidade}`);
//   console.log(`Local: ${workshop.local}`);
//   workshop.oficinas.map((oficina) => {
//     console.log(`Oficina: ${oficina.titulo}`);
//     console.log(`Oficineiros: ${oficina.oficineiros}`);
//     console.log(`Descrição: ${oficina.descricao}`);
//     console.log(`Data: ${oficina.data}`);
//     console.log(`Horário: ${oficina.horario}`);
//     console.log(`Público Alvo: ${oficina.publicoAlvo}`);
//     console.log(`Inscrição: ${oficina.inscricao}`);
//     console.log("---");
//   });
// });
