import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { LuHandshake } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { FaArrowsRotate } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./REAl.module.scss";
import LogoReal from "../assets/img/Logo Preto Simulador.png";
import enviarWhatsApp from "./EnviarMensagem";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheck } from "react-icons/fa";

function REAL() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    service: "",
    otherService: "",
    briefing: "",
    deadline: "",
    files: [],
  });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});
  const [budget, setBudget] = useState(null);
  const [loading, setLoading] = useState(false);
  const [completedFiles, setCompletedFiles] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    let timer;
    if (showModal) {
      timer = setTimeout(() => {
        navigate("/");
        window.scrollTo(0, 0); // Garante que vá ao topo da página inicial
      }, 10000); // 10 segundos
    }

    const handleFocus = () => {
      if (budget) {
        setShowModal(true);
      }
    };

    window.addEventListener("focus", handleFocus);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("focus", handleFocus);
    };
  }, [showModal, navigate, budget]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files || []);
    if (newFiles.length > 0) {
      setFormData((prev) => ({
        ...prev,
        files: [...prev.files, ...newFiles],
      }));
      newFiles.forEach((file) => simulateUploadProgress(file.name));
    }
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

  const removeFile = (fileName) => {
    setFormData((prev) => ({
      ...prev,
      files: prev.files.filter((file) => file.name !== fileName),
    }));
    setUploadProgress((prev) => {
      const newProgress = { ...prev };
      delete newProgress[fileName];
      return newProgress;
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "O nome é obrigatório";
    if (!formData.service) newErrors.service = "Selecione um serviço";
    if (!formData.briefing.trim())
      newErrors.briefing = "O resumo é obrigatório";
    if (formData.service === "outro" && !formData.otherService.trim())
      newErrors.otherService = "Descreva o tipo de serviço";
    if (!formData.deadline) newErrors.deadline = "Selecione um prazo";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateBudget = () => {
    const { service, otherService, deadline } = formData;

    const precosBase = {
      cardapio: 800,
      ecommerce: 5000,
      gestaoEmpresarial: 7000,
      gestaoPedidos: 3000,
      design: 1500,
      landingPage: 2000,
      materialPromocional: 1000,
      portfolio: 2500,
      siteInstitucional: 3500,
      outro: 2000,
    };

    const multiplicadoresPrazo = {
      "1-semana": 1.5,
      "2-semanas": 1.3,
      "1-mes": 1.1,
      "2-meses": 1.0,
      flexivel: 0.9,
    };

    const precoBase = precosBase[service] || precosBase.outro;
    const multiplicadorPrazo = multiplicadoresPrazo[deadline] || 1.0;
    const precoTotal = precoBase * multiplicadorPrazo;

    return {
      service: service === "outro" ? otherService : service,
      deadline,
      briefingSummary:
        formData.briefing.slice(0, 100) +
        (formData.briefing.length > 100 ? "..." : ""),
      details: [
        { desc: "Serviço Base", qty: "1", unit: precoBase, total: precoBase },
        {
          desc: "Ajuste por Prazo",
          qty: "-",
          unit: "-",
          total: precoBase * multiplicadorPrazo - precoBase,
        },
      ],
      total: precoTotal,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (validateForm()) {
      setTimeout(() => {
        const calculatedBudget = calculateBudget();
        setBudget(calculatedBudget);
        toast.success("Orçamento gerado com sucesso!");
        setLoading(false);
      }, 2000); // Atraso de 2 segundos para o loader ser visível
    } else {
      toast.error("Por favor, corrija os erros no formulário.");
      setLoading(false);
    }
  };

  const handleEnviarWhatsApp = () => {
    if (!budget) return;

    const { name, lastname, deadline } = formData;
    const { service, briefingSummary, total, details } = budget;

    const precoBase =
      details.find((d) => d.desc === "Serviço Base")?.total ?? 0;
    const ajustePrazo =
      details.find((d) => d.desc === "Ajuste por Prazo")?.total ?? 0;
    const precoTotal = total ?? 0;

    enviarWhatsApp(
      name,
      lastname,
      service,
      deadline,
      briefingSummary,
      precoBase,
      ajustePrazo,
      0,
      precoTotal
    );
  };

  const resetForm = () => {
    setFormData({
      name: "",
      lastname: "",
      service: "",
      otherService: "",
      briefing: "",
      deadline: "",
      files: [],
    });
    setErrors({});
    setBudget(null);
    setUploadProgress({});
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <section className={styles.realContainer}>
      <div className={styles.formSection}>
        <div className={styles.headerRow}>
          <button onClick={handleGoBack} className={styles.goBackButton}>
            <IoMdArrowBack className={styles.goBackIcon} />
            Voltar
          </button>
        </div>
        <h1 data-aos="fade-up">Solicite seu Orçamento</h1>
        <p className={styles.umpasso} data-aos="fade-up" data-aos-delay="100">
          Transforme o futuro do seu negócio em realidade agora!
        </p>
        <div
          className={styles.description}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p>
            Preencha o formulário abaixo com os detalhes do seu projeto e gere
            um orçamento automático sob medida instantaneamente.
          </p>
          <p>É rápido, prático e sem compromisso!</p>
        </div>

        {!budget ? (
          <form
            className={styles.form}
            autoComplete="off"
            onSubmit={handleSubmit}
          >
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
            <div>
              <h3 style={{ color: "black", fontSize: "28px" }}>
                Simulador de Orçamento
              </h3>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="name">Qual seu Nome?</label>
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
                  autoCapitalize="words"
                />
                {errors.name && (
                  <span className={styles.errorMessage}>{errors.name}</span>
                )}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="lastname">Qual seu Sobrenome?</label>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Digite seu sobrenome"
                  className={errors.lastname ? styles.inputError : ""}
                  autoComplete="off"
                  autoCapitalize="words"
                />
                {errors.lastname && (
                  <span className={styles.errorMessage}>{errors.lastname}</span>
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
                  <option value="gestaoEmpresarial">
                    Gestão Empresarial (ERP)
                  </option>
                  <option value="gestaoPedidos">Gestão de Pedidos</option>
                  <option value="design">Identidade Visual</option>
                  <option value="landingPage">Landing Page</option>
                  <option value="materialPromocional">
                    Material Promocional
                  </option>
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

            <div className={styles.formGroup}>
              <label htmlFor="deadline">Prazo Desejado</label>
              <div className={styles.inputWrapper}>
                <select
                  id="deadline"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  className={errors.deadline ? styles.inputError : ""}
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

              {formData.files.length > 0 && (
                <div className={styles.fileList}>
                  <h4>Arquivos selecionados:</h4>
                  <ul>
                    {formData.files.map((file, index) => {
                      const progress = uploadProgress[file.name] || 0;
                      const isCompleted = progress === 100;

                      return (
                        <li key={index} className={styles.fileItem}>
                          <span>{file.name}</span>
                          <div className={styles.progressContainer}>
                            <div
                              className={styles.progressBar}
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(file.name)}
                            className={styles.removeFileButton}
                          >
                            ×
                          </button>
                          {isCompleted && (
                            <FaCheck className={styles.checkIcon} />
                            
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>

            <button type="submit" className={styles.submitButton}>
              <LuHandshake className={styles.buttonIcon} />
              Gerar Orçamento
            </button>
          </form>
        ) : (
          <div className={styles.receiptContainer}>
            <div className={styles.logoContainer}>
              <div className={styles.logo}>
                <img src={LogoReal} alt="Logo REAL" />
                <p>© 2025 REAL. Todos os direitos reservados</p>
                <a
                  href="https://real-iota-ivory.vercel.app/"
                  className={styles.knowREAL}
                >
                  Conheça o REAL - Simulador de Orçamentos
                </a>
              </div>
            </div>
            <h3>Orçamento Gerado - {budget.service}</h3>
            <hr />
            <div className={styles.receiptInfos}>
              <p>
                <strong>Cliente:</strong> {formData.name} {formData.lastname}
              </p>
              <p>
                <strong>Serviço:</strong> {budget.service}
              </p>
              <p>
                <strong>Prazo Desejado:</strong> {budget.deadline}
              </p>
              <p>
                <strong>Descrição inicial do Projeto:</strong>{" "}
                {budget.briefingSummary}
              </p>
            </div>
            <hr className={styles.hr} />
            <h4>Detalhamento do Orçamento</h4>
            <table>
              <thead>
                <tr>
                  <th>Descrição</th>
                  <th>Quantidade</th>
                  <th>Preço Unitário</th>
                  <th>Total (R$)</th>
                </tr>
              </thead>
              <tbody>
                {budget.details.map((item, index) => (
                  <tr key={index}>
                    <td>{item.desc}</td>
                    <td>{item.qty}</td>
                    <td>
                      {item.unit === "-" ? "-" : `R$${item.unit.toFixed(2)}`}
                    </td>
                    <td>R${item.total.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h4 className={styles.total}>
              Total do Orçamento: R${budget.total.toFixed(2)}
            </h4>
            <p className={styles.observacao}>Observações:</p>
            <ul>
              <li>
                Orçamento sujeito à alteração após análise detalhada do Briefing
                (Resumo do projeto).
              </li>
              <li>Validade do orçamento: 7 dias.</li>
              <li>
                Quer ajustar algo? Refaça a simulação ou entre em contato!
              </li>
            </ul>
            <hr />
            <div className={styles.contactSection}>
              <p style={{ color: "black" }}>
                Clique em &quot;Solicitar Orçamento via WhatsApp&quot; para
                podermos fechar negócio!
              </p>
              <button
                onClick={handleEnviarWhatsApp}
                className={styles.whatsappButton}
              >
                <FaWhatsapp className={styles.whatsappIcon} />
                Solicite seu orçamento via WhatsApp
              </button>
            </div>
            <button onClick={resetForm} className={styles.resetButton}>
              <FaArrowsRotate className={styles.icon} />
              Simular Outro Orçamento
            </button>
          </div>
        )}
      </div>

      {loading && (
        <div className={styles.loader}>
          <div className={styles.spinner}></div>
          <p>Calculando seu orçamento...</p>
        </div>
      )}

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h3>Seu pedido está a caminho!</h3>
            <p>
              Agradecemos por escolher a GGabs Design e Tech! Sua solicitação de
              orçamento foi enviada com sucesso via WhatsApp. Nossa equipe
              entrará em contato em breve para transformar sua ideia em
              realidade.
            </p>
            <p className={styles.redirectNotice}>
              Você será redirecionado ao topo da página inicial em 10 segundos.
            </p>
          </div>
        </div>
      )}

      <ToastContainer />
    </section>
  );
}

export default REAL;
