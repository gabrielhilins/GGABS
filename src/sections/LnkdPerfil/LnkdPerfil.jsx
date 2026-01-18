import React, { useLayoutEffect, useRef } from 'react';
import styles from './LnkdPerfil.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LNKDPERFIL from '../../assets/img/LNKD PERFIL.png';
import PhoneAnimation from '../../components/PhoneAnimation/PhoneAnimation';

gsap.registerPlugin(ScrollTrigger);

const LnkdPerfil = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animação de entrada da seção (Scale e Opacity)
      gsap.fromTo(contentRef.current, 
        { 
          scale: 0.8,
          opacity: 0,
        },
        { 
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.container}>
      <div ref={contentRef} className={styles.contentWrapper}>
        
        <div className={styles.textContent} data-aos="fade-right">
          <span className={styles.subtitle}>PRODUTO EXCLUSIVO</span>
          <img src={LNKDPERFIL} alt="LNKD PERFIL" className={styles.wordmark} />
          <p className={styles.description}>
            Muito mais que um aglomerado de links. O <strong>LNKD Perfil</strong> é a sua identidade digital, 
            projetada para converter seguidores em clientes. Design premium, carregamento instantâneo 
            e totalmente alinhado com a sua marca.
          </p>
          
          <ul className={styles.benefitsList}>
            <li data-aos="fade-up" data-aos-delay="100">
              <div className={styles.checkIcon}>✓</div>
              <span>Design 100% Personalizado (nada de templates prontos)</span>
            </li>
            <li data-aos="fade-up" data-aos-delay="200">
              <div className={styles.checkIcon}>✓</div>
              <span>Botões animados e chamativos para WhatsApp e Redes</span>
            </li>
            <li data-aos="fade-up" data-aos-delay="300">
              <div className={styles.checkIcon}>✓</div>
              <span>Otimizado para Bio do Instagram e TikTok</span>
            </li>
            <li data-aos="fade-up" data-aos-delay="400">
              <div className={styles.checkIcon}>✓</div>
              <span>Quantidade de links ilimitada</span>
            </li>
          </ul>

          <a href="https://lnkd.SEUDOMINIO.com" target="_blank" rel="noopener noreferrer" className={styles.ctaButton} data-aos="zoom-in" data-aos-delay="500">
            SAIBA MAIS
          </a>
        </div>

        <PhoneAnimation />

      </div>
    </section>
  );
};

export default LnkdPerfil;