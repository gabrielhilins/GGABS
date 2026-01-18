import React, { useLayoutEffect, useRef } from 'react';
import styles from './PhoneAnimation.module.scss';
import gsap from 'gsap';

// Import all the images
import LnkdAdvocacia from '../../assets/img/LNKDPERFIL-ADVOCACIA.png';
import LnkdDann from '../../assets/img/LNKDPERFIL-DANN.png';
import LnkdFisioterapeuta from '../../assets/img/LNKDPERFIL-FISIOTERAPEUTA.png';
import LnkdGabrielLins from '../../assets/img/LNKDPERFIL-GABRIEL-LINS.png';
import LnkdGgabs from '../../assets/img/LNKDPERFIL-GGABS.png';
import LnkdHamburgueria from '../../assets/img/LNKDPERFIL-HAMBURGUERIA.png';
import LnkdPersonalTrainer from '../../assets/img/LNKDPERFIL-PERSONAL-TRAINER.png';
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

const PhoneAnimation = () => {
  const scrollContentRef = useRef(null);
  const visualContentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial position
      gsap.set(scrollContentRef.current, { y: 0 });

      // Create a seamless, repeating scroll animation
      gsap.to(scrollContentRef.current, {
        y: '-50%', // Move to the end of the first set of images
        ease: 'none',
        duration: 30, // A long duration for a slow, smooth scroll
        repeat: -1, // Infinite loop
      });
    }, visualContentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={visualContentRef} className={styles.visualContent} data-aos="fade-left">
      <div className={styles.phoneFrame}>
        <div className={styles.notch}></div>
        <div className={styles.screen}>
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
  );
};

export default PhoneAnimation;
