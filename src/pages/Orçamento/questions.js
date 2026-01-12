export const questionFlows = {
  initial: {
    cardapio: [
      {
        id: "tipo_negocio",
        label: "Qual o seu tipo de negócio?",
        type: "select",
        options: ["Restaurante", "Cafeteria", "Bar", "Food Truck", "Outro"],
        required: true,
        placeholder: "Selecione uma opção"
      },
    ],
    ecommerce: [
      {
        id: "estagio",
        label: "Qual o estágio do seu e-commerce?",
        type: "select",
        options: [
          "Ainda não tenho, quero criar do zero",
          "Já tenho mas preciso melhorar",
          "Preciso migrar de plataforma"
        ],
        required: true,
        placeholder: "Selecione uma opção"
      },
    ],
    gestaoAgendamentos: [
      {
        id: "tipo_agendamento",
        label: "Qual tipo de agendamento você precisa gerenciar?",
        type: "select",
        options: [
          "Aulas",
          "Barbearia",
          "Clínica",
          "Consultorias",
          "Eventos",
          "Salão",
          "Outro"
        ],
        required: true,
        placeholder: "Selecione uma opção"
      },
    ],
    design: [
      {
        id: "objetivo_design",
        label: "O que você precisa criar?",
        type: "select",
        options: ["Identidade Visual Completa", "Apenas Logo", "Redesign de Marca", "Materiais Gráficos", "Outro"],
        required: true,
        placeholder: "Selecione uma opção"
      },
    ],
    landingPage: [
      {
        id: "objetivo_principal",
        label: "Qual o objetivo principal da página?",
        type: "select",
        options: ["Gerar leads (captura de contatos)", "Venda direta de produto", "Divulgação de serviço", "Outro"],
        required: true,
        placeholder: "Selecione uma opção"
      },
    ],
    materialPromocional: [
      {
        id: "tipos",
        label: "Quais materiais você precisa?",
        type: "text",
        required: true,
        placeholder: "Ex: Flyer, Banner, Post para Instagram..."
      },
    ],
    portfolio: [
      {
        id: "area_atuacao",
        label: "Qual sua área de atuação?",
        type: "text",
        required: true,
        placeholder: "Ex: Arquitetura, Fotografia, Design..."
      },
    ],
    siteInstitucional: [
      {
        id: "objetivo_site",
        label: "Qual o principal objetivo do site?",
        type: "select",
        options: [
          "Apresentar a empresa",
          "Divulgar serviços",
          "Atrair investidores",
          "Outro"
        ],
        required: true,
        placeholder: "Selecione uma opção"
      },
    ],
    outro: [
      {
        id: "descricao",
        label: "Descreva brevemente sua ideia:",
        type: "textarea",
        required: true,
        placeholder: "Conte um pouco sobre o que você precisa..."
      },
    ],
  },
  detailed: {} 
};
