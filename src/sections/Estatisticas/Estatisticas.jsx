import { useEffect, useState, useRef } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "./Estatisticas.module.scss";

const tecnologiaEstatisticas = [
  {
    title: "Importância do Site",
    value: 53,
    description: "dos consumidores não confiam em uma empresa sem um site.",
  },
  {
    title: "Credibilidade Online",
    value: 80,
    description: "do aumento da confiança ao ter um site bem estruturado.",
  },
  {
    title: "Sites Responsivos",
    value: 70,
    description: "afirmam que a experiência com celular influencia na compra.",
  },
  {
    title: "Eficiência Operacional",
    value: 50,
    description:
      "implementação de sistemas de gerenciamento pode aumentar a eficiência.",
  },
  {
    title: "Acesso 24/7",
    value: 100,
    description:
      "ter um site online aumenta o atendimento contínuo aos clientes.",
  },
  {
    title: "Velocidade de Carregamento",
    value: 47,
    description:
      "dos usuários abandonam um site que demora mais de 3 segundos para carregar.",
  },
];

const designEstatisticas = [
  {
    title: "Identidade Visual Forte",
    value: 75,
    description:
      "dos consumidores julgam a credibilidade pela identidade visual.",
  },
  {
    title: "Estética e Usabilidade",
    value: 94,
    description: "do julgamento inicial sobre um site depende do design.",
  },
  {
    title: "Design de Cardápios",
    value: 15,
    description: "aumenta as vendas ao criar um cardápio visualmente atraente.",
  },
  {
    title: "Logo e Branding",
    value: 80,
    description:
      "uma identidade visual coesa aumenta o reconhecimento de marca.",
  },
  {
    title: "Design Responsivo",
    value: 67,
    description: "sites responsivos têm mais chances de conversão.",
  },
  {
    title: "Primeira Impressão",
    value: 50,
    description:
      "dos usuários formam uma opinião sobre uma marca em menos de 1 segundo com base no design.",
  },
];

// Utility function to animate the counter
const animateCounter = (start, end, duration, callback) => {
  let startTime = null;

  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    callback(value);
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

const Estatisticas = () => {
  const tecnologiaRefs = useRef([]);
  const designRefs = useRef([]);
  const titleRefs = useRef([]);
  const descRefs = useRef([]);
  const [techProgress, setTechProgress] = useState(
    tecnologiaEstatisticas.map(() => 0)
  );
  const [designProgress, setDesignProgress] = useState(
    designEstatisticas.map(() => 0)
  );
  const [techPercentage, setTechPercentage] = useState(
    tecnologiaEstatisticas.map(() => 0)
  );
  const [designPercentage, setDesignPercentage] = useState(
    designEstatisticas.map(() => 0)
  );

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Trigger when 20% of the element is in view
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Handle tecnologiaEstatisticas items
          const techIndex = tecnologiaRefs.current.indexOf(entry.target);
          if (techIndex !== -1 && techProgress[techIndex] === 0) {
            // Animate progress bar
            setTechProgress((prev) => {
              const newProgress = [...prev];
              newProgress[techIndex] = tecnologiaEstatisticas[techIndex].value;
              return newProgress;
            });

            // Animate percentage text
            animateCounter(0, tecnologiaEstatisticas[techIndex].value, 2000, (value) => {
              setTechPercentage((prev) => {
                const newPercentage = [...prev];
                newPercentage[techIndex] = value;
                return newPercentage;
              });
            });

            // Trigger typewriter animations
            entry.target
              .querySelector(`.${styles["title-estatistica"]}`)
              .classList.add(styles["typewriter-title"]);
            entry.target
              .querySelector(`.${styles.description}`)
              .classList.add(styles["typewriter-desc"]);
          }

          // Handle designEstatisticas items
          const designIndex = designRefs.current.indexOf(entry.target);
          if (designIndex !== -1 && designProgress[designIndex] === 0) {
            // Animate progress bar
            setDesignProgress((prev) => {
              const newProgress = [...prev];
              newProgress[designIndex] = designEstatisticas[designIndex].value;
              return newProgress;
            });

            // Animate percentage text
            animateCounter(0, designEstatisticas[designIndex].value, 2000, (value) => {
              setDesignPercentage((prev) => {
                const newPercentage = [...prev];
                newPercentage[designIndex] = value;
                return newPercentage;
              });
            });

            // Trigger typewriter animations
            entry.target
              .querySelector(`.${styles["title-estatistica"]}`)
              .classList.add(styles["typewriter-title"]);
            entry.target
              .querySelector(`.${styles.description}`)
              .classList.add(styles["typewriter-desc"]);
          }

          // Unobserve after triggering to prevent re-triggering
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all tecnologia items
    tecnologiaRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Observe all design items
    designRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [techProgress, designProgress]);

  return (
    <section className={styles["estatisticas-container"]}>
      <div className={styles["tecnologia-container"]}>
        <div className={styles.title}>
          <h1>O poder da tecnologia no mercado</h1>
          <hr className={styles.hr}></hr>
        </div>
        <div className={styles["horizontal-tecnologia"]}>
          {tecnologiaEstatisticas.map((item, index) => (
            <div
              key={index}
              className={styles.tecnologia}
              ref={(el) => (tecnologiaRefs.current[index] = el)}
            >
              <div
                className={styles["title-estatistica"]}
                ref={(el) => (titleRefs.current[index] = el)}
              >
                <h3>{item.title}</h3>
              </div>
              <div className={styles.circular}>
                <CircularProgressbar
                  value={techProgress[index]}
                  text={`${techPercentage[index]}%`}
                  styles={{
                    path: {
                      stroke: "#00DDEB",
                      strokeLinecap: "round",
                      transition: "stroke-dashoffset 2s ease-out",
                    },
                    text: {
                      fill: "white",
                      fontSize: "16px",
                    },
                  }}
                />
              </div>
              <div
                className={styles.description}
                ref={(el) => (descRefs.current[index] = el)}
              >
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles["design-container"]}>
        <div className={styles.title}>
          <h2>O poder do Design no mercado</h2>
          <hr className={styles.hr}></hr>
        </div>
        <div className={styles["horizontal-design"]}>
          {designEstatisticas.map((item, index) => (
            <div
              key={index}
              className={styles.design}
              ref={(el) => (designRefs.current[index] = el)}
            >
              <div
                className={styles["title-estatistica"]}
                ref={(el) =>
                  (titleRefs.current[index + tecnologiaEstatisticas.length] = el)
                }
              >
                <h3>{item.title}</h3>
              </div>
              <div className={styles.circular}>
                <CircularProgressbar
                  value={designProgress[index]}
                  text={`${designPercentage[index]}%`}
                  styles={{
                    path: {
                      stroke: "#6046FF",
                      strokeLinecap: "round",
                      transition: "stroke-dashoffset 2s ease-out",
                    },
                    text: {
                      fill: "white",
                      fontSize: "16px",
                    },
                  }}
                />
              </div>
              <div
                className={styles.description}
                ref={(el) =>
                  (descRefs.current[index + tecnologiaEstatisticas.length] = el)
                }
              >
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.fonte}>
          <p>
            Fontes:
            <a
              href="https://www.divera.com.br/blog/post/pequenas-empresas-precisam-de-site-sim-precisam-e-aqui-estao-8-motivos"
              target="_blank"
              rel="noopener noreferrer"
            >
              Divera
            </a>
            ,
            <a
              href="https://diviflash.com/web-design-statistics/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Diviflash
            </a>
            ,
            <a
              href="https://maze.co/blog/ux-statistics/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Maze
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Estatisticas;