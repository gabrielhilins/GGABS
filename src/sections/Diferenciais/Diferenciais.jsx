/* eslint-disable react/jsx-key */
import { useEffect } from 'react';
import styles from './Diferenciais.module.scss';
import { 
  FaStar, FaGlobe, FaDollarSign, FaPaintBrush, FaHeadset, 
  FaRocket, FaBullhorn, FaClock, FaExpandArrowsAlt, 
  FaUniversalAccess, FaChartLine, FaPalette 
} from "react-icons/fa";

const Diferenciais = () => {

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

  const items = [
    { title: "Design + Tecnologia", description: "Combinamos criatividade e tecnologia para criar soluções únicas que transformam ideias em realidade." },
    { title: "Variedade Criativa", description: "Oferecemos uma ampla gama de serviços e criações, trazendo versatilidade para realizar seus sonhos." },
    { title: "Custo Acessível", description: "Oferecemos qualidade premium a preços justos, porque acredito que todos merecem soluções incríveis." },
    { title: "Personalização Total", description: "Criamos projetos sob medida, alinhados com seus sonhos e objetivos, com a minha identidade única." },
    { title: "Branding Impactante", description: "Construímos marcas que conectam, engajam e deixam uma marca no mundo." },
    { title: "Internacionalização", description: "Adaptamos e traduzo projetos para alcançar mercados globais, levando sua visão além das fronteiras." },
    { title: "Inovação Sempre", description: "Buscamos as últimas tendências para entregar o que há de mais atual em design e tech." },
    { title: "Entregas Rápidas", description: "Realizamos projetos com agilidade, sem abrir mão da qualidade que você merece." },
    { title: "Crescimento Junto", description: "Desenvolvemos soluções que evoluem com seu negócio, acompanhando cada conquista." },
    { title: "Acessibilidade para Todos", description: "Criamos projetos inclusivos, garantindo que todos possam aproveitar suas ideias." },
    { title: "Resultados Visíveis", description: "Foco em estratégias que geram impacto real, ajudando você a alcançar seu potencial máximo." },
    { title: "Suporte Dedicado", description: "Estamos com você em cada etapa, oferecendo suporte contínuo para garantir seu sucesso." }
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
        <span className={styles.gradient}>Diferenciais</span> que nos destacam no mercado:
      </h2>
      <div className={styles.grid}>
        {items.map((diferencial, index) => (
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