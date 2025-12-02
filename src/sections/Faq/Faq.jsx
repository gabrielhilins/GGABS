import { useState } from "react";
import styles from "./Faq.module.scss";
import {
  IoIosArrowDropupCircle,
  IoIosArrowDropdownCircle,
} from "react-icons/io";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const ITEMS_PER_PAGE = 5;

function Faq() {
  const { t } = useTranslation(); // Hook para acessar traduções
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedService, setSelectedService] = useState("web");

  const services = t("faq.services", { returnObjects: true });
  const currentQuestions = services.find(
    (s) => s.id === selectedService
  ).questions;
  const displayedQuestions = currentQuestions.slice(0, ITEMS_PER_PAGE);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
      </div>
    </div>
  );
}

export default Faq;
