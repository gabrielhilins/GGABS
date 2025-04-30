import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import styles from "./REAl.module.scss";
import { LuHandshake } from "react-icons/lu";

const Form = ({
  formData,
  errors,
  handleChange,
  handleSubmit,
  serviceNames,
  questionFlows,
}) => {
  const { t } = useTranslation();

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
              placeholder={t(`questionFlows.placeholders.${question.placeholder}`)}
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
              placeholder={t(`questionFlows.placeholders.${question.placeholder}`)}
            />
          )}
          {question.type === "select" && (
            <select
              id={question.id}
              name={`details.${question.id}`}
              value={formData.details[question.id] || ""}
              onChange={handleChange}
            >
              <option value="">{t("form.placeholders.select")}</option>
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
              placeholder={t(`questionFlows.placeholders.${question.placeholder}`)}
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
      <div className={styles.formGroup}>
        <label htmlFor="name">
          {t("form.labels.name")}{" "}
          <span className={styles.requiredAsterisk}>*</span>
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
            placeholder={t("form.placeholders.name")}
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
          {t("form.labels.lastname")}{" "}
          <span className={styles.requiredAsterisk}>*</span>
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
            placeholder={t("form.placeholders.lastname")}
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
          {t("form.labels.service")}{" "}
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
            <option value="">{t("form.placeholders.service")}</option>
            {Object.keys(serviceNames).map((key) => (
              <option key={key} value={key}>
                {t(`serviceNames.${key}`)}
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
          {questionFlows.initial[formData.service]?.map((q) => renderQuestion(q))}
          {questionFlows.detailed[formData.service]?.map((q) => renderQuestion(q))}
        </>
      )}

      <div className={styles.formGroup}>
        <label htmlFor="deadline">
          {t("form.labels.deadline")}{" "}
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
            <option value="">{t("form.placeholders.deadline")}</option>
            {Object.keys(t("form.deadlineOptions", { returnObjects: true })).map(
              (key) => (
                <option key={key} value={key}>
                  {t(`form.deadlineOptions.${key}`)}
                </option>
              )
            )}
          </select>
          {errors.deadline && (
            <span className={styles.errorMessage}>{errors.deadline}</span>
          )}
        </div>
      </div>

      

      <button type="submit" className={styles.submitButton}>
        <LuHandshake className={styles.buttonIcon} />{" "}
        {t("form.submitButton")}
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