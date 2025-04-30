import { useState } from "react";
import styles from "./Faq.module.scss";
import Ilustracao from "../../assets/img/Ilustracao8.png";
import {
  IoIosArrowDropupCircle,
  IoIosArrowDropdownCircle,
} from "react-icons/io";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const ITEMS_PER_PAGE = 5;

function Faq() {
  const { t } = useTranslation(); // Hook para acessar traduções
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedService, setSelectedService] = useState("web");
  const [perguntaInput, setPerguntaInput] = useState("");
  const [nomeInput, setNomeInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = t("faq.services", { returnObjects: true });
  const currentQuestions = services.find((s) => s.id === selectedService).questions;
  const displayedQuestions = currentQuestions.slice(0, ITEMS_PER_PAGE);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sendPergunta = async (e) => {
    e.preventDefault();

    if (!nomeInput || !perguntaInput) {
      toast.error(t("faq.toast.error"));
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      nome: nomeInput,
      pergunta: perguntaInput,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success(t("faq.toast.success"));
      setNomeInput("");
      setPerguntaInput("");
    } catch (error) {
      console.error("Error sending question:", error);
      toast.error(t("faq.toast.errorSend"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles["faq-container"]}>
      <h1 className={styles.title}>{t("faq.title")}</h1>
      <p className={styles.subtitle}>{t("faq.subtitle")}</p>

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

        <div className={styles.illustration}>
          <img
            src={Ilustracao}
            alt={t("faq.form.illustrationAlt")}
            className={styles.ilustracao}
          />
          <p className={styles.texto}>{t("faq.form.text")}</p>
          <form onSubmit={sendPergunta} className={styles.perguntaForm}>
            <input
              type="text"
              placeholder={t("faq.form.namePlaceholder")}
              value={nomeInput}
              onChange={(e) => setNomeInput(e.target.value)}
              className={styles.input}
              disabled={isSubmitting}
            />
            <textarea
              placeholder={t("faq.form.questionPlaceholder")}
              value={perguntaInput}
              onChange={(e) => setPerguntaInput(e.target.value)}
              className={styles.textarea}
              disabled={isSubmitting}
            />
            <button
              type="submit"
              className={styles.botaoEnviar}
              disabled={isSubmitting}
            >
              {isSubmitting ? t("faq.form.submitting") : t("faq.form.submitButton")}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Faq;