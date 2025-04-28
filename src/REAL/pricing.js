export const pricingModels = {
  cardapio: {
    basePrice: 1000,
    factors: {
      itens: { threshold: 20, pricePerExtra: 15 },
      digital: { price: 400 },
      updateFrequency: { Mensalmente: 200, Trimestralmente: 100, Raramente: 0 },
      destaques: { "Sim, destaques visuais": 150, "Apenas marcação simples": 50, "Não necessário": 0 }
    }
  },
  ecommerce: {
    basePrice: 4000,
    factors: {
      produtos: { threshold: 50, pricePerExtra: 15 },
      paymentGateway: { price: 1200 },
      management: { "Eu mesmo": 0, "Preciso de treinamento": 800, "Quero que vocês administrem": 2000 },
      logistica: { Própria: 0, Transportadora: 500, Retirada: 0, "A definir": 300 }
    }
  },
  gestaoEmpresarial: {
    basePrice: 6000,
    factors: {
      modulos: { pricePerModule: 1000 },
      usuarios: { threshold: 3, pricePerExtraUser: 200 },
      mobilidade: { "Sim, essencial": 1500, Desejável: 800, "Não necessário": 0 },
      integracao: { Sim: 2000, Não: 0, "Não sei": 1000 }
    }
  },
  gestaoPedidos: {
    basePrice: 2500,
    factors: {
      volume: { threshold: 100, pricePerExtra: 5 },
      canais: { Vários: 800, default: 0 },
      relatorios: { base: 500 },
      notificacoes: { "Sim, para cliente e equipe": 600, "Apenas para equipe": 300, "Não necessário": 0 }
    }
  },
  design: {
    basePrice: 1200,
    factors: {
      elementos: { pricePerElement: 500 },
      estilo: { "Aberto a sugestões": 300, default: 0 },
      cores: { "Sim, quero manter": 0, "Sim, mas posso ajustar": 200, "Não, preciso de ajuda": 400 },
      prazos: { "Urgente (1-2 semanas)": 500, "Normal (3-4 semanas)": 0, Flexível: -200 }
    }
  },
  landingPage: {
    basePrice: 1500,
    factors: {
      secoes: { pricePerSection: 300 },
      conversao: { "Formulário de contato": 0, "Compra direta": 600, Agendamento: 400, Download: 200 },
      conteudo: { "Sim, completo": 0, Parcial: 400, "Não, preciso de ajuda": 800 },
      referencias: { "Sim, posso mostrar": 0, "Não, quero sugestões": 300 }
    }
  },
  materialPromocional: {
    basePrice: 1200,
    factors: {
      tipos: { pricePerType: 300 },
      quantidade: { pricePer100Units: 50 },
      impressao: { "Sim, completo": 800, "Apenas digital": 0, "Já tenho fornecedor": -200 },
      prazos: { "Urgente (1 semana)": 400, "Normal (2 semanas)": 0, Flexível: -100 }
    }
  },
  portfolio: {
    basePrice: 2000,
    factors: {
      projetos: { pricePerProject: 200 },
      destaque: { "Processo criativo": 300, Resultados: 200, Depoimentos: 100, Tudo: 500 },
      atualizacao: { Mensal: 800, Trimestral: 400, Semestral: 200, Raramente: 0 },
      interatividade: { "Sim, muitos": 600, "Alguns básicos": 300, "Não necessário": 0 }
    }
  },
  siteInstitucional: {
    basePrice: 3000,
    factors: {
      paginas: { pricePerPage: 400 },
      idiomas: { "Apenas português": 0, "Inglês também": 1200, "Outros idiomas": 2000 },
      atualizacao: { "Eu mesmo": 0, "Equipe interna": 500, "Quero que vocês façam": 1500 },
      seo: { "Sim, completa": 1000, "Apenas básica": 300, "Não por enquanto": 0 }
    }
  },
  outro: {
    basePrice: 1500,
    factors: {
      complexidade: { "Simples (1-2 funcionalidades)": 0, "Médio (3-5 funcionalidades)": 3000, "Complexo (sistema completo)": 8000 },
      prazos: { "Urgente (até 1 mês)": 2000, "Normal (2-3 meses)": 0, Flexível: -500 },
      orcamento: { "Até R$ 3.000": -500, "R$ 3.000 - 10.000": 0, "Acima de R$ 10.000": 3000, "Preciso de orientação": 0 }
    }
  },
};