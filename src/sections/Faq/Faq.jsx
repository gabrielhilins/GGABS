import { useState } from "react";
import styles from "./Faq.module.scss";
import Ilustracao from "../../assets/img/Ilustracao8.png";
import { IoIosArrowDropupCircle, IoIosArrowDropdownCircle } from "react-icons/io";

const ITEMS_PER_PAGE = 5;

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedService, setSelectedService] = useState("web"); // Serviço padrão: Desenvolvimento Web

  const perguntas = {
    web: [
      {
        pergunta: "Quanto tempo leva para um site ser entregue?",
        resposta: "O prazo varia conforme a complexidade do projeto. Sites institucionais simples levam de 7 a 15 dias, enquanto projetos mais avançados podem levar até 30 dias.",
      },
      {
        pergunta: "O site será responsivo para celular e desktop?",
        resposta: "Sim! Todos os sites são desenvolvidos para serem 100% responsivos, garantindo uma experiência fluida tanto em celulares quanto em desktops.",
      },
      {
        pergunta: "Quais tecnologias você usa para desenvolver os sites?",
        resposta: "Trabalho com ferramentas modernas como React, Next.js e hospedagem em plataformas como Vercel ou Netlify, garantindo desempenho e segurança.",
      },
      {
        pergunta: "Como funciona a hospedagem do site?",
        resposta: "Posso recomendar e configurar uma hospedagem confiável, como Vercel ou Netlify, para garantir alto desempenho e segurança.",
      },
      {
        pergunta: "Posso solicitar alterações após o início do desenvolvimento?",
        resposta: "Sim! Pequenos ajustes estão incluídos no processo. Para mudanças maiores, avaliaremos o impacto no prazo e orçamento.",
      },
    ],
    design: [
      {
        pergunta: "O design do site é personalizado?",
        resposta: "Sim! Cada site é projetado para atender às necessidades do seu negócio, com um design exclusivo e funcional.",
      },
      {
        pergunta: "Você cria o design do site ou preciso fornecer um layout?",
        resposta: "Posso criar um design exclusivo usando Figma, garantindo um layout intuitivo e moderno. Se você já tiver um design, posso implementá-lo.",
      },
      {
        pergunta: "Quanto tempo leva para criar um design?",
        resposta: "Um design inicial geralmente leva de 3 a 7 dias, dependendo da complexidade e das revisões necessárias.",
      },
      {
        pergunta: "Posso usar o design em outros materiais além do site?",
        resposta: "Sim! Os designs podem ser adaptados para cartões, banners ou outros materiais, mantendo a identidade visual consistente.",
      },
      {
        pergunta: "Você oferece revisões no design?",
        resposta: "Sim, ofereço até duas rodadas de revisões no design para garantir que atenda às suas expectativas.",
      },
    ],
    management: [
      {
        pergunta: "O que é um sistema de gestão?",
        resposta: "É uma solução personalizada para organizar processos do seu negócio, como estoque, finanças ou tarefas, tudo em uma plataforma digital.",
      },
      {
        pergunta: "Quanto tempo leva para desenvolver um sistema de gestão?",
        resposta: "Depende da complexidade, mas sistemas simples podem levar de 15 a 30 dias, enquanto os mais robustos podem levar até 60 dias.",
      },
      {
        pergunta: "Quais tecnologias são usadas nos sistemas de gestão?",
        resposta: "Utilizo Java Spring Boot para o backend, PostgreSQL para o banco de dados e React para interfaces modernas e intuitivas.",
      },
      {
        pergunta: "Os sistemas de gestão são personalizados?",
        resposta: "Sim! Cada sistema é desenvolvido sob medida para atender às necessidades específicas do seu negócio.",
      },
      {
        pergunta: "Você oferece suporte após a entrega do sistema?",
        resposta: "Sim, ofereço suporte técnico para ajustes e manutenção após a entrega, conforme acordado no projeto.",
      },
    ],
    ggabs: [
      {
        pergunta: "O que são as Criações GGABS?",
        resposta: "São projetos que desenvolvi, como o REAL, Tarefex e Mesa Pronta, focados em soluções práticas e personalizáveis para negócios e usuários.",
      },
      {
        pergunta: "O REAL realmente ajuda a fazer orçamentos?",
        resposta: "Sim! O REAL é um simulador de orçamentos que facilita a criação de propostas rápidas e profissionais, com design intuitivo e funcionalidade prática.",
      },
      {
        pergunta: "O Tarefex é gratuito ou pago?",
        resposta: "O Tarefex é um aplicativo que criei com uma versão gratuita básica. Versões premium com mais funcionalidades podem ser desenvolvidas sob demanda.",
      },
      {
        pergunta: "Como o Mesa Pronta pode ajudar meu negócio?",
        resposta: "O Mesa Pronta é uma landing page personalizável que destaca seu negócio online, atraindo clientes com um design moderno e otimizado para conversão.",
      },
      {
        pergunta: "Posso solicitar uma Criação GGABS personalizada?",
        resposta: "Sim! Posso adaptar ou criar novas soluções GGABS conforme suas necessidades, como landing pages ou sistemas específicos.",
      },
    ],
  };

  const services = [
    { id: "web", label: "Desenvolvimento Web", title: "Perguntas sobre Desenvolvimento Web" },
    { id: "design", label: "Design", title: "Perguntas sobre Design" },
    { id: "management", label: "Sistemas de Gestão", title: "Perguntas sobre Sistemas de Gestão" },
    { id: "ggabs", label: "Criações GGABS", title: "Perguntas sobre Criações GGABS" },
  ];

  const currentQuestions = perguntas[selectedService];
  const displayedQuestions = currentQuestions.slice(0, ITEMS_PER_PAGE); // Sempre 5 por página

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles["faq-container"]}>
      <h1 className={styles.title}>Perguntas Frequentes</h1>
      <p className={styles.subtitle}>Aqui estão as perguntas mais frequentes que os clientes me fazem</p>

      <div className={styles["service-nav"]}>
        {services.map((service) => (
          <label
            key={service.id}
            className={`${styles["nav-button"]} ${
              selectedService === service.id ? styles.active : ""
            }`}
          >
            <input
              type="radio"
              name="service"
              value={service.id}
              checked={selectedService === service.id}
              onChange={() => {
                setSelectedService(service.id);
                setOpenIndex(null); // Fecha todas as respostas ao mudar de serviço
              }}
            />
            {service.label}
          </label>
        ))}
      </div>

      <div className={styles.content}>
        <div className={styles.questions}>
          <h2 className={styles["service-title"]}>
            {services.find((s) => s.id === selectedService).title}
          </h2>
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