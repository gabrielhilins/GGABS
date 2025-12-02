import { useTranslation } from "react-i18next";
import styles from "./Serviços.module.scss";
import { FaCode, FaPaintBrush } from "react-icons/fa";

const servicosData = [
  {
    icon: <FaCode />,
    ariaLabel: "services.desenvolvimento_web.ariaLabel",
    title: "services.desenvolvimento_web.title",
    exemplos: "services.desenvolvimento_web.exemplos",
    route: "/tech",
  },
  {
    icon: <FaPaintBrush />,
    ariaLabel: "services.design.ariaLabel",
    title: "services.design.title",
    exemplos: "services.design.exemplos",
    route: "/design",
  },
];

function Servicos() {
  const { t } = useTranslation();

  return (
    <section className={styles["servicos-container"]}>
      <h1 className={styles.title}>{t("servicos.title")}</h1>
      <p className={styles.subtitle}>{t("servicos.subtitle")}</p>

      <div className={styles["cards-container"]}>
        {servicosData.map((servico, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon} aria-label={t(servico.ariaLabel)}>
              {servico.icon}
            </div>

            <h2 className={styles.cardTitle}>{t(servico.title)}</h2>

            <ul className={styles.exemplos}>
              {t(servico.exemplos, { returnObjects: true }).map((exemplo, i) => (
                <li key={i}>
                  <span className={styles.exemploTexto}>
                    <strong>{exemplo.nome}:</strong> {exemplo.descricao}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicos;
