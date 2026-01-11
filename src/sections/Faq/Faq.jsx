import { useState } from "react";
import styles from "./Faq.module.scss";
import {
  IoIosArrowDropupCircle,
  IoIosArrowDropdownCircle,
} from "react-icons/io";
import "react-toastify/dist/ReactToastify.css";

const ITEMS_PER_PAGE = 5;

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedService, setSelectedService] = useState("ggabs");

  const services = [
    {
      id: "ggabs",
      label: "Criações GGABS",
      title: "Sobre nossos Produtos (SaaS)",
      questions: [
        { question: "O que são as Criações GGABS?", answer: "São produtos digitais próprios desenvolvidos internamente para resolver problemas reais. Exemplos incluem o REAL (Simulador de Orçamentos) e o REF (Gerador ABNT). Eles demonstram nossa capacidade técnica de criar softwares complexos e úteis." },
        { question: "Posso personalizar o REAL para minha empresa?", answer: "Com certeza! O REAL pode ser adaptado como uma solução 'White Label' para o seu negócio, configurando seus próprios serviços, preços e identidade visual para automatizar seus orçamentos." },
        { question: "O REF é gratuito para estudantes?", answer: "Sim, o REF foi criado com o intuito de ajudar a comunidade acadêmica. Ele é gratuito, intuitivo e segue as normas atualizadas da ABNT para facilitar a vida de estudantes e pesquisadores." },
        { question: "Tenho uma ideia de SaaS, vocês desenvolvem?", answer: "Sim! Somos especialistas em transformar ideias em produtos digitais funcionais (MVPs e Sistemas Completos). Usamos a mesma expertise das nossas criações para tirar o seu projeto do papel." }
      ]
    },
    {
      id: "web",
      label: "Desenvolvimento Web",
      title: "Dúvidas sobre Sites e Sistemas",
      questions: [
        { question: "Qual a diferença entre um Site e uma Landing Page?", answer: "Uma Landing Page é uma página única focada em conversão (vendas ou leads), ideal para campanhas. Um Site Institucional possui várias páginas (Sobre, Serviços, Contato) e serve para construir autoridade e apresentar a empresa por completo." },
        { question: "Vocês usam templates prontos (Wix/Wordpress)?", answer: "Priorizamos o desenvolvimento sob medida (React/Next.js) para garantir performance máxima, segurança e design exclusivo. Porém, podemos usar CMS se for uma exigência específica do projeto para redução de custos." },
        { question: "O site será otimizado para o Google (SEO)?", answer: "Sim. Todos os nossos projetos são desenvolvidos seguindo as melhores práticas de SEO técnico (velocidade, estrutura de tags, meta dados) para facilitar que seu cliente te encontre." },
        { question: "Eu terei acesso para alterar textos e fotos?", answer: "Depende do projeto. Podemos integrar um painel administrativo (CMS) personalizado para que você ou sua equipe possam gerenciar o conteúdo sem precisar mexer em código." },
        { question: "Quanto tempo demora para ficar pronto?", answer: "Landing Pages levam em média 5 a 10 dias úteis. Sites Institucionais de 15 a 25 dias. Sistemas complexos (como o REAL) dependem de um cronograma detalhado que apresentamos no orçamento." }
      ]
    },
    {
      id: "design",
      label: "Design & Branding",
      title: "Dúvidas sobre Identidade Visual",
      questions: [
        { question: "O que está incluso na Identidade Visual?", answer: "Entregamos muito mais que um logo. O pacote inclui: Logo principal e variações, paleta de cores, tipografia, padronização de uso e arquivos finais em alta resolução (vetor e imagem) prontos para impressão e web." },
        { question: "Vocês fazem o design do meu App ou Sistema?", answer: "Sim! Trabalhamos com UI/UX Design (Interface e Experiência do Usuário). Criamos protótipos navegáveis no Figma antes de escrever qualquer linha de código, garantindo que o produto final seja intuitivo e bonito." },
        { question: "Posso pedir alterações no design?", answer: "Claro. Trabalhamos com etapas de aprovação. Você acompanha o processo e tem direito a rodadas de revisão para garantir que o resultado final esteja 100% alinhado com a visão da sua marca." },
        { question: "Vocês fazem material para redes sociais?", answer: "Sim, criamos templates editáveis para Instagram/LinkedIn e também artes para anúncios (ads), mantendo a coerência visual da sua marca em todos os canais." }
      ]
    }
  ];

  const currentQuestions = services.find(
    (s) => s.id === selectedService
  ).questions;
  const displayedQuestions = currentQuestions.slice(0, ITEMS_PER_PAGE);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles["faq-container"]}>
      <h1 className={styles.title}>Perguntas Frequentes</h1>
      <p className={styles.subtitle}>Aqui estão as perguntas mais frequentes que os clientes nos fazem</p>

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
                setOpenIndex(null);
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
                className={`${styles.item} ${
                  openIndex === index ? styles.open : ""
                }`}
              >
                <button
                  className={styles.question}
                  onClick={() => toggleAccordion(index)}
                >
                  {item.question}
                  <span>
                    {openIndex === index ? (
                      <IoIosArrowDropupCircle className={styles.icon} />
                    ) : (
                      <IoIosArrowDropdownCircle className={styles.icon} />
                    )}
                  </span>
                </button>
                <div className={styles.answer}>
                  <div className={styles["answer-content"]}>
                    - {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
