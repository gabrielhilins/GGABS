import styles from "./Depoimentos.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useTranslation } from "react-i18next";

import PedroCezar from '../../assets/img/Pedro Cezar.png';
import MariaClara from '../../assets/img/MariaClara.png';
import JhonSilva from '../../assets/img/perfil-jhon.jpg'

function Depoimentos() {
  const { t } = useTranslation(); // Hook para acessar traduções
  const imagens = [PedroCezar, MariaClara, JhonSilva]; // Array de imagens

  const depoimentos = t("depoimentos.testimonials", { returnObjects: true }).map(
    (depoimento, index) => ({
      ...depoimento,
      imagem: imagens[index], // Associando imagens aos depoimentos
    })
  );

  return (
    <div className={styles["depoimentos-container"]}>
      <div className={styles.title}>
        <h1>{t("depoimentos.title")}</h1>
      </div>
      <div className={styles.subtitle}>
        <p>{t("depoimentos.subtitle")}</p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: `.${styles["swiper-button-next"]}`,
          prevEl: `.${styles["swiper-button-prev"]}`,
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        className={styles["depoimentos-slider"]}
      >
        {depoimentos.map((depoimento, index) => (
          <SwiperSlide key={index} className={styles["depoimento-slide"]}>
            <div className={styles["depoimento-card"]}>
              <img
                className={styles["user-avatar"]}
                src={depoimento.imagem}
                alt={depoimento.imageAlt}
              />
              <div className={styles["user-info"]}>
                <span className={styles["user-name"]}>{depoimento.user}</span>
                <p className={styles["user-text"]}>{depoimento.text}</p>
                <a
                  href={depoimento.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["user-link"]}
                >
                  {t("depoimentos.testimonials." + index + ".linkText", {
                    user: depoimento.user,
                  })}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles["swiper-button-prev"]}></div>
      <div className={styles["swiper-button-next"]}></div>
      <div className={styles["swiper-pagination"]}></div>
    </div>
  );
}

export default Depoimentos;