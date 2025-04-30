import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.scss";
import enviarWhatsApp from "./enviarMensagemPacote";
import { useTranslation } from "react-i18next";

function PacotesModal({ showModal, setShowModal, pacote }) {
  const { t } = useTranslation(); // Hook para acessar traduções
  const [name, setName] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [errors, setErrors] = useState({ name: "", confirmation: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { name: "", confirmation: "" };

    if (!name.trim()) {
      newErrors.name = t("pacotes.modal.form.nameError");
    }
    if (!isConfirmed) {
      newErrors.confirmation = t("pacotes.modal.form.confirmationError");
    }

    setErrors(newErrors);

    if (newErrors.name || newErrors.confirmation) {
      return;
    }

    const timestamp = new Date();
    const formattedDate = timestamp.toLocaleDateString(t("i18n.language"), {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    const formattedTime = timestamp.toLocaleTimeString(t("i18n.language"), {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    enviarWhatsApp(
      name,
      "", // Sobrenome não coletado
      pacote.title,
      "Flexível", // Prazo padrão
      "", // Sem briefing
      formattedDate,
      formattedTime,
      pacote // Passa o pacote para mensagem personalizada
    );

    setShowModal(false);
    setName("");
    setIsConfirmed(false);
    setErrors({ name: "", confirmation: "" });
  };

  const handleClose = () => {
    setShowModal(false);
    setName("");
    setIsConfirmed(false);
    setErrors({ name: "", confirmation: "" });
  };

  if (!showModal) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>{t("pacotes.modal.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("pacotes.modal.description", { title: pacote.title }) }} />
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">
              {t("pacotes.modal.form.nameLabel")} <span className={styles.requiredAsterisk}>{t("pacotes.modal.form.requiredAsterisk")}</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrors((prev) => ({ ...prev, name: "" }));
              }}
              placeholder={t("pacotes.modal.form.namePlaceholder")}
              autoComplete="off"
              autoCapitalize="words"
            />
            {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
          </div>
          <div className={styles.formGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={isConfirmed}
                onChange={(e) => {
                  setIsConfirmed(e.target.checked);
                  setErrors((prev) => ({ ...prev, confirmation: "" }));
                }}
              />
              <span dangerouslySetInnerHTML={{ __html: t("pacotes.modal.form.confirmationLabel", { title: pacote.title }) }} />
              <span className={styles.requiredAsterisk}>{t("pacotes.modal.form.requiredAsterisk")}</span>
            </label>
            {errors.confirmation && (
              <span className={styles.errorMessage}>{errors.confirmation}</span>
            )}
          </div>
          <div className={styles.modalButtons}>
            <button
              type="button"
              onClick={handleClose}
              className={styles.cancelButton}
            >
              {t("pacotes.modal.buttons.cancel")}
            </button>
            <button type="submit" className={styles.submitButton}>
              {t("pacotes.modal.buttons.submit")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

PacotesModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  pacote: PropTypes.shape({
    title: PropTypes.string.isRequired,
    benefits: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.string.isRequired,
    observations: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default PacotesModal;