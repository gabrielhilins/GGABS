import { 
  FaCode, 
  FaPalette, 
  FaRocket, 
  FaGlobe, 
  FaUserTie, 
  FaShoppingCart, 
  FaCalendarCheck, 
  FaChessKnight, 
  FaFingerprint, 
  FaPenNib, 
  FaBullhorn 
} from "react-icons/fa";

export const servicesData = [
  {
    icon: FaCode, // Ícone principal da categoria Tech
    ariaLabel: "Ícone de Tech",
    title: "Tech",
    exemplos: [
      {
        icon: FaRocket,
        nome: "Landing Page",
        descricao:
          "Engenharia de conversão de alta performance. Páginas ultra-velozes com copywriting persuasivo, projetadas para transformar tráfego em faturamento real.",
        buttonText: "Solicitar Orçamento de LP",
      },
      {
        icon: FaGlobe,
        nome: "Site Institucional",
        descricao:
          "Sua sede global no digital. Desenvolvemos ecossistemas robustos que consolidam sua autoridade e profissionalizam a presença da sua empresa no mercado.",
        buttonText: "Quero Fortalecer minha marca",
      },
      {
        icon: FaUserTie,
        nome: "Portfólio Web",
        descricao:
          "Sua trajetória com estética de vanguarda. Vitrines digitais exclusivas para profissionais que buscam destaque com interfaces modernas e tecnológicas.",
        buttonText: "Quero Exibir meu talento",
      },
      {
        icon: FaShoppingCart,
        nome: "E-commerce",
        descricao:
          "Lojas virtuais de alta escala. Design intuitivo e checkout fluido para criar experiências de compra que funcionam 24h por dia, sem interrupções.",
        buttonText: "Quero minha Loja Virtual",
      },
      {
        icon: FaCalendarCheck,
        nome: "Sistema de Agendamento",
        descricao:
          "Sua operação no piloto automático. Automatize suas reservas online, elimine tarefas manuais e otimize seu tempo de forma inteligente e lucrativa.",
        buttonText: "Automatizar minha agenda",
      },
    ],
    route: "/solicitar-orcamentos",
  },
  {
    icon: FaPalette, // Ícone principal da categoria Design
    ariaLabel: "Ícone de Design",
    title: "Design",
    exemplos: [
      {
        icon: FaFingerprint,
        nome: "Identidade Visual",
        descricao:
          "Muito além de um logotipo. Desenvolvemos sistemas visuais completos e exclusivos que traduzem a essência da sua marca e geram reconhecimento imediato.",
        buttonText: "Solicitar Identidade Visual",
      },
      {
        icon: FaChessKnight,
        nome: "Branding Estratégico",
        descricao:
          "Defina seu lugar no topo. Consultoria de posicionamento, tom de voz e arquétipos para transformar seu negócio em uma marca magnética e referência no nicho.",
        buttonText: "Quero Definir meu posicionamento",
      },
      {
        icon: FaPenNib,
        nome: "Criação de Logotipos",
        descricao:
          "Sua assinatura visual com impacto. Desenvolvemos um logotipo único e memorável, o primeiro passo essencial para a profissionalização e reconhecimento da sua marca no mercado.",
        buttonText: "Solicite sua Logo agora!",
      },
      {
        icon: FaBullhorn,
        nome: "Materiais Promocionais",
        descricao:
          "Consistência visual em todos os pontos de contato. Templates estratégicos e peças promocionais que elevam o nível da sua comunicação diária.",
        buttonText: "Quero Impactar meu público",
      },
    ],
    route: "/solicitar-orcamentos",
  },
];