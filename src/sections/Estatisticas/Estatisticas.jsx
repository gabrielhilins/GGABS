import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // Importando o estilo para o CircularProgressbar
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
    description: "afirmam que a experiência móvel influencia na compra.",
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
];

const Estatisticas = () => {
  return (
    <section className={styles["estatisticas-container"]}>
      <div className={styles["tecnologia-container"]}>
        <div className={styles.title}>
          <h1>O poder da tecnologia no mercado</h1>
          <hr className={styles.hr}></hr>
        </div>
        <div className={styles["horizontal-tecnologia"]}>
          {tecnologiaEstatisticas.map((item, index) => (
            <div key={index} className={styles.tecnologia}>
              <div className={styles["title-estatistica"]}>
                <h3>{item.title}</h3>
              </div>
              <div className={styles.circular}>
                <CircularProgressbar
                  value={item.value}
                  text={`${item.value}%`}
                  styles={{
                    path: {
                      stroke: "#00DDEB",
                      strokeLinecap: "round",
                      transition: "stroke-dashoffset 1s ease", // Animação de preenchimento
                    },
                    text: {
                      fill: "white",
                      fontSize: "16px",
                    },
                  }}
                />
              </div>
              <div className={styles.description}>
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
            <div key={index} className={styles.design}>
              <div className={styles["title-estatistica"]}>
                <h3>{item.title}</h3>
              </div>
              <div className={styles.circular}>
                <CircularProgressbar
                  value={item.value}
                  text={`${item.value}%`}
                  styles={{
                    path: {
                      stroke: "#004c80",
                      strokeLinecap: "round",
                      transition: "stroke-dashoffset 1s ease", // Animação de preenchimento
                    },
                    text: {
                      fill: "white",
                      fontSize: "16px",
                    },
                  }}
                />
              </div>
              <div className={styles.description}>
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
