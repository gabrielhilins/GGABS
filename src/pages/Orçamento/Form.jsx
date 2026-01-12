import PropTypes from "prop-types";
import styles from "./Orçamento.module.scss";
import { LuHandshake } from "react-icons/lu";

const Form = ({
  formData,
  errors,
  handleChange,
  handleSubmit,
  serviceNames,
  questionFlows,
}) => {

  const deadlineOptions = {
    "1-semana": "1 semana",
    "2-semanas": "2 semanas",
    "1-mes": "1 mês",
    "2-meses": "2 meses",
    "flexivel": "Flexível"
  };

  const renderQuestion = (question) => {
    const isRequired = question.required || false;
    return (
      <div key={question.id} className={styles.formGroup}>
        <label htmlFor={question.id}>
          {question.label}{" "}
          {isRequired && <span className={styles.requiredAsterisk}>*</span>}
        </label>
        <div
          className={`${styles.inputWrapper} ${
            errors[question.id] ? styles.inputError : ""
          }`}
        >
          {question.type === "text" && (
            <input
              type="text"
              id={question.id}
              name={`details.${question.id}`}
              value={formData.details[question.id] || ""}
              onChange={handleChange}
              placeholder={question.placeholder}
            />
          )}
          {question.type === "number" && (
            <input
              type="number"
              id={question.id}
              name={`details.${question.id}`}
              value={formData.details[question.id] || ""}
              onChange={handleChange}
              min={question.min}
              placeholder={question.placeholder}
            />
          )}
          {question.type === "select" && (
            <select
              id={question.id}
              name={`details.${question.id}`}
              value={formData.details[question.id] || ""}
              onChange={handleChange}
            >
              <option value="">Selecione uma opção</option>
              {question.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          )}
          {question.type === "textarea" && (
            <textarea
              id={question.id}
              name={`details.${question.id}`}
              value={formData.details[question.id] || ""}
              onChange={handleChange}
              placeholder={question.placeholder}
              rows="4"
            />
          )}
          {errors[question.id] && (
            <span className={styles.errorMessage}>{errors[question.id]}</span>
          )}
        </div>
        
        {question.type === "select" && formData.details[question.id] === "Outro" && (
          <div className={styles.inputWrapper} style={{ marginTop: '15px' }}>
            <label htmlFor={`${question.id}_outro`} style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#f8fafc' }}>
              Descreva sua ideia/projeto: <span className={styles.requiredAsterisk}>*</span>
            </label>
            <textarea
              id={`${question.id}_outro`}
              name={`details.${question.id}_outro`}
              value={formData.details[`${question.id}_outro`] || ""}
              onChange={handleChange}
              placeholder="Conte um pouco mais sobre o que você precisa..."
              rows="3"
            />
             {errors[`${question.id}_outro`] && (
                <span className={styles.errorMessage}>{errors[`${question.id}_outro`]}</span>
             )}
          </div>
        )}
      </div>
    );
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
            {formData.isCompany === "nao" && <span className={styles.requiredAsterisk}>*</span>}
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
            {formData.isCompany === "nao" && <span className={styles.requiredAsterisk}>*</span>}
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
        <div className={styles.formGroup}>
          <label htmlFor="companyName">
            Nome da Empresa{" "}
            <span className={styles.requiredAsterisk}>*</span>
          </label>
          <div
            className={`${styles.inputWrapper} ${
              errors.companyName ? styles.inputError : ""
            }`}
          >
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Digite o nome da empresa"
              autoComplete="off"
              autoCapitalize="words"
            />
            {errors.companyName && (
              <span className={styles.errorMessage}>{errors.companyName}</span>
            )}
          </div>
        </div>
      )}

      <div className={styles.row}>
        <div className={styles.formGroup}>
          <label htmlFor="service">
            Tipo de serviço desejado{" "}
            <span className={styles.requiredAsterisk}>*</span>
          </label>
          <div
            className={`${styles.inputWrapper} ${
              errors.service ? styles.inputError : ""
            }`}
          >
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Selecione o tipo de serviço</option>
              {Object.keys(serviceNames).map((key) => (
                <option key={key} value={key}>
                  {serviceNames[key]}
                </option>
              ))}
            </select>
            {errors.service && (
              <span className={styles.errorMessage}>{errors.service}</span>
            )}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="deadline">
            Qual sua expectativa de prazo?{" "}
            <span className={styles.requiredAsterisk}>*</span>
          </label>
          <div
            className={`${styles.inputWrapper} ${
              errors.deadline ? styles.inputError : ""
            }`}
          >
            <select
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
            >
              <option value="">Selecione um prazo</option>
              {Object.keys(deadlineOptions).map(
                (key) => (
                  <option key={key} value={key}>
                    {deadlineOptions[key]}
                  </option>
                )
              )}
            </select>
            {errors.deadline && (
              <span className={styles.errorMessage}>{errors.deadline}</span>
            )}
          </div>
        </div>
      </div>

      

      <button type="submit" className={styles.submitButton}>
        <LuHandshake className={styles.buttonIcon} />{" "}
        Solicitar Orçamento
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
    service: PropTypes.string.isRequired,
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