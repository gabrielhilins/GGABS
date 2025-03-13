import Carousel from "../../../components/Carousel";
import styles from "./DevWeb.module.scss";

const slidesData = [
  {
    title: "E-Commerce",
    description:
      "Crie uma loja online poderosa e personalizada que converte visitantes em clientes com design intuitivo e funcionalidade avançada.",
    features: ["Checkout Otimizado", "Design Responsivo", "SEO Integrado", "Gestão Simples"],
    cta: { title: "Tenha o seu próprio E-Commerce", buttonText: "Solicite agora" },
  },
  {
    title: "Landing Pages",
    description:
      "Páginas de destino projetadas para capturar leads e aumentar conversões com layouts estratégicos e visual impactante.",
    features: ["Carregamento Rápido", "Call-to-Action Claro", "Animações Suaves", "Analytics Integrado"],
    cta: { title: "Tenha sua Landing Page", buttonText: "Comece Hoje" },
  },
  {
    title: "Portfólio",
    description:
      "páginas personalizadas para exibir projetos, habilidades e conquistas de forma profissional, destacando o trabalho e a experiência de maneira visual e organizada.",
    features: ["Carregamento Rápido", "Call-to-Action Claro", "Animações Suaves", "Analytics Integrado"],
    cta: { title: "Tenha seu Portfólio", buttonText: "Solicite Já" },
  },
  {
    title: "Sites Institucionais",
    description:
      "Construa uma presença online sólida para sua empresa ou instituição com sites que refletem sua identidade e valores, e que são otimizados para engajamento e usabilidade.",
    features: ["Design Personalizado", "SEO Básico", "Otimização para Móvel", "Atualizações Simples"],
    cta: { title: "Crie seu Site Institucional", buttonText: "Solicite o Seu" },
  },
];

function DevWeb() {
  return (
    <div className={styles.devWebContainer}>
      <Carousel slides={slidesData} sectionTitle="Desenvolvimento Web" />
    </div>
  );
}

export default DevWeb;
