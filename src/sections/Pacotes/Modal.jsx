import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.scss";
import enviarWhatsApp from "./enviarMensagemPacote";

function PacotesModal({ showModal, setShowModal, pacote }) {
  const [name, setName] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [errors, setErrors] = useState({ name: "", confirmation: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { name: "", confirmation: "" };

    if (!name.trim()) {
      newErrors.name = "O nome é obrigatório";
    }
    if (!isConfirmed) {
      newErrors.confirmation = "Você deve confirmar a solicitação do pacote";
    }

    setErrors(newErrors);

    if (newErrors.name || newErrors.confirmation) {
      return;
    }

    const timestamp = new Date();
    const formattedDate = timestamp.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    const formattedTime = timestamp.toLocaleTimeString("pt-BR", {
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
        <h2>Solicitar Pacote</h2>
        <p dangerouslySetInnerHTML={{ __html: `Preencha os detalhes para o pacote <strong>${pacote.title}</strong>` }} />
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">
              Seu Nome e Sobrenome <span className={styles.requiredAsterisk}>*</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrors((prev) => ({ ...prev, name: "" }));
              }}
              placeholder="Ex: Ana Silva"
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
              <span dangerouslySetInnerHTML={{ __html: `Confirmo a solicitação do pacote <strong>${pacote.title}</strong>` }} />
              <span className={styles.requiredAsterisk}>*</span>
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
              Cancelar
            </button>
            <button type="submit" className={styles.submitButton}>
              Enviar Solicitação
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
    price: PropTypes.string,
    observations: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default PacotesModal;