import styles from "./Depoimentos.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import PedroCezar from '../../assets/img/Pedro Cezar.png'
import MariaClara from '../../assets/img/MariaClara.png'

function Depoimentos() {
  const depoimentos = [
    {
      user: "Pedro Cezar Sites",
      text: "I don't know what to say, I'm speechless.",
      imagem: PedroCezar, 
      link: "https://pedrocezar-orcamento.vercel.app/",
    },
    {
      user: "Maria Clara - Arquiteta",
      text: "I'm at a loss for words, this is amazing, I love it.",
      imagem: MariaClara,
      link: "https://www.metalmax.com.br",
    },
  ];

  return (
    <div className={styles["depoimentos-container"]}>
      <div className={styles.title}>
        <h1>Depoimentos</h1>
      </div>
      <div className={styles.subtitle}>
        <p>Veja os depoimentos de quem confiou!</p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: `.${styles["swiper-button-next"]}`,
          prevEl: `.${styles["swiper-button-prev"]}`,
        }}
        effect="fade"
        className={styles["depoimentos-slider"]}
      >
        {depoimentos.map((depoimento, index) => (
          <SwiperSlide key={index} className={styles["depoimento-slide"]}>
            <div className={styles["depoimento-card"]}>
              <img
                className={styles["user-avatar"]}
                src={depoimento.imagem}
                alt="Imagem da pessoa do depoimento"
              ></img>
              <div className={styles["user-info"]}>
                <span className={styles["user-name"]}>{depoimento.user}</span>
                <p className={styles["user-text"]}>{depoimento.text}</p>
                <a
                  href={depoimento.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["user-link"]}
                >
                  Conheça o {depoimento.user}
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
