import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { LuHandshake } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import styles from "./Orçamento.module.scss";

function Orçamento() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    otherService: "",
    briefing: "",
    deadline: "", // Novo campo adicionado
    files: [],
  });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (showModal) {
      timer = setTimeout(() => {
        navigate("/");
      }, 10000);
    }
    return () => clearTimeout(timer);
  }, [showModal, navigate]);

  const formatarTelefone = (value) => {
    const onlyNums = value.replace(/[^\d]/g, "");
    if (onlyNums.length <= 11) {
      return onlyNums
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
    }
    return onlyNums
      .slice(0, 11)
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2");
  };

  const handleChangeTelefone = (e) => {
    const value = e.target.value.replace(/[^\d]/g, "");
    const formattedPhone = formatarTelefone(value);
    setFormData((prev) => ({
      ...prev,
      phone: formattedPhone,
    }));
    setErrors((prev) => ({ ...prev, phone: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "O nome é obrigatório";
    if (!formData.email.trim()) {
      newErrors.email = "O e-mail é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Digite um e-mail válido";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "O telefone é obrigatório";
    } else if (formData.phone.replace(/[^\d]/g, "").length < 10) {
      newErrors.phone = "Digite um telefone válido";
    }
    if (!formData.service) newErrors.service = "Selecione um serviço";
    if (!formData.briefing.trim()) newErrors.briefing = "O resumo é obrigatório";
    if (formData.service === "outro" && !formData.otherService.trim())
      newErrors.otherService = "Descreva o tipo de serviço";
    if (!formData.deadline) newErrors.deadline = "Selecione um prazo"; // Validação do novo campo
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const simulateUploadProgress = (fileName) => {
    setUploadProgress((prev) => ({ ...prev, [fileName]: 0 }));
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        const current = prev[fileName] || 0;
        if (current >= 100) {
          clearInterval(interval);
          return prev;
        }
        return { ...prev, [fileName]: current + 10 };
      });
    }, 200);
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files || []);
    if (newFiles.length > 0) {
      setFormData((prev) => ({
        ...prev,
        files: [...(prev.files || []), ...newFiles],
      }));
      newFiles.forEach((file) => simulateUploadProgress(file.name));
    }
  };

  const removeFile = (fileName) => {
    setFormData((prev) => ({
      ...prev,
      files: (prev.files || []).filter((file) => file.name !== fileName),
    }));
    setUploadProgress((prev) => {
      const newProgress = { ...prev };
      delete newProgress[fileName];
      return newProgress;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const dataToSend = {
        ...formData,
        files: (formData.files || []).map((file) => file.name),
      };

      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          dataToSend,
          import.meta.env.VITE_EMAILJS_USER_ID
        )
        .then(
          (response) => {
            console.log("E-mail enviado com sucesso!", response.status, response.text);
            toast.success("Orçamento solicitado com sucesso!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
            });
            setFormData({
              name: "",
              email: "",
              phone: "",
              service: "",
              otherService: "",
              briefing: "",
              deadline: "", // Reset do novo campo
              files: [],
            });
            setErrors({});
            setUploadProgress({});
            setShowModal(true);
          },
          (error) => {
            console.error("Falha ao enviar o e-mail:", error);
            toast.error("Falha ao enviar o orçamento. Tente novamente.", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
            });
          }
        );
    } else {
      toast.error("Por favor, preencha todos os campos corretamente.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleGoBack = () => {
    navigate("/");
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className={styles.orcamentoContainer}>
      <div className={styles.formSection}>
        <button onClick={handleGoBack} className={styles.goBackButton}>
          <IoMdArrowBack className={styles.goBackIcon} />
          Voltar
        </button>
        <h1>Solicite seu orçamento</h1>
        <p className={styles.umpasso}>
          Transforme o futuro do seu negócio em realidade agora!
        </p>
        <p>
          Preencha o formulário abaixo com os detalhes do seu projeto e receba
          um orçamento sob medida em poucos passos.
        </p>
        <p>É rápido, prático e sem compromisso!</p>

        <div className={styles.contactSection}>
          <p>Prefere um atendimento mais direto?</p>
          <p>Solicite seu orçamento pelo WhatsApp:</p>
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

        <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
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
                autoComplete="off"
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
                autoComplete="off"
              />
              {errors.email && (
                <span className={styles.errorMessage}>{errors.email}</span>
              )}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Telefone</label>
            <div className={styles.inputWrapper}>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChangeTelefone}
                placeholder="(00) 99999-9999"
                maxLength="15"
                autoComplete="off"
                className={errors.phone ? styles.inputError : ""}
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
              {errors.phone && (
                <span className={styles.errorMessage}>{errors.phone}</span>
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
              {errors.service && (
                <span className={styles.errorMessage}>{errors.service}</span>
              )}
            </div>
          </div>

          {formData.service === "outro" && (
            <div className={styles.formGroup}>
              <label htmlFor="otherService">Descreva o tipo de serviço</label>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  id="otherService"
                  name="otherService"
                  value={formData.otherService}
                  onChange={handleChange}
                  placeholder="Descreva o tipo de serviço"
                  className={errors.otherService ? styles.inputError : ""}
                />
                {errors.otherService && (
                  <span className={styles.errorMessage}>
                    {errors.otherService}
                  </span>
                )}
              </div>
            </div>
          )}

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

          {/* Novo campo: Prazo Desejado */}
          <div className={styles.formGroup}>
            <label htmlFor="deadline">Prazo Desejado</label>
            <div className={styles.inputWrapper}>
              <select
                id="deadline"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className={`${styles.deadlineSelect} ${errors.deadline ? styles.inputError : ""}`}
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
            <label htmlFor="file">Anexo (opcional)</label>
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
            <small className={styles.fileInstructions}>
              Você pode anexar arquivos como documentos, imagens ou PDFs
              relacionados ao projeto.
            </small>

            {formData.files.length > 0 && (
              <div className={styles.fileList}>
                <h4>Arquivos selecionados:</h4>
                <ul>
                  {formData.files.map((file, index) => (
                    <li key={index} className={styles.fileItem}>
                      <span>{file.name}</span>
                      <div className={styles.progressContainer}>
                        <div
                          className={styles.progressBar}
                          style={{
                            width: `${uploadProgress[file.name] || 0}%`,
                          }}
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(file.name)}
                        className={styles.removeFileButton}
                      >
                        ×
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <button type="submit" className={styles.submitButton}>
            <LuHandshake className={styles.buttonIcon} />
            Solicitar Orçamento
          </button>

          <div className={styles.postSubmissionInfo}>
            <p>
              <strong>O que acontece agora?</strong>
              <br />
              Após enviar seu pedido, iremos entrar em contato em até 24 horas
              para discutir os detalhes do seu projeto, esclarecer dúvidas e avançar
              no processo de negociação e elaboração do orçamento e do projeto. Estamos ansiosos
              para transformar sua ideia em realidade!
            </p>
          </div>
        </form>

        {showModal && (
          <div className={styles.modalOverlay}>
            <div className={styles.modal}>
              <h2>Obrigado pelo seu pedido!</h2>
              <p>
                Ficamos muito felizes com sua solicitação! Nossa equipe entrará em
                contato com você imediatamente para dar continuidade ao processo.
                Fique de olho no seu e-mail (e na caixa de spam, por via das dúvidas)
                para receber nossa resposta em breve. Esperamos poder ajudar a
                transformar seu projeto em algo incrível!
              </p>
              <button onClick={closeModal} className={styles.modalCloseButton}>
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>

      <ToastContainer />
    </section>
  );
}

export default Orçamento;