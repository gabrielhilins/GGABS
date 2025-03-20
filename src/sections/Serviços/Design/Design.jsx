import Carousel from "../../../components/Carousel";
import styles from "./Design.module.scss";

const slidesData = [
  {
    title: "Identidade Visual",
    description: "Crie uma identidade visual forte e única que conecte sua marca com seu público, deixando uma impressão duradoura com design impactante.",
    features: ["Logo Personalizado", "Paleta de Cores", "Tipografia Exclusiva", "Design Coeso"],
    cta: { title: "Fortaleça sua Marca", buttonText: "Solicite agora" },
  },
  {
    title: "Cardápio Digital",
    description: "Ofereça um cardápio digital dinâmico e fácil de navegar para seus clientes, com a capacidade de personalização e atualizações em tempo real.",
    features: ["Design Interativo", "Atualizações em Tempo Real", "Cardápio Responsivo", "Análises de Acesso"],
    cta: { title: "Crie seu Cardápio", buttonText: "Comece Agora" },
  },
  {
    title: "Materiais Promocionais",
    description: "Desenvolva materiais promocionais que chamam a atenção e promovem sua marca, desde flyers a banners online, com design profissional e criativo.",
    features: ["Design Impactante", "Ajustes Rápidos", "Comunicação Clara", "Análises de Impacto"],
    cta: { title: "Promova sua Marca", buttonText: "Solicite Agora" },
  },
];

function Design() {
  return (
    <div className={styles.designContainer}>
      <Carousel slides={slidesData} sectionTitle="Design" />
    </div>
  );
}

export default Design;
