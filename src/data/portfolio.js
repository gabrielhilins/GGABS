import REAL from "../assets/img/Logo Branco Simulador.png";
import REALPreview from "../assets/img/REALPreview.png";
import REF from '../assets/img/LogoREF.png';
import REFPreview from '../assets/img/REFPreview.png';
import MariaClaraPreview from "../assets/img/MariaClaraPreview.png";
import MariaClara from "../assets/img/Maria Clara Logo.png";
import PedrocezarPreview from "../assets/img/PreviewPedrocezar.png";
import LogoPedroCezar from "../assets/img/LogoPedroCezar.png";
import JhonSilva from '../assets/img/WORDMARK PRINCIPAL JHON SILVA.png';
import LogoJhonSilva from '../assets/img/JS GRADIENTE CLARO.png';
import LogoPemun from '../assets/img/LOGO PEMUN BRANCA.png';
import PemunPreview from '../assets/img/Pemun Preview.png';
import PersonalPreview from '../assets/img/LP-PERSONAL-TRAINER.png'
import LogoPersonal from '../assets/img/Personal-logo.png'
import AdvocaciaPreview from '../assets/img/LP-ADVOCACIA.png'
import LogoAdvocacia from '../assets/img/AdvocaciaLogo.png'
import BarbeariaPreview from '../assets/img/BarbeariaPreview.png'
import Logobarbearia from '../assets/img/LogoBarbearia.png'
import FisioterapiaPreview from '../assets/img/FisioterapiaPreview.png'
import LogoFisioterapia from '../assets/img/LogoFisioterapia.png'
import HamburgueriaPreview from '../assets/img/HamburgueriaPreview.png'
import LogoHamburgueria from '../assets/img/HamburgueriaLogo.png'
import CursoPreview from '../assets/img/CursoPreview.png'
import LogoCurso from '../assets/img/BrowniesLogo.png'

