import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import styles from "./Pacotes.module.scss";
import PacotesCard from "./PacotesCard";
import {
  FaUtensils,
  FaInstagram,
  FaBuilding,
  FaBriefcase,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const pacotesData = [
  {
    title: "Restaurantes",
    description:
      "Ideal para restaurantes que desejam atrair mais clientes e fortalecer sua presença online.",
    benefits: [
      "Identidade Visual Única (Logo, Cores e Tipografia)",
      "Design de Cardápio (Físico e Digital)",
      "Mesa Pronta - Plataforma para gerenciamento de pedidos e delivery",
      "Templates de Posts pro Instagram",
    ],
    price: "R$ 3.000,00",
    icon: <FaUtensils />,
    observations: [
      "Plano mensal",
      "Valores podem variar conforme o porte do restaurante",
      "Inclui suporte contínuo por 3 meses",
    ],
  },
  {
    title: "Influencers e Criadores de Conteúdo",
    description:
      "Perfeito para criadores que querem se destacar com uma identidade visual única.",
    benefits: [
      "Criação de Marca Pessoal",
      "Templates para Posts e Stories",
      "Site personalizado",
      "Template Notion para Estratégia de conteúdo",
    ],
    price: "R$ 2.500,00",
    icon: <FaInstagram />,
    observations: [
      "Inclui 10 templates personalizados",
      "Estratégia válida por 30 dias",
      "Suporte para ajustes",
    ],
  },
  {
    title: "Corporativo",
    description:
      "Soluções completas para empresas que buscam uma comunicação profissional.",
    benefits: [
      "Branding Completo",
      "Apresentações Profissionais",
      "Materiais de Marketing Digital",
      "Consultoria de Imagem Corporativa",
    ],
    price: "R$ 5.000,00",
    icon: <FaBuilding />,
    observations: [
      "Consultoria de 3 meses",
      "Projetos personalizados sob demanda",
      "Reuniões semanais",
    ],
  },
  {
    title: "Profissional",

    target: [
      "Médicos",
      "Psicólogos",
      "Coaches",
      "Personal Trainers",
      "Arquitetos",
      "Nutricionistas",
      "Consultores",
      "e Mais!",
    ],
    benefits: [
      "Logotipo e Identidade Visual",
      "Cartões de Visita e Materiais de Papelaria",
      "Portfólio web profissional",
      "Pacote de Posts para Redes Sociais",
    ],
    price: "R$ 2.000,00",
    icon: <FaBriefcase />,
    observations: [
      "Indicado para profissionais autônomos de diversas áreas",
      "SEO otimizado para aumentar a visibilidade online",
      "Entrega em até 15 dias úteis",
    ],
  },
];

function Pacotes() {
  // Inicializando o AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // Duração padrão das animações (pode ser sobrescrita por data-aos-duration)
      once: true, // A animação só acontece uma vez (não repete ao rolar de volta)
    });
  }, []);

  return (
    <section className={styles.pacotesContainer}>
      <div className={styles.title}>
        <h1>Meus Pacotes de Serviços</h1>
      </div>
      <div className={styles.subtitle}>
        <p className={styles.mainText}>
          Escolha o pacote ideal para o seu projeto e veja como posso ajudar a
          sua ideia a ganhar vida.
        </p>
        <p className={styles.ctaText}>
          <strong>
            Todos os pacotes são flexíveis e podem ser adaptados conforme suas
            necessidades.
          </strong>{" "}
        </p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCards]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        effect="cards"
        grabCursor={true}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        className={styles.swiper}
      >
        {pacotesData.map((pacote, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.slideContent}>
              <div
                className={styles.cardWrapper}
                data-aos="fade-up" // Animação de fade-up
                data-aos-delay={index * 100} // Atraso escalonado (0ms, 100ms, 200ms, 300ms)
                data-aos-duration="800" // Duração da animação
              >
                <PacotesCard {...pacote} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Pacotes;
