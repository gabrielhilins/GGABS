import { FaCode, FaPaintBrush } from "react-icons/fa";

export const servicesData = [
  {
    icon: FaCode,
    ariaLabel: "Ícone de Tech",
    title: "Tech",
    exemplos: [
      { 
        nome: "Landing Pages", 
        descricao: "Páginas estrategicamente desenhadas para converter. Focadas em uma única ação, combinam copywriting persuasivo e design otimizado para maximizar seus leads e vendas.",
        buttonText: "Tenha sua Landing Page"
      },
      { 
        nome: "E-commerce", 
        descricao: "Transforme visitantes em clientes com uma loja virtual de alta performance. Oferecemos design intuitivo, checkout seguro e painel administrativo fácil de usar para você vender 24 horas por dia.",
        buttonText: "Tenha sua Loja Virtual"
      },
      { 
        nome: "Portfólios", 
        descricao: "Destaque sua carreira ou negócio com um portfólio digital impressionante. Apresente seus projetos e habilidades em uma interface moderna que transmite profissionalismo e conquista novas oportunidades.",
        buttonText: "Tenha seu Portfólio"
      },
      { 
        nome: "Sites Institucionais", 
        descricao: "Fortaleça a autoridade da sua marca na web. Desenvolvemos sites que contam a história da sua empresa, apresentam seus serviços e facilitam o contato, funcionando como seu cartão de visitas digital.",
        buttonText: "Tenha seu Site Institucional"
      },
      { 
        nome: "Sistemas de Agendamento", 
        descricao: "Automatize sua agenda e otimize seu tempo. Implementamos sistemas de reserva online que permitem aos seus clientes marcarem horários sozinhos, reduzindo faltas e eliminando a troca de mensagens manuais.",
        buttonText: "Automatize sua Agenda"
      }
    ],
    route: "/solicitar-orcamentos",
  },
  {
    icon: FaPaintBrush,
    ariaLabel: "Ícone de Design",
    title: "Design",
    exemplos: [
      { 
        nome: "Identidade Visual", 
        descricao: "Crie uma marca inesquecível. Desenvolvemos logotipos, paletas de cores e tipografias que traduzem a essência do seu negócio e o diferenciam da concorrência no primeiro olhar.",
        buttonText: "Crie sua Identidade Visual"
      },
      { 
        nome: "Cardápios Digitais", 
        descricao: "Modernize a experiência do seu restaurante. Cardápios interativos e acessíveis via QR Code, fáceis de atualizar e desenhados para despertar o apetite e agilizar o atendimento.",
        buttonText: "Tenha seu Cardápio Digital"
      },
      { 
        nome: "Social Media Design", 
        descricao: "Comunique-se com impacto. Criamos artes profissionais para suas redes sociais que capturam a atenção do público, aumentam o engajamento e reforçam a identidade da sua marca no feed.",
        buttonText: "Destaque suas Redes Sociais"
      }
    ],
    route: "/solicitar-orcamentos",
  },
];