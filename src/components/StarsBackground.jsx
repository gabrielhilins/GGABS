import { useEffect } from "react";
import gsap from "gsap";
import styles from './StarsBackground.module.scss';

const StarsBackground = () => {
  useEffect(() => {
    const stars = document.querySelectorAll('.star');
    
    // Definindo a animação das estrelas para o eixo X
    gsap.to(stars, {
      x: "100vw", // Move as estrelas até a largura da tela
      repeat: -1, // Loop infinito
      duration: 20, // Ajuste conforme necessário
      ease: "linear", // Movimento constante
      stagger: 0.1, // Distância entre as estrelas
      onRepeat: () => {
        // Reposicionando as estrelas para o início do eixo X após o ciclo
        stars.forEach(star => {
          gsap.set(star, { x: -window.innerWidth });
        });
      }
    });
  }, []);

  // Gerar estrelas dinamicamente
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 200; i++) {
      const size = Math.random() * 3 + 1;
      const left = Math.random() * 100; // Posição inicial aleatória das estrelas
      const top = Math.random() * 100; // Posição inicial aleatória das estrelas
      stars.push(
        <div
          key={i}
          className="star"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}vw`,
            top: `${top}vh`,
            position: "absolute",
            borderRadius: "50%",
            backgroundColor: "white",
            opacity: Math.random() * 0.8 + 0.2
          }}
        />
      );
    }
    return stars;
  };

  return (
    <div className={styles["stars-container"]}>
      {generateStars()}
    </div>
  );
};

export default StarsBackground;
