import { FaArrowRight } from 'react-icons/fa';
import styles from './CTA.module.scss';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CTA = () => {
  const { t } = useTranslation(); // Hook para acessar traduções
  const navigate = useNavigate();

  const handleOrçamentoClick = () => {
    navigate("/solicitar-orcamentos");
  };

  return (
    <div className={styles.fim}>
      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaTitle}>{t("cta.title")}</h2>
        <p className={styles.ctaSubtitle}>{t("cta.subtitle")}</p>
        <button
          onClick={handleOrçamentoClick}
          className={styles.ctaButton}
          aria-label={t("cta.buttonAriaLabel")}
        >
          {t("cta.button")} <FaArrowRight className={styles.ctaIcon} />
        </button>
      </div>
      {/*
      <div className={styles["voltar-para-topo"]}>
        <a href="/">{t("cta.backToTop")}</a>
      </div>
      */}
    </div>
  );
};

export default CTA;