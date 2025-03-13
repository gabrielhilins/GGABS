import styles from "./Depoimentos.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

function Depoimentos() {
  const depoimentos = [
    {
      user: "uWed",
      text: "I don't know what to say, I'm speechless.",
      gradient: "linear-gradient(135deg, #A855F7, #EC4899)", // Roxo e rosa
      link: "https://www.instagram.com/uwed", // Exemplo de link do Instagram
    },
    {
      user: "Metalmax",
      text: "I'm at a loss for words, this is amazing, I love it.",
      gradient: "linear-gradient(135deg, #22C55E, #A3E635)", // Verde claro
      link: "https://www.metalmax.com.br", // Exemplo de site
    },
    {
      user: "Empório Caxangá",
      text: "I'm at a loss for words, this is amazing, I love it.",
      gradient: "linear-gradient(135deg, #EF4444, #F97316)", // Vermelho e laranja
      link: "https://www.instagram.com/emporiocaxanga", // Exemplo de Instagram
    },
    {
      user: "083 Burguer",
      text: "I'm at a loss for words, this is amazing, I love it.",
      gradient: "linear-gradient(135deg, #3B82F6, #93C5FD)", // Azul claro
      link: "https://www.083burguer.com.br", // Exemplo de site
    },
  ];

  return (
    <div className={styles["depoimentos-container"]}>
      <div className={styles.title}>
        <h1>Depoimentos</h1>
      </div>
      <div className={styles.subtitle}>
        <p>Veja os depoimentos de quem confiou na gente!</p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
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
              <div
                className={styles["user-avatar"]}
                style={{ background: depoimento.gradient }}
              ></div>
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
