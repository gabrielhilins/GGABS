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
import LnkdNoirBarber from '../../assets/img/LNKDPERFIL-NOIR-BARBER.png';

const lnkdPerfis = [
  LnkdAdvocacia,
  LnkdFisioterapeuta,
  LnkdHamburgueria,
  LnkdGgabs,
  LnkdNoirBarber,
  LnkdPersonalTrainer,
  LnkdDann,
  LnkdGabrielLins,
];

const LnkdPerfil = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const scrollContentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Animação de entrada da seção (Scale e Opacity)
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

      // 2. Animação de rolagem interna do "celular"
      // Ela só acontece enquanto o usuário rola a página por esta seção
      gsap.to(scrollContentRef.current, {
        y: '-50%', // Move metade da altura (já que dobramos o array de imagens)
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom', // Começa quando a seção aparece embaixo
          end: 'bottom top',   // Termina quando ela sai por cima
          scrub: 1,            // Suaviza o movimento (quanto maior o número, mais "lento" ele segue o scroll)
        }
      });

    }, sectionRef);

    return () => ctx.revert(); // Limpeza para evitar memory leaks
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
          
          <div className={styles.phoneFrame}>
            <div className={styles.notch}></div>
            <div className={styles.screen}>
              {/* Adicionada a Ref aqui para o GSAP controlar */}
              <div ref={scrollContentRef} className={styles.scrollingContent}>
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