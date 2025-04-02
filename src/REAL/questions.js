// Fluxo de perguntas por serviço
export const questionFlows = {
  initial: {
    cardapio: [
      { id: "tipo_negocio", label: "Que tipo de estabelecimento você tem?", type: "select", options: ["Restaurante", "Cafeteria", "Bar", "Food Truck", "Outro"], required: true },
    ],
    ecommerce: [
      { id: "estagio", label: "Em que estágio está seu e-commerce?", type: "select", options: ["Ainda não tenho, quero criar do zero", "Já tenho mas preciso melhorar", "Preciso migrar de plataforma"], required: true },
    ],
    gestaoEmpresarial: [
      { id: "tamanho_empresa", label: "Quantos funcionários sua empresa tem?", type: "select", options: ["1-5", "6-15", "16-50", "51+"], required: true },
    ],
    gestaoPedidos: [
      { id: "modelo_negocio", label: "Qual seu modelo principal de vendas?", type: "select", options: ["Delivery", "Balcão", "Mesa", "Misto", "Outro"], required: true },
    ],
    design: [
      { id: "contexto", label: "Precisa de identidade visual para:", type: "select", options: ["Novo negócio", "Reposicionamento", "Atualização", "Outro"], required: true },
    ],
    landingPage: [
      { id: "objetivo_principal", label: "Qual o objetivo principal da página?", type: "select", options: ["Gerar leads", "Vender produto", "Divulgar serviço", "Outro"], required: true },
    ],
    materialPromocional: [
      { id: "tipo_material", label: "Que tipo de material precisa?", type: "select", options: ["Digital", "Impresso", "Ambos", "Não tenho certeza"], required: true },
    ],
    portfolio: [
      { id: "area_atuacao", label: "Qual sua área de atuação?", type: "select", options: ["Design", "Fotografia", "Arquitetura", "Clínica", "Psicologia", "Outro"], required: true },
    ],
    siteInstitucional: [
      { id: "publico_alvo", label: "Quem é seu público principal?", type: "select", options: ["Consumidores", "Empresas", "Estudantes", "Consumidores e Empresas também"], required: true },
    ],
    outro: [
      { id: "tipo_projeto", label: "Que tipo de projeto você imagina?", type: "select", options: ["Sistema", "Aplicativo", "Plataforma", "Outro"], required: true },
    ],
  },
  detailed: {
    cardapio: [
        { id: "digital", label: "Deseja versão digital com QR Code?", type: "select", options: ["Sim, quero cardápio digital", "Não, apenas versão impressa"], required: true },
        { id: "itens", label: "Quantos itens terá aproximadamente?", placeholder: "Ex: 15 pratos e 20 bebidas", type: "number", min: 1, required: false  },
    ],
    ecommerce: [
      { id: "produtos", label: "Quantos produtos diferentes pretende vender?", type: "number", min: 1, required: true },
      { id: "integracao", label: "Precisa de integração com:", type: "select", options: ["Mercado Pago", "PagSeguro", "Outro gateway", "Ainda não sei"], required: true },
    ],
    gestaoEmpresarial: [
      { id: "modulos", label: "Quais áreas precisam de gestão?", placeholder: "Ex: financeiro, estoque, RH", type: "text", required: true },
      { id: "mobilidade", label: "Precisa de acesso mobile?", type: "select", options: ["Sim, essencial", "Desejável", "Não necessário"], required: true },
      { id: "integracao_existente", label: "Precisa integrar com outros sistemas?", type: "select", options: ["Sim", "Não", "Não sei"], required: true },
    ],
    gestaoPedidos: [
      { id: "volume", label: "Quantos pedidos por dia em média?", type: "number", min: 1 , required: true},
    ],
    design: [
      { id: "elementos", label: "Quais elementos precisa criar?", placeholder: "Ex: logo, cartão, papel timbrado", type: "text", required: true },
      { id: "cores", label: "Tem paleta de cores definida?", type: "select", options: ["Sim, quero manter", "Sim, mas posso ajustar", "Não, preciso de ajuda"], required: true },
    ],
    landingPage: [
        { id: "conteudo", label: "Já tem todo o conteúdo pronto?", type: "select", options: ["Sim, completo", "Parcial", "Não, preciso de ajuda"], required: true },
      { id: "referencias", label: "Tem exemplos de páginas que gosta?", type: "select", options: ["Sim, posso mostrar", "Não, quero sugestões"], required: true },
    ],
    materialPromocional: [
      { id: "tipos", label: "Quais materiais específicos precisa?", placeholder: "Ex: flyer, banner, post Instagram", type: "text", required: true },
    ],
    portfolio: [
      { id: "destaque", label: "O que quer destacar em cada projeto?", type: "select", options: ["Processo criativo", "Resultados", "Depoimentos", "Tudo"], required: false },
      { id: "atualizacao", label: "Com que frequência atualizará o portfólio?", type: "select", options: ["Mensal", "Trimestral", "Semestral", "Raramente"], required: false },
      { id: "interatividade", label: "Deseja elementos interativos?", type: "select", options: ["Sim, muitos", "Alguns básicos", "Não necessário"], required: false },
    ],
    siteInstitucional: [
      { id: "idiomas", label: "Precisa de versão em outros idiomas?", type: "select", options: ["Apenas português", "Inglês também", "Outros idiomas"], required: true },
      { id: "seo", label: "Precisa de otimização para buscadores?", type: "select", options: ["Sim, completa", "Apenas básica", "Não por enquanto"], required: true },
    ],
    outro: [
      { id: "descricao", label: "Descreva seu projeto com detalhes:", type: "textarea", placeholder: "Fale sobre objetivos, funcionalidades e público-alvo", required: true },
      { id: "complexidade", label: "Qual o nível de complexidade estimado?", type: "select", options: ["Simples (1-2 funcionalidades)", "Médio (3-5 funcionalidades)", "Complexo (sistema completo)"], required: true },
      { id: "orcamento", label: "Tem uma faixa de investimento em mente?", type: "select", options: ["Até R$ 3.000", "R$ 3.000 - 10.000", "Acima de R$ 10.000", "Preciso de orientação"], required: false },
    ],
  },
};