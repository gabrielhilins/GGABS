import PropTypes from "prop-types";
import styles from "./REAl.module.scss";
import { LuHandshake } from "react-icons/lu";
import LogoReal from "../assets/img/Logo Preto Simulador.png";
import FileList from "./FileList";

const Form = ({
  formData,
  errors,
  handleChange,
  handleFileChange,
  handleSubmit,
  files,
  uploadProgress,
  removeFile,
  serviceNames,
  questionFlows,
}) => {
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
              placeholder={question.placeholder || "Digite aqui"}
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
              placeholder={question.placeholder || "Digite um número"}
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
              placeholder={question.placeholder || "Descreva aqui"}
              rows="4"
            />
          )}
          {errors[question.id] && (
            <span className={styles.errorMessage}>{errors[question.id]}</span>
          )}
        </div>
      </div>
    );
  };

  return (
    <form className={styles.form} autoComplete="off" onSubmit={handleSubmit}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <img src={LogoReal} alt="Logo REAL" />
          <p>© 2025 REAL. Todos os direitos reservados</p>
          <a
            href="https://real-iota-ivory.vercel.app/"
            className={styles.knowREAL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Conheça o REAL - Simulador de Orçamentos
          </a>
        </div>
      </div>
      <h3 style={{ color: "black", fontSize: "28px" }}>
        Simulador de Orçamento
      </h3>

      <div className={styles.formGroup}>
        <label htmlFor="name">
          Qual seu Nome? <span className={styles.requiredAsterisk}>*</span>
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
            placeholder="Ex: Pedro"
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
          Qual seu Sobrenome? <span className={styles.requiredAsterisk}>*</span>
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
            placeholder="Ex: Silva"
            autoComplete="off"
            autoCapitalize="words"
          />
          {errors.lastname && (
            <span className={styles.errorMessage}>{errors.lastname}</span>
          )}
        </div>
      </div>

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

      {formData.service && (
        <>
          {questionFlows.initial[formData.service]?.map(renderQuestion)}
          {questionFlows.detailed[formData.service]?.map(renderQuestion)}
        </>
      )}

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
            <option value="1-semana">1 semana</option>
            <option value="2-semanas">2 semanas</option>
            <option value="1-mes">1 mês</option>
            <option value="2-meses">2 meses</option>
            <option value="flexivel">Flexível</option>
          </select>
          {errors.deadline && (
            <span className={styles.errorMessage}>{errors.deadline}</span>
          )}
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="file">Anexo(s) (opcional)</label>
        <div className={styles.fileInputWrapper}>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.jpg,.png"
            multiple
            className={styles.fileInput}
          />
          <label htmlFor="file" className={styles.customFileButton}>
            Escolher arquivos
          </label>
        </div>
        <FileList
          files={files}
          uploadProgress={uploadProgress}
          removeFile={removeFile}
        />
      </div>

      <button type="submit" className={styles.submitButton}>
        <LuHandshake className={styles.buttonIcon} /> Gerar Orçamento
      </button>
    </form>
  );
};

Form.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
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
