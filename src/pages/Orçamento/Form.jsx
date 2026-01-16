import PropTypes from "prop-types";
import styles from "./Orçamento.module.scss";
import { LuHandshake } from "react-icons/lu";
import { MdCheck } from "react-icons/md";

const Form = ({
  formData,
  errors,
  handleChange,
  handleSubmit,
  serviceNames,
}) => {
  const deadlineOptions = {
    "1-semana": "1 semana",
    "2-semanas": "2 semanas",
    "1-mes": "1 mês",
    "2-meses": "2 meses",
    flexivel: "Flexível",
  };

  const handleServiceToggle = (key) => {
    const currentServices = Array.isArray(formData.service)
      ? formData.service
      : [];
    const newServices = currentServices.includes(key)
      ? currentServices.filter((s) => s !== key)
      : [...currentServices, key];

    handleChange({
      target: {
        name: "service",
        value: newServices,
      },
    });
  };

  return (
    <form className={styles.form} autoComplete="off" onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label>
          Representa uma empresa?{" "}
          <span className={styles.requiredAsterisk}>*</span>
        </label>
        <div className={styles.radioGroup}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="isCompany"
              value="sim"
              checked={formData.isCompany === "sim"}
              onChange={handleChange}
              className={styles.radioInput}
            />
            <span className={styles.radioCustom}></span>
            Sim
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="isCompany"
              value="nao"
              checked={formData.isCompany === "nao"}
              onChange={handleChange}
              className={styles.radioInput}
            />
            <span className={styles.radioCustom}></span>
            Não
          </label>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.formGroup}>
          <label htmlFor="name">
            Qual seu Nome?{" "}
            {formData.isCompany === "nao" && (
              <span className={styles.requiredAsterisk}>*</span>
            )}
          </label>
          <div
            className={`${styles.inputWrapper} ${
              errors.name ? styles.inputError : ""
            }`}
          >
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Digite seu Nome"
              autoComplete="off"
              autoCapitalize="words"
            />
            {errors.name && (
              <span className={styles.errorMessage}>{errors.name}</span>
            )}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="lastname">
            Qual seu Sobrenome?{" "}
            {formData.isCompany === "nao" && (
              <span className={styles.requiredAsterisk}>*</span>
            )}
          </label>
          <div
            className={`${styles.inputWrapper} ${
              errors.lastname ? styles.inputError : ""
            }`}
          >
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Digite seu Sobrenome"
              autoComplete="off"
              autoCapitalize="words"
            />
            {errors.lastname && (
              <span className={styles.errorMessage}>{errors.lastname}</span>
            )}
          </div>
        </div>
      </div>

      {formData.isCompany === "sim" && (
        <div className={styles.row}>
          {" "}
          {/* Usei a classe row para ficarem lado a lado se desejar */}
          <div className={styles.formGroup}>
            <label htmlFor="companyName">
              Nome da Empresa <span className={styles.requiredAsterisk}>*</span>
            </label>
            <div
              className={`${styles.inputWrapper} ${errors.companyName ? styles.inputError : ""}`}
            >
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Nome da empresa"
              />
              {errors.companyName && (
                <span className={styles.errorMessage}>
                  {errors.companyName}
                </span>
              )}
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="instagram">Instagram da Empresa </label>
            <div
              className={`${styles.inputWrapper} ${errors.instagram ? styles.inputError : ""}`}
            >
              <input
                type="text"
                id="instagram"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                placeholder="@suaempresa ou link"
              />
              {errors.instagram && (
                <span className={styles.errorMessage}>{errors.instagram}</span>
              )}
            </div>
          </div>
        </div>
      )}

      <div className={styles.formGroup}>
        <label>
          Serviços desejados <span className={styles.requiredAsterisk}>*</span>
        </label>
        <div
          className={`${styles.multiSelectGrid} ${errors.service ? styles.gridError : ""}`}
        >
          {Object.keys(serviceNames).map((key) => {
            const isSelected =
              Array.isArray(formData.service) && formData.service.includes(key);
            return (
              <div
                key={key}
                className={`${styles.serviceCard} ${isSelected ? styles.selected : ""}`}
                onClick={() => handleServiceToggle(key)}
              >
                <div className={styles.checkCircle}>
                  {isSelected && <MdCheck />}
                </div>
                <span>{serviceNames[key]}</span>
              </div>
            );
          })}
        </div>
        {errors.service && (
          <span className={styles.errorMessage}>{errors.service}</span>
        )}
      </div>

      {Array.isArray(formData.service) &&
        formData.service.includes("outro") && (
          <div className={styles.formGroup} data-aos="fade-down">
            <label htmlFor="outro_description">
              Descreva brevemente sua ideia{" "}
              <span className={styles.requiredAsterisk}>*</span>
            </label>
            <div
              className={`${styles.inputWrapper} ${errors.outro_description ? styles.inputError : ""}`}
            >
              <textarea
                id="outro_description"
                name="details.outro_description"
                value={formData.details.outro_description || ""}
                onChange={handleChange}
                placeholder="Conte um pouco sobre o projeto que você tem em mente..."
                rows="3"
              />
              {errors.outro_description && (
                <span className={styles.errorMessage}>
                  {errors.outro_description}
                </span>
              )}
            </div>
          </div>
        )}

      <div className={styles.row}>
        {/* Campo de Prazo */}
        <div className={styles.formGroup}>
          <label htmlFor="deadline">
            Qual sua expectativa de prazo?{" "}
            <span className={styles.requiredAsterisk}>*</span>
          </label>
          <div
            className={`${styles.inputWrapper} ${errors.deadline ? styles.inputError : ""}`}
          >
            <select
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
            >
              <option value="">Selecione um prazo</option>
              {Object.keys(deadlineOptions).map((key) => (
                <option key={key} value={key}>
                  {deadlineOptions[key]}
                </option>
              ))}
            </select>
            {errors.deadline && (
              <span className={styles.errorMessage}>{errors.deadline}</span>
            )}
          </div>
        </div>

        {/* Campo de Briefing (agora na mesma linha) */}
        <div className={styles.formGroup}>
          <label htmlFor="briefing">
            Briefing (Opcional)
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="briefing"
              name="briefing"
              value={formData.briefing}
              onChange={handleChange}
              placeholder="Resuma sua ideia, seu negócio, objetivos..."
              rows="1" 
              style={{ minHeight: "45px" }}
            />
          </div>
        </div>
      </div>

      <button type="submit" className={styles.submitButton}>
        <LuHandshake className={styles.buttonIcon} /> Solicitar Orçamento
      </button>
    </form>
  );
};

Form.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    isCompany: PropTypes.string,
    companyName: PropTypes.string,
    service: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
      .isRequired,
    details: PropTypes.object.isRequired,
    deadline: PropTypes.string.isRequired,
    files: PropTypes.arrayOf(PropTypes.instanceOf(File)).isRequired,
  }).isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleFileChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  files: PropTypes.arrayOf(PropTypes.instanceOf(File)).isRequired,
  uploadProgress: PropTypes.objectOf(PropTypes.number).isRequired,
  removeFile: PropTypes.func.isRequired,
  serviceNames: PropTypes.object.isRequired,
  questionFlows: PropTypes.object.isRequired,
};

export default Form;
