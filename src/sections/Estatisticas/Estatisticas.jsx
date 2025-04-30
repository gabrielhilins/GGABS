import { useEffect, useState, useRef } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "./Estatisticas.module.scss";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const tecnologiaRefs = useRef([]);
  const designRefs = useRef([]);
  const titleRefs = useRef([]);
  const descRefs = useRef([]);
  const [techProgress, setTechProgress] = useState(
    Array(t("estatisticas.tecnologia", { returnObjects: true }).length).fill(0)
  );
  const [designProgress, setDesignProgress] = useState(
    Array(t("estatisticas.design", { returnObjects: true }).length).fill(0)
  );
  const [techPercentage, setTechPercentage] = useState(
    Array(t("estatisticas.tecnologia", { returnObjects: true }).length).fill(0)
  );
  const [designPercentage, setDesignPercentage] = useState(
    Array(t("estatisticas.design", { returnObjects: true }).length).fill(0)
  );

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const tecnologiaItems = t("estatisticas.tecnologia", { returnObjects: true });
          const designItems = t("estatisticas.design", { returnObjects: true });

          // Handle tecnologiaEstatisticas items
          const techIndex = tecnologiaRefs.current.indexOf(entry.target);
          if (techIndex !== -1 && techProgress[techIndex] === 0) {
            setTechProgress((prev) => {
              const newProgress = [...prev];
              newProgress[techIndex] = tecnologiaItems[techIndex].value;
              return newProgress;
            });

            animateCounter(0, tecnologiaItems[techIndex].value, 2000, (value) => {
              setTechPercentage((prev) => {
                const newPercentage = [...prev];
                newPercentage[techIndex] = value;
                return newPercentage;
              });
            });

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
            setDesignProgress((prev) => {
              const newProgress = [...prev];
              newProgress[designIndex] = designItems[designIndex].value;
              return newProgress;
            });

            animateCounter(0, designItems[designIndex].value, 2000, (value) => {
              setDesignPercentage((prev) => {
                const newPercentage = [...prev];
                newPercentage[designIndex] = value;
                return newPercentage;
              });
            });

            entry.target
              .querySelector(`.${styles["title-estatistica"]}`)
              .classList.add(styles["typewriter-title"]);
            entry.target
              .querySelector(`.${styles.description}`)
              .classList.add(styles["typewriter-desc"]);
          }

          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    tecnologiaRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

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
          <h1>{t("estatisticas.tecnologiaTitle")}</h1>
          <hr className={styles.hr}></hr>
        </div>
        <div className={styles["horizontal-tecnologia"]}>
          {t("estatisticas.tecnologia", { returnObjects: true }).map((item, index) => (
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
          <h2>{t("estatisticas.designTitle")}</h2>
          <hr className={styles.hr}></hr>
        </div>
        <div className={styles["horizontal-design"]}>
          {t("estatisticas.design", { returnObjects: true }).map((item, index) => (
            <div
              key={index}
              className={styles.design}
              ref={(el) => (designRefs.current[index] = el)}
            >
              <div
                className={styles["title-estatistica"]}
                ref={(el) =>
                  (titleRefs.current[index + t("estatisticas.tecnologia", { returnObjects: true }).length] = el)
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
                  (descRefs.current[index + t("estatisticas.tecnologia", { returnObjects: true }).length] = el)
                }
              >
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.fonte}>
          <p>
            {t("estatisticas.sources")}{" "}
            <a
              href="https://www.divera.com.br/blog/post/pequenas-empresas-precisam-de-site-sim-precisam-e-aqui-estao-8-motivos"
              target="_blank"
              rel="noopener noreferrer"
            >
              Divera
            </a>
            ,{" "}
            <a
              href="https://diviflash.com/web-design-statistics/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Diviflash
            </a>
            ,{" "}
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