export const portfolioData = [
  {
    id: "real",
    title: "REAL - Simulador de Orçamentos",
    text: "Solução desenvolvida para {strong}automação comercial e precificação dinâmica{/strong}. Permite que agências e freelancers gerem orçamentos precisos instantaneamente.",
    link: "https://real-iota-ivory.vercel.app/",
    postInstagram: "https://instagram.com/p/exemplo_real",
    imageAlt: "Interface do sistema REAL",
    logoAlt: "Logo do REAL",
    sector: "tech",
    type: "software",
    status: "finalizado",
    linkText: "Acessar Sistema",
    date: "2025-03-15",
    logo: REAL,
    image: REALPreview,
    isOwnProduct: true
  },
  {
    id: "ref",
    title: "REF - Gerador ABNT",
    text: "Ferramenta acadêmica focada em maior agilidade. O REF é um {strong}gerador automático de referências bibliográficas{/strong} seguindo as normas da ABNT.",
    link: "https://ref-gerador-abnt.vercel.app/",
    postInstagram: "https://instagram.com/p/exemplo_ref",
    imageAlt: "Interface do sistema REF",
    logoAlt: "Logo do REF",
    sector: "tech",
    type: "software",
    status: "finalizado",
    linkText: "Usar Ferramenta",
    date: "2025-02-20",
    logo: REF,
    image: REFPreview,
    isOwnProduct: true
  },
  {
    id: "jhon_silva",
    title: "Jhon Silva",
    text: "Projeto de {strong}Identidade Visual{/strong} para desenvolvedor Full-Stack. Criação de marca moderna que reflete inovação tecnológica e solidez profissional.",
    link: "https://www.instagram.com/p/DQM4bR6gbTe/?img_index=1",
    imageAlt: "Brandbook do Jhon Silva",
    logoAlt: "Logo Jhon Silva",
    sector: "design",
    type: "branding",
    status: "finalizado",
    linkText: "Ver Projeto",
    date: "2025-04-10",
    logo: LogoJhonSilva,
    image: JhonSilva,
    isOwnProduct: false
  },
  {
    id: "pedro_cezar",
    title: "Pedro Cezar Sites",
    text: "Criação de {strong}Logo{/strong} para criador de sites. Foco em transmitir criatividade e confiança para o mercado de sites.",
    link: "https://www.instagram.com/p/DJcuSe2SK9r/?img_index=1",
    imageAlt: "Mockup da marca Pedro Cezar",
    logoAlt: "Logo Pedro Cezar",
    sector: "design",
    type: "branding",
    status: "finalizado",
    linkText: "Ver Projeto",
    date: "2025-03-25",
    logo: LogoPedroCezar,
    image: PedrocezarPreview,
    isOwnProduct: false
  },
  {
    id: "clara_vilela",
    title: "Clara Vilela Arquitetura",
    text: "Desenvolvimento de {strong}Portfólio{/strong} para estudante de Arquitetura. Autenticidade, interatividade e eficiência para destacar seus projetos perfeitamente!",
    link: "https://portfolio-maria-clara.vercel.app/",
    imageAlt: "Site da Clara",
    logoAlt: "Logo Clara Vilela",
    sector: "tech",
    type: "website",
    status: "em desenvolvimento",
    linkText: "Em Breve",
    date: "2025-04-20",
    logo: MariaClara,
    image: MariaClaraPreview,
    isOwnProduct: false
  },
  {
    id: "pemun",
    title: "PEMUN",
    text: "{strong}Site Institucional{/strong} para a Pernambuco Model United Nations. Site informativo a respeito desse projeto de simulações da ONU da UFPE.",
    link: "https://www.instagram.com/pernambucomun/",
    imageAlt: "Site da PEMUN",
    logoAlt: "Logo PEMUN",
    sector: "tech",
    type: "website",
    status: "em desenvolvimento",
    linkText: "Saiba mais sobre a PEMUN",
    date: "2025-08-01",
    logo: LogoPemun,
    image: PemunPreview,
    isOwnProduct: false
  },
  {
    id: "personal-trainer",
    title: "Personal Trainer Pro",
    text: "{strong}Landing Page de Alta Conversão{/strong} para profissionais de educação física. Focada em captação de alunos com design energético e persuasivo.",
    link: "https://personal-trainer-landing-page-demo.vercel.app/",
    imageAlt: "Landing Page Personal",
    logoAlt: "Logo Personal",
    sector: "tech",
    type: "landing-page",
    status: "finalizado",
    linkText: "Ver Demo",
    date: "2026-01-07",
    logo: LogoPersonal,
    image: PersonalPreview,
    isOwnProduct: true
  },
  {
    id: "advocacia",
    title: "Advocacia Premium",
    text: "{strong}Site Institucional Jurídico{/strong} com design sóbrio e autoritário. Estruturado para transmitir credibilidade e facilitar o contato com potenciais clientes.",
    link: "https://advocacia-landing-page-delta.vercel.app/",
    imageAlt: "Site Advocacia",
    logoAlt: "Logo Advocacia",
    sector: "tech",
    type: "landing-page",
    status: "finalizado",
    linkText: "Ver Demo",
    date: "2026-01-10",
    logo: LogoAdvocacia,
    image: AdvocaciaPreview,
    isOwnProduct: true
  },
  {
    id: "barbearia",
    title: "Barber Shop Style",
    text: "{strong}Página de Vendas{/strong} para barbearias modernas. Apresentação visual impactante dos serviços, localização e sistema de agendamento integrado.",
    link: "https://barbearia-landing-page.vercel.app/",
    imageAlt: "Site Barbearia",
    logoAlt: "Logo Barbearia",
    sector: "tech",
    type: "landing-page",
    status: "finalizado",
    linkText: "Ver Demo",
    date: "2026-01-04",
    logo: Logobarbearia,
    image: BarbeariaPreview,
    isOwnProduct: true
  },
  {
    id: "fisioterapia",
    title: "Fisioterapia & Saúde",
    text: "{strong}Landing Page Clean{/strong} para clínicas e profissionais de saúde. Layout leve que transmite bem-estar, focado em agendamento de consultas.",
    link: "https://fisioterapeuta-landing-page.vercel.app/",
    imageAlt: "Site Fisioterapia",
    logoAlt: "Logo Fisioterapia",
    sector: "tech",
    type: "landing-page",
    status: "finalizado",
    linkText: "Ver Demo",
    date: "2026-01-09",
    logo: LogoFisioterapia,
    image: FisioterapiaPreview,
    isOwnProduct: true
  },
  {
    id: "curso-oline",
    title: "Brownies Lucrativos",
    text: "{strong}Página de Vendas Otimizada{/strong} para cursos online e infoprodutos. Layout focado em conversão, com destaque estratégico para os benefícios e provas sociais.",
    link: "https://fisioterapeuta-landing-page.vercel.app/",
    imageAlt: "Site Curso",
    logoAlt: "Logo Brownies",
    sector: "tech",
    type: "landing-page",
    status: "finalizado",
    linkText: "Ver Demo",
    date: "2026-01-12",
    logo: LogoCurso,
    image: CursoPreview,
    isOwnProduct: true
  },
  {
    id: "hamburgueria",
    title: "IRON BURGUER",
    text: "{strong}Landing Page Gastronômica{/strong} para hamburguerias e delivery. Design visualmente atraente que desperta o desejo e destaca o cardápio de forma irresistível.",
    link: "https://hamburgueria-landing-page.vercel.app/",
    imageAlt: "Site Hamburgueria",
    logoAlt: "Logo Hamburgueria",
    sector: "tech",
    type: "landing-page",
    status: "finalizado",
    linkText: "Ver Demo",
    date: "2026-01-13",
    logo: LogoHamburgueria,
    image: HamburgueriaPreview,
    isOwnProduct: true
  },
];