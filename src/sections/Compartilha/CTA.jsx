import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./CTA.module.scss";

const CTA = () => {
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
          Pronto para transformar seu projeto em realidade?
        </h2>
        <p className={styles.ctaSubtitle} data-aos="fade-up" data-aos-delay="400">
          Não deixe para depois - vamos criar algo incrível juntos!
        </p>
        <button
          onClick={handleOrçamentoClick}
          className={styles.ctaButton}
          aria-label="Solicitar orçamento agora"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          Solicitar Orçamento Agora <FaArrowRight className={styles.ctaIcon} />
        </button>
      </div>
    </div>
  );
};

export default CTA;