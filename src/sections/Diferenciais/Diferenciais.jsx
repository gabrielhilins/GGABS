import { useEffect } from 'react';
import styles from './Diferenciais.module.scss';
import { FaStar } from "react-icons/fa";

const Diferenciais = () => {
  const diferenciais = Array.from({ length: 12 }, (_, index) => `Diferencial ${index + 1}`);

  useEffect(() => {
    // Configura o Intersection Observer para animar os itens quando aparecem na tela
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animate);
        }
      });
    }, { threshold: 0.1 });

    const items = document.querySelectorAll(`.${styles.item}`);
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section className={styles['diferenciais-container']}>
      <h2 className={styles.title}>
        Os nossos <span className={styles.gradient}>principais diferenciais</span> em relação à outros serviços e consultorias digitais são:
      </h2>
      <div className={styles.grid}>
        {diferenciais.map((diferencial, index) => (
          <div 
            key={index} 
            className={styles.item}
            style={{ 
              animationDelay: `${index * 0.1}s`,
              // Alterna a direção da animação (esquerda/direita) baseado no índice
              '--animation-direction': index % 2 === 0 ? '-20px' : '20px'
            }}
          >
            <FaStar className={styles.star} />
            <span>{diferencial}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Diferenciais;