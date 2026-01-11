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

export const portfolioData = [
  // === PROJETOS PRÓPRIOS ===
  {
    id: "real",
    title: "REAL",
    text: "O REAL é um {strong}simulador de orçamentos inteligente{/strong}",
    link: "https://real-iota-ivory.vercel.app/",
    postInstagram: "https://instagram.com/p/exemplo_real",
    imageAlt: "Preview do REAL",
    logoAlt: "Logo do REAL",
    cor1: "#00C49A",
    cor2: "#FFFFFF",
    sector: "tech",
    type: "landing-page",
    gender: "masculino",
    status: "finalizado",
    linkText: "Conheça o REAL",
    date: "2025-03-15",
    logo: REAL,
    image: REALPreview,
    isOwnProduct: true
  },
  {
    id: "ref",
    title: "REF",
    text: "O REF é um {strong}gerador de referências no formato ABNT{/strong} moderno e intuitivo. ",
    link: "https://ref-gerador-abnt.vercel.app/",
    postInstagram: "https://instagram.com/p/exemplo_ref",
    imageAlt: "Preview do REF",
    logoAlt: "Logo do REF",
    cor1: "#1D4ED8",
    cor2: "#FFFFFF",
    sector: "tech",
    type: "landing-page",
    gender: "masculino",
    status: "finalizado",
    linkText: "Conheça o REF",
    date: "2025-02-20",
    logo: REF,
    image: REFPreview,
    isOwnProduct: true
  },
  // === CLIENT PROJECTS ===
  {
    id: "jhon_silva",
    title: "Jhon Silva",
    text: "{strong}Identidade Visual{/strong} para o criador de plataformas Jhon Silva",
    link: "https://portifolio-jhon-sites.vercel.app/",
    postInstagram: "https://www.instagram.com/p/DQM4bR6gbTe/?img_index=1",
    imageAlt: "Preview do Jhon Silva",
    logoAlt: "Logo do Jhon Silva",
    cor1: "#101719",
    cor2: "#00F6FF",
    sector: "design",
    type: "identidade-visual",
    gender: "masculino",
    status: "finalizado",
    linkText: "Conheça o Jhon Silva",
    date: "2025-04-10",
    logo: LogoJhonSilva,
    image: JhonSilva,
    isOwnProduct: false
  },
  {
    id: "pedro_cezar",
    title: "Pedro Cezar Sites",
    text: "{strong}Criação de Logo{/strong} para o Pedro Cezar Sites",
    link: "https://pedrocezar-orcamento.vercel.app/",
    postInstagram: "https://www.instagram.com/p/DJcuSe2SK9r/?img_index=1",
    imageAlt: "Preview do Pedro Cezar Sites",
    logoAlt: "Logo do Pedro Cezar Sites",
    cor1: "#040122",
    cor2: "#4B3CFF",
    sector: "design",
    type: "identidade-visual",
    gender: "masculino",
    status: "finalizado",
    linkText: "Conheça o Pedro Cezar Sites",
    date: "2025-03-25",
    logo: LogoPedroCezar,
    image: PedrocezarPreview,
    isOwnProduct: false
  },
  {
    id: "maria_clara",
    title: "Maria Clara Arquitetura",
    text: "{strong}Pacote Profissional (Identidade Visual + Portfólio){/strong} para a Estudante de Arquitetura Maria Clara",
    link: "https://portfolio-maria-clara.vercel.app/",
    imageAlt: "Preview do Maria Clara Arquitetura",
    logoAlt: "Logo do Maria Clara Arquitetura",
    cor1: "#FFFCED",
    cor2: "#273BB1",
    sector: "tech",
    type: "portfolio",
    gender: "feminino",
    status: "em desenvolvimento",
    linkText: "Conheça a Maria Clara Arquitetura",
    date: "2025-04-20",
    logo: MariaClara,
    image: MariaClaraPreview,
    isOwnProduct: false
  },
  {
    id: "pemun",
    title: "Pernambuco Model United Nations",
    text: "{strong}Site institucional{/strong} para a Pernambuco Model United Nations",
    link: "https://www.instagram.com/pernambucomun/",
    imageAlt: "Preview da PEMUN",
    logoAlt: "Logo da PEMUN",
    cor1: "#3155A4",
    cor2: "#FFFFFF",
    sector: "tech",
    type: "site-institucional",
    gender: "feminino",
    status: "em desenvolvimento",
    linkText: "Conheça a Pernambuco Model United Nations",
    date: "2025-08-01",
    logo: LogoPemun,
    image: PemunPreview,
    isOwnProduct: false
  },
  {
    id: "personal-trainer",
    title: "Personal Trainer",
    text: "{strong}Landing Page{/strong} perfeita para personal trainers.",
    link: "https://personal-trainer-landing-page-demo.vercel.app/",
    imageAlt: "Preview da LP para personal trainer",
    logoAlt: "Logo do projeto",
    cor1: "#0D0D0F",
    cor2: "#ECDD00",
    sector: "tech",
    type: "landing-page",
    gender: "masculino",
    status: "finalizado",
    linkText: "Veja a Landing Page",
    date: "2026-01-07",
    logo: LogoPersonal,
    image: PersonalPreview,
    isOwnProduct: true
  },
  {
    id: "advocacia",
    title: "Escritório de Advocacia",
    text: "{strong}Landing Page{/strong} perfeita para escritório de advocacia.",
    link: "https://advocacia-landing-page-delta.vercel.app/",
    imageAlt: "Preview da PEMUN",
    logoAlt: "Logo da PEMUN",
    cor1: "#0A1F44",
    cor2: "#C5A059",
    sector: "tech",
    type: "landing-page",
    gender: "masculino",
    status: "finalizado",
    linkText: "Veja a Landing Page",
    date: "2026-01-10",
    logo: LogoAdvocacia,
    image: AdvocaciaPreview,
    isOwnProduct: true
  },
  {
    id: "barbearia",
    title: "Projeto para Barbearia",
    text: "{strong}Landing Page{/strong} para barbearia",
    link: "https://barbearia-landing-page.vercel.app/",
    imageAlt: "Preview da PEMUN",
    logoAlt: "Logo da PEMUN",
    cor1: "#2F353B",
    cor2: "#B87333",
    sector: "tech",
    type: "landing-page",
    gender: "masculino",
    status: "finalizado",
    linkText: "Veja a Landing Page",
    date: "2026-01-04",
    logo: Logobarbearia,
    image: BarbeariaPreview,
    isOwnProduct: true
  },
  {
    id: "fisioterapia",
    title: "Projeto para Barbearia",
    text: "{strong}Landing Page{/strong} para barbearia",
    link: "https://fisioterapeuta-landing-page.vercel.app/",
    imageAlt: "Preview da PEMUN",
    logoAlt: "Logo da PEMUN",
    cor1: "#1A2E35",
    cor2: "#FFFFFF",
    sector: "tech",
    type: "landing-page",
    gender: "masculino",
    status: "finalizado",
    linkText: "Veja a Landing Page",
    date: "2026-01-09",
    logo: LogoFisioterapia,
    image: FisioterapiaPreview,
    isOwnProduct: true
  },
];