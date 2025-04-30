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
import { useTranslation } from "react-i18next";

// Dados dos pacotes, agora referenciando ícones diretamente
const pacotesIcons = [
  { icon: <FaUtensils /> },
  { icon: <FaBriefcase /> },
  { icon: <FaInstagram /> },
];

function Pacotes() {
  const { t } = useTranslation(); // Hook para acessar traduções

  // Inicializando o AOS
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

  return (
    <section className={styles.pacotesContainer}>
      <div className={styles.title}>
        <h1>{t("pacotes.title")}</h1>
      </div>
      <div className={styles.subtitle}>
        <p className={styles.mainText}>{t("pacotes.subtitle.mainText")}</p>
        <p
          className={styles.ctaText}
          dangerouslySetInnerHTML={{ __html: t("pacotes.subtitle.ctaText") }}
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
        {t("pacotes.packages", { returnObjects: true }).map((pacote, index) => (
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
                  icon={pacotesIcons[index].icon} // Atribuindo ícone correspondente
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