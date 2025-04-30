/* eslint-disable react/jsx-key */
import { useEffect } from 'react';
import styles from './Diferenciais.module.scss';
import { 
  FaStar, FaGlobe, FaDollarSign, FaPaintBrush, FaHeadset, 
  FaRocket, FaBullhorn, FaClock, FaExpandArrowsAlt, 
  FaUniversalAccess, FaChartLine, FaPalette 
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Diferenciais = () => {
  const { t } = useTranslation();

  const icons = [
    
    <FaStar className={styles.icon} />,
    <FaPalette className={styles.icon} />,
    <FaDollarSign className={styles.icon} />,
    <FaPaintBrush className={styles.icon} />,
    <FaBullhorn className={styles.icon} />,
    <FaGlobe className={styles.icon} />,
    <FaRocket className={styles.icon} />,
    <FaClock className={styles.icon} />,
    <FaExpandArrowsAlt className={styles.icon} />,
    <FaUniversalAccess className={styles.icon} />,
    <FaChartLine className={styles.icon} />,
    <FaHeadset className={styles.icon} />,
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = document.querySelectorAll(`.${styles.item}`);
    items.forEach((item, index) => {
      item.style.setProperty('--delay', `${index * 0.1}s`);
      observer.observe(item);
    });

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section className={styles['diferenciais-container']} id="diferenciais">
      <h2 className={styles.title}>
        <span className={styles.gradient}>{t("diferenciais.title")}</span> {t("diferenciais.subtitle")}
      </h2>
      <div className={styles.grid}>
        {t("diferenciais.items", { returnObjects: true }).map((diferencial, index) => (
          <div
            key={index}
            className={styles.item}
            data-direction={index % 2 === 0 ? 'left' : 'right'}
          >
            {icons[index]}
            <strong>{diferencial.title}</strong>
            <span>{diferencial.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Diferenciais;