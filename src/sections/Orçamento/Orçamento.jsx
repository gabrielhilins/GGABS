import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { LuHandshake } from "react-icons/lu";
import styles from "./Orçamento.module.scss";

function Orçamento() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    briefing: "",
    file: null,
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "O nome é obrigatório";
    if (!formData.email.trim()) {
      newErrors.email = "O e-mail é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Digite um e-mail válido";
    }
    if (!formData.service) newErrors.service = "Selecione um serviço";
    if (!formData.briefing.trim())
      newErrors.briefing = "O briefing é obrigatório";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formulário enviado:", formData);
      alert("Orçamento solicitado com sucesso!");
      setFormData({
        name: "",
        email: "",
        service: "",
        briefing: "",
        file: null,
      });
      setErrors({});
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? Array.from(files) : value, // Armazena vários arquivos em um array
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <section className={styles.orcamentoContainer}>
      <div className={styles.formSection}>
        <h1>Solicite seu orçamento</h1>
        <p>
          Envie os detalhes do seu projeto neste formuário e receba um orçamento
          personalizado.
        </p>
        <p>Simples, rápido e sem compromisso!</p>

        {/* Contact Section moved here */}
        <div className={styles.contactSection}>
          <p>
            Ou se preferir, pode solicitar seu orçamento diretamente pelo nosso
            WhatsApp:
          </p>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            <FaWhatsapp className={styles.whatsappIcon} />
            Whatsapp
          </a>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nome</label>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Digite seu nome"
                className={errors.name ? styles.inputError : ""}
              />
              {errors.name && (
                <span className={styles.errorMessage}>{errors.name}</span>
              )}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">E-mail</label>
            <div className={styles.inputWrapper}>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Digite seu e-mail"
                className={errors.email ? styles.inputError : ""}
              />
              {errors.email && (
                <span className={styles.errorMessage}>{errors.email}</span>
              )}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="service">Tipo de serviço desejado</label>
            <div className={styles.inputWrapper}>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={errors.service ? styles.inputError : ""}
              >
                <option value="">Selecione o tipo de serviço</option>
                <option value="ecommerce">E-Commerce</option>
                <option value="landingPage">Landing Pages</option>
                <option value="landingPage">Portfólio</option>
                <option value="landingPage">portfólios</option>
                <option value="sistemaGestao">Sistema de Gestão</option>
                <option value="design">Design</option>
                <option value="outro">Outro</option>
              </select>
              {errors.service && (
                <span className={styles.errorMessage}>{errors.service}</span>
              )}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="briefing">Descreva seu projeto</label>
            <div className={styles.inputWrapper}>
              <textarea
                id="briefing"
                name="briefing"
                value={formData.briefing}
                onChange={handleChange}
                placeholder="Digite o briefing inicial (Resumo) do seu projeto"
                rows="4"
                className={errors.briefing ? styles.inputError : ""}
              />
              {errors.briefing && (
                <span className={styles.errorMessage}>{errors.briefing}</span>
              )}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="file">Anexo (opcional)</label>
            <div className={styles.fileInputWrapper}>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleChange}
                accept=".pdf,.doc,.docx,.jpg,.png"
                multiple
                className={styles.fileInput}
              />
              <label htmlFor="file" className={styles.customFileButton}>
                Escolher arquivo
              </label>
              <span className={styles.fileName}>
                {formData.file
                  ? formData.file.name
                  : "Nenhum arquivo escolhido"}
              </span>
            </div>
            <small className={styles.fileInstructions}>
              Você pode anexar arquivos como documentos, imagens ou PDFs
              relacionados ao projeto.
            </small>
          </div>

          <button type="submit" className={styles.submitButton}>
            <LuHandshake className={styles.buttonIcon} />
            Solicitar Orçamento
          </button>
        </form>
      </div>
    </section>
  );
}

export default Orçamento;
