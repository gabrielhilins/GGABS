import React, { useLayoutEffect, useRef } from 'react';
import styles from './LnkdPerfil.module.scss';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);


import LnkdAdvocacia from '../../assets/img/LNKDPERFIL-ADVOCACIA.png';
import LnkdDann from '../../assets/img/LNKDPERFIL-DANN.png';
import LnkdFisioterapeuta from '../../assets/img/LNKDPERFIL-FISIOTERAPEUTA.png';
import LnkdGabrielLins from '../../assets/img/LNKDPERFIL-GABRIEL-LINS.png';
import LnkdGgabs from '../../assets/img/LNKDPERFIL-GGABS.png';
import LnkdHamburgueria from '../../assets/img/LNKDPERFIL-HAMBURGUERIA.png';
import LnkdPersonalTrainer from '../../assets/img/LNKDPERFIL-PERSONAL-TRAINER.png';
import LNKDPERFIL from '../../assets/img/LNKD PERFIL.png';

const lnkdPerfis = [
  LnkdAdvocacia,
  LnkdDann,
  LnkdFisioterapeuta,
  LnkdGabrielLins,
  LnkdGgabs,
  LnkdHamburgueria,
  LnkdPersonalTrainer
];

const LnkdPerfil = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current, 
        { 
          scale: 0.7,
          opacity: 0,
        },
        { 
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
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

          <Link to="/solicitar-orcamentos" className={styles.ctaButton} data-aos="zoom-in" data-aos-delay="500">
            QUERO MEU LNKD PERFIL
          </Link>
        </div>

        <div className={styles.visualContent} data-aos="fade-left">
          <div className={styles.glowEffect}></div>
          {}
          <div className={styles.phoneFrame}>
            <div className={styles.notch}></div>
            <div className={styles.screen}>
              <div className={styles.scrollingContent}>
                 {}
                 {[...lnkdPerfis, ...lnkdPerfis].map((img, index) => (
                    <img 
                      key={index} 
                      src={img} 
                      alt={`LNKDS PERFIS ${index}`} 
                      className={styles.scrollImage}
                    />
                 ))}
              </div>
            </div>
          </div>
          
          <div className={styles.floatingBadge} data-aos="zoom-in" data-aos-delay="600">
            <span>+10</span>
            <small>Perfis Criados</small>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LnkdPerfil;