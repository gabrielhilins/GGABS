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

const panels = [
  "Tem um sonho, mas não sabe por onde começar?",
  "Procurando alguém para transformar sua ideia em realidade?",
  "Encontre quem entende a sua necessidade!",
  "Seu projeto ganha vida com tecnologia e criatividade!",
  "Resultado? Seu sonho realizado da melhor forma!"
];

const Historia = () => {
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current || !horizontalRef.current) return;
    if (window.innerWidth <= 768) return;

    const totalWidth = horizontalRef.current.scrollWidth;
    const movementDistance = -(totalWidth - window.innerWidth);

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${totalWidth}`,
      pin: true,
      scrub: 0.1,
      animation: gsap.to(horizontalRef.current, {
        x: movementDistance,
        ease: "none",
        duration: 0.1
      }),
      markers: false
    });

    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    
    window.addEventListener("resize", handleResize);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={styles['historia-container']} ref={containerRef}>
      <div className={styles["horizontal-story"]} ref={horizontalRef}>
        {panels.map((text, index) => (
          <div key={index} className={styles.panel}>
            <img 
              src={images[index]} 
              alt={`Ilustração ${index + 1}`} 
              className={styles.illustration}
              loading="lazy"
            />
            <p className={styles.text}>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Historia;