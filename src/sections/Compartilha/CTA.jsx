import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./CTA.module.scss";

const CTA = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-out" });
  }, []);

  const handleOrçamentoClick = () => {
    navigate("/solicitar-orcamentos");
  };

  return (
    <div className={styles.fim}>
      <div className={styles.ctaContainer} data-aos="fade-up">
        <h2 className={styles.ctaTitle} data-aos="zoom-in" data-aos-delay="200">
          {t("cta.title")}
        </h2>
        <p className={styles.ctaSubtitle} data-aos="fade-up" data-aos-delay="400">
          {t("cta.subtitle")}
        </p>
        <button
          onClick={handleOrçamentoClick}
          className={styles.ctaButton}
          aria-label={t("cta.buttonAriaLabel")}
          data-aos="fade-right"
          data-aos-delay="600"
        >
          {t("cta.button")} <FaArrowRight className={styles.ctaIcon} />
        </button>
      </div>
    </div>
  );
};

export default CTA;