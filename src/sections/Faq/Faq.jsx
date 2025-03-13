import { useState } from "react";
import styles from "./Faq.module.scss";
import Ilustracao from "../../assets/img/Ilustracao8.png";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const perguntas = [
    { pergunta: "Qual é o preço?", resposta: "Depende de vários fatores" },
    { pergunta: "Qual é o preço?", resposta: "" },
    { pergunta: "Qual é o preço?", resposta: "" },
    { pergunta: "Qual é o preço?", resposta: "" },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles["faq-container"]}>
      <div className={styles.title}>
        <h1>Perguntas Frequentes</h1>
      </div>
      <div className={styles.subtitle}>
        <p>Aqui estão as perguntas mais frequentes que os clientes me fazem</p>
      </div>

      <div className={styles.panels}>
        {/* Painel Esquerdo - Acordeão */}
        <div className={styles["left-panel"]}>
          <div className={styles.accordion}>
            {perguntas.map((item, index) => (
              <div
                key={index}
                className={`${styles.item} ${
                  openIndex === index ? styles.open : ""
                }`}
              >
                <button
                  className={styles.question}
                  onClick={() => toggleAccordion(index)}
                >
                  {item.pergunta}
                  <span>
                    {openIndex === index ? (
                      <IoIosArrowDropupCircle className={styles.icon}/>
                    ) : (
                      <IoIosArrowDropdownCircle className={styles.icon}/>
                    )}
                  </span>
                </button>
                {openIndex === index && (
                  <div className={styles.answer}>{item.resposta}</div>
                )}
              </div>
            ))}
          </div>
          <div className={styles.navigation}>
            <button className={styles.navButton}>Perguntas Anteriores ←</button>
            <button className={styles.navButton}>Próximas Perguntas →</button>
          </div>
        </div>

        {/* Painel Direito - Ilustração + Formulário */}
        <div className={styles["right-panel"]}>
          <img src={Ilustracao} alt="Ilustração" className={styles.ilustracao} />
          <p className={styles.texto}>
            Sinta-se à vontade para perguntar o que quiser à respeito do nosso
            serviço
          </p>
          <input type="text" placeholder="Faça sua Pergunta" className={styles.input} />
          <button className={styles.submitButton}>Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default Faq;