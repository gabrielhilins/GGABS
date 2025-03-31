import PropTypes from 'prop-types';
import styles from './PacotesCard.module.scss';

function PacotesCard({ title, description, target, benefits, price, icon, observations }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardDescription}>{description}</p>
      {target && target.length > 0 && (
        <div className={styles.target}>
          <h4 className={styles.targetTitle}>Indicado para:</h4>
          <ul className={styles.targetList}>
            {target.map((profession, index) => (
              <li key={index}>{profession}</li>
            ))}
          </ul>
        </div>
      )}
      <hr className={styles.divider} />
      <ul className={styles.benefitsList}>
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
      <hr className={styles.divider} />
      <div className={styles.priceWrapper}>
        <span className={styles.priceLabel}>A partir de</span>
        <div className={styles.price}>{price}</div>
      </div>
      {observations && observations.length > 0 && (
        <div className={styles.observations}>
          <h4 className={styles.observationsTitle}>Observações</h4>
          <ul className={styles.observationsList}>
            {observations.map((observation, index) => (
              <li key={index}>{observation}</li>
            ))}
          </ul>
        </div>
      )}
      <button className={styles.ctaButton}>
        Adquira já o seu Pacote {title}
      </button>
    </div>
  );
}

PacotesCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  target: PropTypes.arrayOf(PropTypes.string),
  benefits: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  observations: PropTypes.arrayOf(PropTypes.string),
};

export default PacotesCard;