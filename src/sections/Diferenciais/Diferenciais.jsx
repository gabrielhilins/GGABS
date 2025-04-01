import { useEffect } from 'react';
import styles from './Diferenciais.module.scss';
import { 
  FaStar, FaGlobe, FaDollarSign, FaPaintBrush, FaHeadset, 
  FaRocket, FaBullhorn, FaClock, FaExpandArrowsAlt, 
  FaUniversalAccess, FaChartLine, FaPalette 
} from "react-icons/fa";

const Diferenciais = () => {
  const diferenciais = [
    { 
      title: "Design + Tecnologia", 
      description: "Eu combino criatividade e tecnologia para criar soluções únicas que transformam ideias em realidade.", 
      icon: <FaStar className={styles.icon} /> 
    },
    { 
      title: "Variedade Criativa", 
      description: "Ofereço uma ampla gama de serviços e criações, trazendo versatilidade para realizar seus sonhos.", 
      icon: <FaPalette className={styles.icon} /> 
    },
    { 
      title: "Custo Acessível", 
      description: "Ofereço qualidade premium a preços justos, porque acredito que todos merecem soluções incríveis.", 
      icon: <FaDollarSign className={styles.icon} /> 
    },
    { 
      title: "Personalização Total", 
      description: "Crio projetos sob medida, alinhados com seus sonhos e objetivos, com a minha identidade única.", 
      icon: <FaPaintBrush className={styles.icon} /> 
    },
    { 
      title: "Branding Impactante", 
      description: "Construo marcas que conectam, engajam e deixam uma marca no mundo.", 
      icon: <FaBullhorn className={styles.icon} /> 
    },
    { 
      title: "Internacionalização", 
      description: "Adapto e traduzo projetos para alcançar mercados globais, levando sua visão além das fronteiras.", 
      icon: <FaGlobe className={styles.icon} /> 
    },
    { 
      title: "Inovação Sempre", 
      description: "Busco as últimas tendências para entregar o que há de mais atual em design e tech.", 
      icon: <FaRocket className={styles.icon} /> 
    },
    { 
      title: "Entregas Rápidas", 
      description: "Realizo projetos com agilidade, sem abrir mão da qualidade que você merece.", 
      icon: <FaClock className={styles.icon} /> 
    },
    { 
      title: "Crescimento Junto", 
      description: "Desenvolvo soluções que evoluem com seu negócio, acompanhando cada conquista.", 
      icon: <FaExpandArrowsAlt className={styles.icon} /> 
    },
    { 
      title: "Acessibilidade para Todos", 
      description: "Crio projetos inclusivos, garantindo que todos possam aproveitar suas ideias.", 
      icon: <FaUniversalAccess className={styles.icon} /> 
    },
    { 
      title: "Resultados Visíveis", 
      description: "Foco em estratégias que geram impacto real, ajudando você a alcançar seu potencial máximo.", 
      icon: <FaChartLine className={styles.icon} /> 
    },
    { 
      title: "Suporte Dedicado", 
      description: "Estou com você em cada etapa, oferecendo suporte contínuo para garantir seu sucesso.", 
      icon: <FaHeadset className={styles.icon} /> 
    },
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
    <section className={styles['diferenciais-container']}>
      <h2 className={styles.title}>
        <span className={styles.gradient}>Diferenciais únicos</span> que me destacam no mercado:
      </h2>
      <div className={styles.grid}>
        {diferenciais.map((diferencial, index) => (
          <div
            key={index}
            className={styles.item}
            data-direction={index % 2 === 0 ? 'left' : 'right'}
          >
            {diferencial.icon}
            <strong>{diferencial.title}</strong>
            <span>{diferencial.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Diferenciais;