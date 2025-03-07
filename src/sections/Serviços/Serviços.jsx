import styles from "./Serviços.module.scss";
import { FaCode, FaLayerGroup, FaPaintBrush } from "react-icons/fa";

const servicosData = [
  {
    icon: <FaCode />,
    ariaLabel: "Ícone de Desenvolvimento Web",
    title: "Desenvolvimento Web",
    beneficios: ["E-commerce", "Landing Pages", "Sites Institucionais"],
  },
  {
    icon: <FaLayerGroup />,
    ariaLabel: "Ícone de Sistemas de Gerenciamento",
    title: "Sistema de Gerenciamento",
    beneficios: [
      "Sistemas de Pedido",
      "Sistemas de Gestão Empresarial (ERP)",
      "Sistemas de Gestão de Consultas",
    ],
  },
  {
    icon: <FaPaintBrush />,
    ariaLabel: "Ícone de Design",
    title: "Design",
    beneficios: ["Identidade Visual", "Logos", "Materiais Promocionais"],
  },
];

function Servicos() {
  return (
    <section className={styles["servicos-container"]}>
      <h1 className={styles.title}>Serviços</h1>
      <p className={styles.subtitle}>Aqui você encontra todos os serviços que ofereço</p>
      <div className={styles["cards-container"]}>
        {servicosData.map((servico, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon} aria-label={servico.ariaLabel}>
              {servico.icon}
            </div>
            <h2>{servico.title}</h2>
            <ul>
              {servico.beneficios.map((beneficio, i) => (
                <li key={i}>{beneficio}</li>
              ))}
            </ul>
            <a href="#devweb" className={styles["saiba-mais"]}>
              Saiba Mais
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicos;
