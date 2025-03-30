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
}) => (
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
    <h3 style={{ color: "black", fontSize: "28px" }}>Simulador de Orçamento</h3>

    <div className={styles.formGroup}>
      <label htmlFor="name">Qual seu Nome?</label>
      <div className={`${styles.inputWrapper} ${errors.name ? styles.inputError : ""}`}>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Digite seu nome"
          autoComplete="off"
          autoCapitalize="words"
        />
        {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
      </div>
    </div>

    <div className={styles.formGroup}>
      <label htmlFor="lastname">Qual seu Sobrenome?</label>
      <div className={`${styles.inputWrapper} ${errors.lastname ? styles.inputError : ""}`}>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          placeholder="Digite seu sobrenome"
          autoComplete="off"
          autoCapitalize="words"
        />
        {errors.lastname && <span className={styles.errorMessage}>{errors.lastname}</span>}
      </div>
    </div>

    <div className={styles.formGroup}>
      <label htmlFor="service">Tipo de serviço desejado</label>
      <div className={`${styles.inputWrapper} ${errors.service ? styles.inputError : ""}`}>
        <select id="service" name="service" value={formData.service} onChange={handleChange}>
          <option value="">Selecione o tipo de serviço</option>
          <option value="cardapio">Cardápio</option>
          <option value="ecommerce">E-Commerce</option>
          <option value="gestaoEmpresarial">Gestão Empresarial (ERP)</option>
          <option value="gestaoPedidos">Gestão de Pedidos</option>
          <option value="design">Identidade Visual</option>
          <option value="landingPage">Landing Page</option>
          <option value="materialPromocional">Material Promocional</option>
          <option value="portfolio">Portfólio</option>
          <option value="siteInstitucional">Site Institucional</option>
          <option value="outro">Outro</option>
        </select>
        {errors.service && <span className={styles.errorMessage}>{errors.service}</span>}
      </div>
    </div>

    {formData.service === "outro" && (
      <div className={styles.formGroup}>
        <label htmlFor="otherService">Descreva o tipo de serviço</label>
        <div className={`${styles.inputWrapper} ${errors.otherService ? styles.inputError : ""}`}>
          <input
            type="text"
            id="otherService"
            name="otherService"
            value={formData.otherService}
            onChange={handleChange}
            placeholder="Descreva o tipo de serviço"
          />
          {errors.otherService && <span className={styles.errorMessage}>{errors.otherService}</span>}
        </div>
      </div>
    )}

    <div className={styles.formGroup}>
      <label htmlFor="briefing">Descreva seu projeto</label>
      <div className={`${styles.inputWrapper} ${errors.briefing ? styles.inputError : ""}`}>
        <textarea
          id="briefing"
          name="briefing"
          value={formData.briefing}
          onChange={handleChange}
          placeholder="Digite o briefing inicial (Resumo) do seu projeto"
          rows="4"
        />
        {errors.briefing && <span className={styles.errorMessage}>{errors.briefing}</span>}
      </div>
    </div>

    <div className={styles.formGroup}>
      <label htmlFor="deadline">Prazo Desejado</label>
      <div className={`${styles.inputWrapper} ${errors.deadline ? styles.inputError : ""}`}>
        <select id="deadline" name="deadline" value={formData.deadline} onChange={handleChange}>
          <option value="">Selecione um prazo</option>
          <option value="1-semana">1 semana</option>
          <option value="2-semanas">2 semanas</option>
          <option value="1-mes">1 mês</option>
          <option value="2-meses">2 meses</option>
          <option value="flexivel">Flexível</option>
        </select>
        {errors.deadline && <span className={styles.errorMessage}>{errors.deadline}</span>}
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
        <label htmlFor="file" className={styles.customFileButton}>Escolher arquivos</label>
      </div>
      <FileList files={files} uploadProgress={uploadProgress} removeFile={removeFile} />
    </div>

    <button type="submit" className={styles.submitButton}>
      <LuHandshake className={styles.buttonIcon} /> Gerar Orçamento
    </button>
  </form>
);

Form.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    service: PropTypes.string.isRequired,
    otherService: PropTypes.string.isRequired,
    briefing: PropTypes.string.isRequired,
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
};

export default Form;