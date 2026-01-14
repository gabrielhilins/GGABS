import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import styles from "./Pacotes.module.scss";
import PacotesCard from "./PacotesCard";
import { FaUtensils, FaInstagram, FaBriefcase } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import PacotesModal from "./Modal";


const pacotesIcons = [
  { icon: <FaUtensils /> },
  { icon: <FaBriefcase /> },
  { icon: <FaInstagram /> },
];

function Pacotes() {

  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (pkg) => {
    setSelectedPackage(pkg);
    setShowModal(true);
  };

  const packages = [
    {
      title: "Restaurante",
      description: "Ideal para restaurantes que desejam atrair mais clientes e fortalecer sua presença online.",
      benefits: [
        "Identidade Visual Única (Logo, Cores e Tipografia)",
        "Design de Cardápio (Físico e Digital)",
        "Mesa Pronta - Plataforma para gerenciamento de pedidos e delivery",
        "Templates de Posts pro Instagram"
      ],
      observations: [
        "Inclui 5 templates personalizados",
        "Valores podem variar conforme o porte do restaurante e materiais que já estejam prontos previamente",
        "Suporte contínuo por 3 meses"
      ]
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
        "Corretores",
        "e Mais!"
      ],
      benefits: [
        "Logotipo e Identidade Visual",
        "Cartões de Visita e Materiais de Papelaria",
        "Landing Page Profissional",
        "Pacote de Templates de Posts para Redes Sociais"
      ],
      observations: [
        "Indicado para profissionais autônomos de diversas áreas",
        "Acompanha 5 templates personalizados",
        "Entrega em até 30 dias úteis"
      ]
    },
    {
      title: "Influencers e Criadores de Conteúdo",
      description: "Perfeito para criadores que querem se destacar com uma identidade visual única.",
      benefits: [
        "Criação de Marca Pessoal",
        "Templates para Posts e Stories",
        "Site personalizado",
        "Rebranding de perfil do instagram"
      ],
      observations: [
        "Entrega em até 15 dias uteis",
        "Inclui 5 templates personalizados",
        "Ajuste de Conteúdo: O serviço foca na estratégia visual e na otimização de elementos como a foto de perfil, a bio e os destaques."
      ]
    }
  ];

  return (
    <section className={styles.pacotesContainer}>
      <div className={styles.title}>
        <h1>Nossos Pacotes de Serviços</h1>
      </div>
      <div className={styles.subtitle}>
        <p className={styles.mainText}>Escolha o pacote ideal para o seu projeto e veja como posso ajudar a sua ideia a ganhar vida.</p>
        <p
          className={styles.ctaText}
          dangerouslySetInnerHTML={{ __html: "<strong>Todos os pacotes são flexíveis e podem ser adaptados conforme suas necessidades.</strong>" }}
        />
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
        {packages.map((pacote, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.slideContent}>
              <div
                className={styles.cardWrapper}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="800"
              >
                <PacotesCard
                  {...pacote}
                  icon={pacotesIcons[index].icon} 
                  onCtaClick={() => handleCardClick(pacote)}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {selectedPackage && (
        <PacotesModal
          showModal={showModal}
          setShowModal={setShowModal}
          pacote={selectedPackage}
        />
      )}
    </section>
  );
}

export default Pacotes;