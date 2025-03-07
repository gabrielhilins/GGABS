import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import the CSS Module
import styles from "./Carousel.module.scss";

const Carousel = ({ slides, sectionTitle }) => {
  // Estado para controlar a imagem de fundo da seção com base no slide ativo
  const [backgroundImage, setBackgroundImage] = useState(slides[0].image);

  // Função chamada quando o slide muda
  const handleSlideChange = (swiper) => {
    setBackgroundImage(slides[swiper.activeIndex].image);
  };

  return (
    <div
      className={styles.carouselContainer}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className={styles.sectionTitle}>{sectionTitle}</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation={{
          prevEl: `.${styles.swiperButtonPrev}`,
          nextEl: `.${styles.swiperButtonNext}`,
        }}
        pagination={{
          clickable: true,
          el: `.${styles.swiperPagination}`,
          bulletClass: styles.swiperPaginationBullet,
          bulletActiveClass: styles.swiperPaginationBulletActive,
        }}
        className={styles.carouselSwiper}
        onSlideChange={handleSlideChange}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slideContent}>
              <div className={styles.leftSection}>
                <h2 className={styles.slideTitle}>{slide.title}</h2>
                <p className={styles.description}>{slide.description}</p>
                {slide.features && (
                  <ul className={styles.featuresList}>
                    {slide.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                )}
              </div>
              {slide.cta && (
                <div className={styles.rightSection}>
                  <h3 className={styles.ctaTitle}>{slide.cta.title}</h3>
                  <button className={styles.ctaButton}>
                    <FaArrowUpRightFromSquare className={styles.ctaIcon} />
                    {slide.cta.buttonText}{" "}
                  </button>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.swiperButtonPrev}>{"<"}</div>
      <div className={styles.swiperButtonNext}>{">"}</div>
      <div className={styles.swiperPagination}></div>
    </div>
  );
};

export default Carousel;
