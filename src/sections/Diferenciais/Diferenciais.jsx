import styles from './Diferenciais.module.scss';

import { FaStar } from "react-icons/fa";

const Diferenciais = () => {
  // Array com os diferenciais (de 1 a 12)
  const diferenciais = Array.from({ length: 12 }, (_, index) => `Diferencial ${index + 1}`);

  return (
    <section className={styles['diferenciais-container']}>
      <h2 className={styles.title}>
        Os nossos <span className={styles.gradient}>principais diferenciais</span> em relação à outros serviços e consultorias digitais são:
      </h2>
      <div className={styles.grid}>
        {diferenciais.map((diferencial, index) => (
          <div key={index} className={styles.item}>
            <FaStar className={styles.star} />
            <span>{diferencial}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Diferenciais;