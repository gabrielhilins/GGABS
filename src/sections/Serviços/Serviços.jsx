import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Serviços.module.scss";
import { FaCode, FaLayerGroup, FaPaintBrush } from "react-icons/fa";

const servicosData = [
  {
    icon: <FaCode />,
    ariaLabel: "services.desenvolvimento_web.ariaLabel",
    title: "services.desenvolvimento_web.title",
    exemplos: "services.desenvolvimento_web.exemplos",
  },
  {
    icon: <FaLayerGroup />,
    ariaLabel: "services.sistemas_gestao.ariaLabel",
    title: "services.sistemas_gestao.title",
    exemplos: "services.sistemas_gestao.exemplos",
  },
  {
    icon: <FaPaintBrush />,
    ariaLabel: "services.design.ariaLabel",
    title: "services.design.title",
    exemplos: "services.design.exemplos",
  },
];

function Servicos() {
  const { t } = useTranslation();

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const targetId = e.currentTarget.getAttribute("href");
      if (targetId.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    const saibaMaisLinks = document.querySelectorAll(`.${styles["saiba-mais"]}`);
    saibaMaisLinks.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      saibaMaisLinks.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  return (
    <section className={styles["servicos-container"]}>
      <h1 className={styles.title}>{t("services.title")}</h1>
      <p className={styles.subtitle}>{t("services.subtitle")}</p>
      <div className={styles["cards-container"]}>
        {servicosData.map((servico, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon} aria-label={t(servico.ariaLabel)}>
              {servico.icon}
            </div>
            <h2>{t(servico.title)}</h2>
            <ul className={styles.exemplos}>
              {t(servico.exemplos, { returnObjects: true }).map((exemplo, i) => (
                <li key={i}>
                  <span className={styles.exemploTexto}>
                    <strong>{exemplo.nome}:</strong> {exemplo.descricao}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={`#${t(servico.title)
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
              className={styles["saiba-mais"]}
              aria-label={t("services.saiba_mais") + " " + t(servico.title)}
            >
              {t("services.saiba_mais")}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicos;