import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from './Historia.module.scss';

import Ilustracao1 from '../../assets/img/Ilustracao1.png';
import Ilustracao2 from '../../assets/img/Ilustracao2.png';
import Ilustracao3 from '../../assets/img/Ilustracao3.png';
import Ilustracao4 from '../../assets/img/Ilustracao4.png';
import Ilustracao5 from '../../assets/img/Ilustracao5.png';

const images = [Ilustracao1, Ilustracao2, Ilustracao3, Ilustracao4, Ilustracao5];

const Historia = () => {
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Verifica se os elementos existem antes de iniciar a animação
    if (!containerRef.current || !horizontalRef.current) return;

    // Definindo a animação com ScrollTrigger
    gsap.fromTo(
      horizontalRef.current,
      { x: 0 }, // Posição inicial
      {
        x: () => -(horizontalRef.current.scrollWidth - window.innerWidth), // Movimento horizontal
        ease: "none", // Não vai ter aceleração ou desaceleração
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top", // Inicia quando o topo da seção atinge o topo da viewport
          end: () => `+=${horizontalRef.current.scrollWidth - window.innerWidth}`, // Define o fim da animação
          scrub: true, // Faz a animação seguir a rolagem
          pin: true, // Fixa a seção enquanto a animação acontece
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const panels = [
    "Tem um sonho, mas não sabe por onde começar?",
    "Procurando alguém para transformar sua ideia em realidade?",
    "Encontre quem entende a sua necessidade!",
    "Seu projeto ganha vida com tecnologia e criatividade!",
    "Resultado? Seu sonho realizado da melhor forma!",
  ];

  return (
    <section className={styles['historia-container']} ref={containerRef}>
      <div className={styles["horizontal-story"]} ref={horizontalRef}>
        {panels.map((text, index) => (
          <div key={index} className={styles.panel}>
            <img src={images[index]} alt={`Ilustração ${index + 1}`} className={styles.illustration} />
            <p className={styles.text}>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Historia;
