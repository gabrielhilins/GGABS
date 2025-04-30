export const questionFlows = {
  initial: {
    cardapio: [
      {
        id: "tipo_negocio",
        label: "Que tipo de estabelecimento você tem?",
        type: "select",
        options: ["Restaurante", "Cafeteria", "Bar", "Food Truck", "Outro"],
        required: true,
        placeholder: "select_option"
      },
    ],
    ecommerce: [
      {
        id: "estagio",
        label: "Em que estágio está seu e-commerce?",
        type: "select",
        options: [
          "Ainda não tenho, quero criar do zero",
          "Já tenho mas preciso melhorar",
          "Preciso migrar de plataforma"
        ],
        required: true,
        placeholder: "select_option"
      },
    ],
    gestaoEmpresarial: [
      {
        id: "tamanho_empresa",
        label: "Quantos funcionários sua empresa tem?",
        type: "select",
        options: ["1-5", "6-15", "16-50", "51+"],
        required: true,
        placeholder: "select_option"
      },
    ],
    gestaoPedidos: [
      {
        id: "modelo_negocio",
        label: "Qual seu modelo principal de vendas?",
        type: "select",
        options: ["Delivery", "Balcão", "Mesa", "Misto", "Outro"],
        required: true,
        placeholder: "select_option"
      },
    ],
    gestaoAgendamentos: [
      {
        id: "tipo_agendamento",
        label: "Que tipo de agendamento você precisa gerenciar?",
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
        placeholder: "select_option"
      },
    ],
    design: [
      {
        id: "contexto",
        label: "Precisa de identidade visual para:",
        type: "select",
        options: ["Novo negócio", "Reposicionamento", "Atualização", "Outro"],
        required: true,
        placeholder: "select_option"
      },
    ],
    landingPage: [
      {
        id: "objetivo_principal",
        label: "Qual o objetivo principal da página?",
        type: "select",
        options: ["Gerar leads", "Vender produto", "Divulgar serviço", "Outro"],
        required: true,
        placeholder: "select_option"
      },
    ],
    materialPromocional: [
      {
        id: "tipos",
        label: "Quais materiais específicos precisa?",
        type: "text",
        required: true,
        placeholder: "ex_flyer_banner_instagram"
      },
    ],
    portfolio: [
      {
        id: "area_atuacao",
        label: "Qual sua área de atuação?",
        type: "select",
        options: [
          "Arquitetura",
          "Coaching",
          "Corretoria de Imóveis",
          "Design",
          "Fotografia",
          "Medicina",
          "Nutrição",
          "Personal Training",
          "Psicologia",
          "Outro"
        ],
        required: true,
        placeholder: "select_option"
      },
    ],
    siteInstitucional: [
      {
        id: "publico_alvo",
        label: "Quem é seu público principal?",
        type: "select",
        options: [
          "Consumidores",
          "Empresas",
          "Estudantes",
          "Consumidores e Empresas também"
        ],
        required: true,
        placeholder: "select_option"
      },
    ],
    outro: [
      {
        id: "tipo_projeto",
        label: "Que tipo de projeto você imagina?",
        type: "select",
        options: ["Aplicativo", "Design", "Sistema", "Site", "Plataforma", "Outro"],
        required: true,
        placeholder: "select_option"
      },
    ],
  },
  detailed: {
    cardapio: [
      {
        id: "identidade_visual",
        label: "Você já possui uma identidade visual do projeto (logo, cores, tipografia etc)?",
        type: "select",
        options: ["Sim, completa", "Parcial", "Não, preciso criar"],
        required: true,
        placeholder: "select_option"
      },
      {
        id: "digital",
        label: "Deseja versão digital com QR Code?",
        type: "select",
        options: ["Sim, quero cardápio digital", "Não, apenas versão impressa"],
        required: true,
        placeholder: "select_option"
      },
      {
        id: "itens",
        label: "Quantos itens terá aproximadamente?",
        type: "textarea",
        required: false,
        placeholder: "ex_dishes_drinks"
      },
    ],
    ecommerce: [
      {
        id: "identidade_visual",
        label: "Você já possui uma identidade visual do projeto (logo, cores, tipografia etc)?",
        type: "select",
        options: ["Sim, completa", "Parcial", "Não, preciso criar"],
        required: true,
        placeholder: "select_option"
      },
      {
        id: "produtos",
        label: "Quantos produtos diferentes pretende vender?",
        type: "number",
        min: 1,
        required: true,
        placeholder: "enter_number"
      },
      {
        id: "integracao",
        label: "Precisa de integração com:",
        type: "select",
        options: ["Mercado Pago", "PagSeguro", "Outro gateway", "Ainda não sei"],
        required: false,
        placeholder: "select_option"
      },
    ],
    gestaoEmpresarial: [
      {
        id: "modulos",
        label: "Quais áreas precisam de gestão?",
        type: "text",
        required: true,
        placeholder: "ex_finance_inventory_hr"
      },
      {
        id: "mobilidade",
        label: "Precisa de acesso mobile?",
        type: "select",
        options: ["Sim, essencial", "Desejável", "Não necessário"],
        required: true,
        placeholder: "select_option"
      },
      {
        id: "integracao_existente",
        label: "Precisa integrar com outros sistemas?",
        type: "select",
        options: ["Sim", "Não", "Não sei"],
        required: false,
        placeholder: "select_option"
      },
    ],
    gestaoPedidos: [
      {
        id: "identidade_visual",
        label: "Você já possui uma identidade visual do projeto (logo, cores, tipografia etc)?",
        type: "select",
        options: ["Sim, completa", "Parcial", "Não, preciso criar"],
        required: true,
        placeholder: "select_option"
      },
      {
        id: "volume",
        label: "Quantos pedidos por dia, em média?",
        type: "number",
        min: 1,
        required: true,
        placeholder: "enter_number"
      },
    ],
    gestaoAgendamentos: [
      {
        id: "volume_agendamentos",
        label: "Quantos agendamentos por dia, em média?",
        type: "number",
        min: 1,
        required: true,
        placeholder: "enter_number"
      },
      {
        id: "identidade_visual",
        label: "Você já possui uma identidade visual do projeto (logo, cores, tipografia etc)?",
        type: "select",
        options: ["Sim, completa", "Parcial", "Não, preciso criar"],
        required: true,
        placeholder: "select_option"
      },
      {
        id: "integracao_calendario",
        label: "Precisa de integração com calendários ou sistemas?",
        type: "select",
        options: ["Google Calendar", "Outlook", "Outro sistema", "Não preciso"],
        required: false,
        placeholder: "select_option"
      },
      {
        id: "notificacoes",
        label: "Deseja lembretes automáticos para os clientes?",
        type: "select",
        options: ["Sim, por e-mail", "Sim, por SMS", "Sim, ambos", "Não"],
        required: false,
        placeholder: "select_option"
      },
    ],
    design: [
      {
        id: "element subset",
        label: "Quais elementos precisa criar?",
        type: "text",
        required: true,
        placeholder: "ex_logo_card_letterhead"
      },
      {
        id: "cores",
        label: "Tem paleta de cores definida?",
        type: "select",
        options: ["Sim, quero manter", "Sim, mas posso ajustar", "Não, preciso de ajuda"],
        required: true,
        placeholder: "select_option"
      },
    ],
    landingPage: [
      {
        id: "identidade_visual",
        label: "Você já possui uma identidade visual do projeto (logo, cores, tipografia etc)?",
        type: "select",
        options: ["Sim, completa", "Parcial", "Não, preciso criar"],
        required: true,
        placeholder: "select_option"
      },
      {
        id: "conteudo",
        label: "Já tem todo o conteúdo pronto?",
        type: "select",
        options: ["Sim, completo", "Parcial", "Não, preciso de ajuda"],
        required: true,
        placeholder: "select_option"
      },
      {
        id: "referencias",
        label: "Tem exemplos de páginas que gosta?",
        type: "select",
        options: ["Sim, posso mostrar", "Não, quero sugestões"],
        required: false,
        placeholder: "select_option"
      },
    ],
    materialPromocional: [
      {
        id: "identidade_visual",
        label: "Você já possui uma identidade visual do projeto (logo, cores, tipografia etc)?",
        type: "select",
        options: ["Sim, completa", "Parcial", "Não, preciso criar"],
        required: true,
        placeholder: "select_option"
      },
      {
        id: "tipo_material",
        label: "Que tipo de material precisa?",
        type: "select",
        options: ["Digital", "Impresso", "Ambos", "Não tenho certeza"],
        required: false,
        placeholder: "select_option"
      },
    ],
    portfolio: [
      {
        id: "identidade_visual",
        label: "Você já possui uma identidade visual do projeto (logo, cores, tipografia etc)?",
        type: "select",
        options: ["Sim, completa", "Parcial", "Não, preciso criar"],
        required: true,
        placeholder: "select_option"
      },
      {
        id: "exemplos",
        label: "Possui alguns exemplos que possam servir de inspiração?",
        type: "select",
        options: ["Sim", "Não"],
        required: true,
        placeholder: "select_option"
      },
      {
        id: "destaque",
        label: "Qual seu maior objetivo com seu portfólio?",
        type: "select",
        options: [
          "Conquistar clientes",
          "Mostrar habilidades",
          "Construir reputação",
          "Documentar projetos",
          "Outro"
        ],
        required: false,
        placeholder: "select_option"
      },
      {
        id: "atualizacao",
        label: "Com que frequência atualizará o portfólio?",
        type: "select",
        options: ["Mensal", "Trimestral", "Semestral", "Raramente"],
        required: false,
        placeholder: "select_option"
      },
    ],
    siteInstitucional: [
      {
        id: "identidade_visual",
        label: "Você já possui uma identidade visual do projeto (logo, cores, tipografia etc)?",
        type: "select",
        options: ["Sim, completa", "Parcial", "Não, preciso criar"],
        required: true,
        placeholder: "select_option"
      },
      {
        id: "idiomas",
        label: "Precisa de versão em outros idiomas?",
        type: "select",
        options: ["Apenas português", "Inglês também", "Outros idiomas"],
        required: true,
        placeholder: "select_option"
      },
      {
        id: "seo",
        label: "Precisa de otimização para buscadores?",
        type: "select",
        options: ["Sim, completa", "Apenas básica", "Não por enquanto"],
        required: false,
        placeholder: "select_option"
      },
    ],
    outro: [
      {
        id: "descricao",
        label: "Descreva seu projeto com detalhes:",
        type: "textarea",
        required: true,
        placeholder: "describe_project"
      },
      {
        id: "complexidade",
        label: "Qual o nível de complexidade estimado?",
        type: "select",
        options: [
          "Simples (1-2 funcionalidades)",
          "Médio (3-5 funcionalidades)",
          "Complexo (sistema completo)"
        ],
        required: false,
        placeholder: "select_option"
      },
      {
        id: "orcamento",
        label: "Tem uma faixa de investimento em mente?",
        type: "select",
        options: [
          "Até R$ 3.000",
          "R$ 3.000 - 10.000",
          "Acima de R$ 10.000",
          "Preciso de orientação"
        ],
        required: false,
        placeholder: "select_option"
      },
    ],
  },
};