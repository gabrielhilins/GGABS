import { FaArrowRight } from 'react-icons/fa';
import styles from './CTA.module.scss';

const CTA = () => {
  return (
    <div className={styles.fim}>
      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaTitle}>Pronto para transformar seu projeto em realidade?</h2>
        <p className={styles.ctaSubtitle}>Não deixe para depois - vamos criar algo incrível juntos!</p>
        <a href="/solicitar-orcamentos" className={styles.ctaButton}>
          Solicitar Orçamento Agora <FaArrowRight className={styles.ctaIcon} />
        </a>
      </div>
      <div className={styles["voltar-para-topo"]}>
        <a href="/">Voltar para o topo</a>
      </div>
    </div>
  );
};

export default CTA;