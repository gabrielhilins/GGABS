import Carousel from "../../components/Carousel";
import styles from './DevWeb.module.scss'

import slide1 from "../../assets/img/Ecommerce.png";
import slide2 from "../../assets/img/Ecommerce.png";

const slidesData = [
  {
    image: slide1,
    title: "E-Commerce",
    description: "Texto explicativo sobre o E-Commerce...",
    features: ["Recurso 1", "Recurso 2", "Recurso 3", "Recurso 4"],
    cta: { title: "Tenha o seu próprio E-Commerce", buttonText: "Solicite agora!" },
  },
  {
    image: slide2,
    title: "Outro Slide",
    description: "Outro conteúdo relevante.",
  },
];

function DevWeb() {
  return (
    <div className={styles.DevWebContainer}>
      <Carousel slides={slidesData} sectionTitle="Desenvolvimento Web" />;
    </div>
  )
}

export default DevWeb;
