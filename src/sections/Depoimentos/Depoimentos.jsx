import styles from "./Depoimentos.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import PedroCezar from '../../assets/img/Pedro Cezar.png';
import MariaClara from '../../assets/img/MariaClara.png';
import JhonSilva from '../../assets/img/perfil-jhon.jpg'

function Depoimentos() {
  const imagens = [PedroCezar, MariaClara, JhonSilva];

  const depoimentosList = [
    {
      user: "Pedro Cezar - Criador de Sites",
      text: "Muito bom o seu serviço, você tem ideias fora da caixa que complementam e dão vida a identidade visual, fiquei muito satisfeito com seu serviço, parabêns!",
      imageAlt: "Imagem de Pedro Cezar",
      linkText: "Conheça o Pedro Cezar - Criador de Sites",
      link: "https://pedrocezar-orcamento.vercel.app/"
    },
    {
      user: "Maria Clara - Estudante de Arquitetura",
      text: "Estou extremamente empolgada em poder fazer minha marca pessoal de arquitetura e portfólio com o GGABS.",
      imageAlt: "Imagem de Maria Clara",
      linkText: "Conheça o Maria Clara - Estudante de Arquitetura",
      link: "https://portfolio-maria-clara.vercel.app/"
    },
    {
      user: "Jhon Silva - Criador de Plataformas,",
      text: "A sua logo foi a que de fato me impressionou! Fiquei extremamente satisfeito. O atendimento foi muito atencioso, entendendo perfeitamente a proposta da minha marca e ofertando um serviço altamente personalizado. Recomendo pela qualidade, criatividade e compromisso.",
      imageAlt: "Imagem de Jhon Silva",
      linkText: "Conheça o Jhon Silva - Criador de Plataformas,",
      link: "https://portifolio-jhon-sites.vercel.app/"
    }
  ];

  const depoimentos = depoimentosList.map(
    (depoimento, index) => ({
      ...depoimento,
      imagem: imagens[index],
    })
  );

  return (
    <div className={styles["depoimentos-container"]}>
      <div className={styles.title}>
        <h1>Depoimentos</h1>
      </div>
      <div className={styles.subtitle}>
        <p>Veja os depoimentos de quem confiou no nosso trabalho!</p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
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
                  {depoimento.linkText}
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