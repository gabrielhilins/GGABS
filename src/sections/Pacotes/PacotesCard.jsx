import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './PacotesCard.module.scss';
import PacotesModal from './Modal'; 

function PacotesCard({ title, description, target, benefits, icon, observations, onCtaClick }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.icon}>{icon}</div>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDescription}>{description}</p>
        {target && target.length > 0 && (
          <div className={styles.target}>
            <h4 className={styles.targetTitle}>Ideal para:</h4>
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
        <button 
          className={styles.ctaButton}
          onClick={onCtaClick}
        >
          Adquira já o seu Pacote {title}
        </button>
      </div>

      <PacotesModal 
        showModal={showModal} 
        setShowModal={setShowModal} 
        pacote={{ title, description, benefits, observations }}
      />
    </>
  );
}

PacotesCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  target: PropTypes.arrayOf(PropTypes.string),
  benefits: PropTypes.arrayOf(PropTypes.string).isRequired,
  icon: PropTypes.node.isRequired,
  observations: PropTypes.arrayOf(PropTypes.string),
  onCtaClick: PropTypes.func.isRequired,
};

export default PacotesCard;