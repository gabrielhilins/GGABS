import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./Serviços.module.scss";
import { FaCode, FaLayerGroup, FaPaintBrush } from "react-icons/fa";
import { FaUpRightFromSquare } from "react-icons/fa6";

const servicosData = [
  {
    icon: <FaCode />,
    ariaLabel: "services.desenvolvimento_web.ariaLabel",
    title: "services.desenvolvimento_web.title",
    exemplos: "services.desenvolvimento_web.exemplos",
    route: "/desenvolvimento-web",
  },
  {
    icon: <FaLayerGroup />,
    ariaLabel: "services.sistemas_gestao.ariaLabel",
    title: "services.sistemas_gestao.title",
    exemplos: "services.sistemas_gestao.exemplos",
    route: "/sistemas-de-gestao",
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
            <Link
              to={servico.route}
              className={styles["saiba-mais"]}
              aria-label={t("services.saiba_mais") + " " + t(servico.title)}
            >
              <FaUpRightFromSquare className={styles.saibaMaisIcon} />
              {t("services.saiba_mais")}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicos;