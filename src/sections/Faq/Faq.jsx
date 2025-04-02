import { useState } from "react";
import styles from "./Faq.module.scss";
import Ilustracao from "../../assets/img/Ilustracao8.png";
import { IoIosArrowDropupCircle, IoIosArrowDropdownCircle } from "react-icons/io";

const ITEMS_PER_PAGE = 5;

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const perguntas = [
    { pergunta: "Quanto tempo leva para um site ser entregue?", resposta: "O prazo varia conforme a complexidade do projeto. Sites institucionais simples levam de 7 a 15 dias, enquanto projetos mais avançados podem levar até 30 dias." },
    { pergunta: "O site será responsivo para celular e desktop?", resposta: "Sim! Todos os sites são desenvolvidos para serem 100% responsivos, garantindo uma experiência fluida tanto em celulares quanto em desktops." },
    { pergunta: "Qual é o preço?", resposta: "O valor do projeto depende das funcionalidades, design e complexidade. Após uma análise das suas necessidades, posso fornecer um orçamento detalhado." },
    { pergunta: "Quais tecnologias você usa para desenvolver os sites?", resposta: "A tecnologia utilizada depende do tipo de projeto. No geral, trabalho com ferramentas modernas e confiáveis, como React, Next.js, Java Spring Boot e PostgreSQL, garantindo desempenho e segurança." },
    { pergunta: "Você cria o design do site ou preciso fornecer um layout?", resposta: "Posso criar um design exclusivo para o seu projeto usando Figma, garantindo um layout intuitivo e moderno. Caso já tenha um design pronto, posso transformá-lo em um site funcional." },
    { pergunta: "Posso solicitar alterações após o início do desenvolvimento?", resposta: "Sim! Pequenos ajustes estão incluídos no processo. Para mudanças maiores, avaliaremos o impacto no prazo e orçamento." },
    { pergunta: "O que acontece caso eu queira desistir do projeto?", resposta: "Se o projeto já estiver em andamento, será cobrado um valor proporcional ao trabalho realizado até o momento." },
    { pergunta: "O design do site é personalizado?", resposta: "Sim! Cada site é projetado para atender às necessidades do seu negócio, com um design exclusivo e funcional." },
    { pergunta: "Como funciona a hospedagem do site?", resposta: "Posso recomendar e configurar uma hospedagem confiável para você. Trabalho com opções como Vercel, Netlify e serviços de servidores dedicados, garantindo alto desempenho e segurança." }
  ];

  const totalPages = Math.ceil(perguntas.length / ITEMS_PER_PAGE);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const displayedQuestions = perguntas.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={styles["faq-container"]}>
      <h1 className={styles.title}>Perguntas Frequentes</h1>
      <p className={styles.subtitle}>Aqui estão as perguntas mais frequentes que os clientes me fazem</p>

      <div className={styles.content}>
        <div className={styles.questions}>
          <div className={styles.accordion}>
            {displayedQuestions.map((item, index) => (
              <div
                key={index}
                className={`${styles.item} ${openIndex === index ? styles.open : ""}`}
              >
                <button className={styles.question} onClick={() => toggleAccordion(index)}>
                  {item.pergunta}
                  <span>
                    {openIndex === index ? (
                      <IoIosArrowDropupCircle className={styles.icon} />
                    ) : (
                      <IoIosArrowDropdownCircle className={styles.icon} />
                    )}
                  </span>
                </button>
                <div className={styles.answer}>
                  <div className={styles["answer-content"]}>- {item.resposta}</div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.navigation}>
            <button
              className={`${styles.navButton} ${currentPage === 0 ? styles.disabled : ""}`}
              onClick={prevPage}
              disabled={currentPage === 0}
            >
              ← Perguntas Anteriores
            </button>
            <button
              className={`${styles.navButton} ${currentPage === totalPages - 1 ? styles.disabled : ""}`}
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
            >
              Próximas Perguntas →
            </button>
          </div>
        </div>

        <div className={styles.illustration}>
          <img src={Ilustracao} alt="Ilustração" className={styles.ilustracao} />
          <p className={styles.texto}>Sinta-se à vontade para perguntar o que quiser sobre nosso serviço</p>
          <input type="text" placeholder="Faça sua Pergunta" className={styles.input} />
          <button className={styles.submitButton}>Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default Faq;