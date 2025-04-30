import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import {
  FaCartShopping,
  FaBullhorn,
  FaCalendarCheck,
  FaClipboardList,
  FaRocket,
  FaBuilding,
} from "react-icons/fa6";
import { FaCogs, FaPaintBrush, } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { BiSolidFoodMenu } from "react-icons/bi";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import AOS from "aos";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import styles from "./Carousel.module.scss";

const Carousel = ({ slides, sectionTitle }) => {
  const { t } = useTranslation();
  const [backgroundImage, setBackgroundImage] = useState(slides[0].image);
  const [activeSlideTitle, setActiveSlideTitle] = useState(slides[0].title);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSlideChange = (swiper) => {
    setBackgroundImage(slides[swiper.realIndex].image);
    setActiveSlideTitle(slides[swiper.realIndex].title);
  };

  const serviceIcons = {
    "E-Commerce": <FaCartShopping className={styles.serviceIcon} />,
    "Landing Pages": <FaRocket className={styles.serviceIcon} />,
    Portfólio: <BsFillGrid1X2Fill className={styles.serviceIcon} />,
    "Sites Institucionais": <FaBuilding className={styles.serviceIcon} />,
    "Sistema de Gestão de Pedidos": <FaClipboardList className={styles.serviceIcon} />,
    "Sistema de Gestão Empresarial (ERP)": <FaCogs className={styles.serviceIcon} />,
    "Sistema de Gestão de Agendamentos": <FaCalendarCheck className={styles.serviceIcon} />,
    "Identidade Visual": <FaPaintBrush className={styles.serviceIcon} />,
    "Cardápio Digital": <BiSolidFoodMenu className={styles.serviceIcon} />,
    "Materiais Promocionais": <FaBullhorn className={styles.serviceIcon} />,
  };

  const webDevelopmentServices = [
    "E-Commerce",
    "Landing Pages",
    "Portfólio",
    "Sites Institucionais",
  ];
  const managementSystemServices = [
    "Sistema de Gestão de Pedidos",
    "Sistema de Gestão Empresarial (ERP)",
    "Sistema de Gestão de Agendamentos",
  ];
  const designServices = [
    "Identidade Visual",
    "Cardápio Digital",
    "Materiais Promocionais",
  ];

  const getCategoryClass = () => {
    if (webDevelopmentServices.includes(activeSlideTitle)) {
      return styles.webDevelopment;
    } else if (managementSystemServices.includes(activeSlideTitle)) {
      return styles.managementSystems;
    } else if (designServices.includes(activeSlideTitle)) {
      return styles.design;
    }
    return "";
  };

  const handleSolicitar = () => {
    navigate("/solicitar-orcamentos");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <section
      className={`${styles.carouselContainer} ${getCategoryClass()}`}
      data-aos="fade-up"
    >
      <div className={styles.overlay}></div>
      <div className={styles.titleContainer}>
        <h1 className={styles.sectionTitle}>{sectionTitle}</h1>
        <hr />
      </div>
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        navigation={{
          prevEl: `.${styles.swiperButtonPrev}`,
          nextEl: `.${styles.swiperButtonNext}`,
        }}
        pagination={{
          clickable: true,
        }}
        className={styles.carouselSwiper}
        onSlideChange={handleSlideChange}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.slideContent}>
              <div className={styles.leftSection}>
                <div className={styles.titleWrapper}>
                  {serviceIcons[slide.title]}
                  <h2 className={styles.slideTitle}>{slide.title}</h2>
                </div>
                <p className={styles.description}>{slide.description}</p>
                <div className={styles.targetAudienceSection}>
                  <h3 className={styles.targetAudienceTitle}>
                    {t("carousel.target_audience_title")}
                  </h3>
                  <ul className={styles.targetAudienceList}>
                    {t(`carousel.target_audience.${slide.title}`, {
                      returnObjects: true,
                    })
                      .slice(0, 3)
                      .map((audience, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: audience }} />
                      ))}
                  </ul>
                </div>
                {slide.features && (
                  <details className={styles.featuresToggle}>
                    <summary>{t("carousel.features_toggle")}</summary>
                    <ul className={styles.featuresList}>
                      {slide.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </details>
                )}
              </div>
              {slide.cta && (
                <div className={styles.ctaSection}>
                  <h3 className={styles.ctaTitle}>{slide.cta.title}</h3>
                  <button className={styles.ctaButton} onClick={handleSolicitar}>
                    <FaArrowUpRightFromSquare className={styles.ctaIcon} />
                    {slide.cta.buttonText}
                  </button>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.swiperButtonPrev}>←</div>
      <div className={styles.swiperButtonNext}>→</div>
      <div className={styles.swiperPagination}></div>
    </section>
  );
};

export default Carousel;