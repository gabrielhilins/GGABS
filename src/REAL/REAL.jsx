import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./REAl.module.scss";
import enviarWhatsApp from "./EnviarMensagem";
import AOS from "aos";
import "aos/dist/aos.css";
import Modal from "./Modal";
import Form from "./Form";
import Receipt from "./Receipt";

// Mapeamento dos valores do serviço para nomes legíveis
const serviceNames = {
  cardapio: "Cardápio",
  ecommerce: "E-Commerce",
  gestaoEmpresarial: "Gestão Empresarial (ERP)",
  gestaoPedidos: "Gestão de Pedidos",
  design: "Identidade Visual",
  landingPage: "Landing Page",
  materialPromocional: "Material Promocional",
  portfolio: "Portfólio",
  siteInstitucional: "Site Institucional",
  outro: "Serviço Personalizado",
};

function REAL() {
  const [formData, setFormData] = useState({ name: "", lastname: "", service: "", otherService: "", briefing: "", deadline: "", files: [] });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});
  const [budget, setBudget] = useState(null);
  const [generatedTimestamp, setGeneratedTimestamp] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFormData((prev) => ({ ...prev, files: [...prev.files, ...newFiles] }));
    newFiles.forEach((file) => {
      setUploadProgress((prev) => ({ ...prev, [file.name]: 0 }));
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          const current = prev[file.name] || 0;
          if (current >= 100) clearInterval(interval);
          return { ...prev, [file.name]: Math.min(current + 10, 100) };
        });
      }, 200);
    });
  };

  const removeFile = (fileName) => {
    setFormData((prev) => ({ ...prev, files: prev.files.filter((f) => f.name !== fileName) }));
    setUploadProgress((prev) => { const { [fileName]: _, ...rest } = prev; return rest; });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "O nome é obrigatório";
    if (!formData.service) newErrors.service = "Selecione um serviço";
    if (!formData.briefing.trim()) newErrors.briefing = "O resumo é obrigatório";
    if (formData.service === "outro" && !formData.otherService.trim()) newErrors.otherService = "Descreva o serviço";
    if (!formData.deadline) newErrors.deadline = "Selecione um prazo";
    setErrors(newErrors);
    return !Object.keys(newErrors).length;
  };

  const calculateBudget = () => {
    const { service, otherService, deadline } = formData;
    const precosBase = { cardapio: 800, ecommerce: 5000, gestaoEmpresarial: 7000, gestaoPedidos: 3000, design: 1500, landingPage: 2000, materialPromocional: 1000, portfolio: 2500, siteInstitucional: 3500, outro: 2000 };
    const multiplicadoresPrazo = { "1-semana": 1.5, "2-semanas": 1.3, "1-mes": 1.1, "2-meses": 1.0, flexivel: 0.9 };
    const precoBase = precosBase[service] || precosBase.outro;
    const multiplicador = multiplicadoresPrazo[deadline] || 1.0;
    const total = precoBase * multiplicador;

    return {
      service: service === "outro" ? otherService : service,
      deadline,
      briefingSummary: formData.briefing.slice(0, 100) + (formData.briefing.length > 100 ? "..." : ""),
      details: [
        { desc: "Serviço Base", qty: "1", unit: precoBase, total: precoBase },
        { desc: "Ajuste por Prazo", qty: "-", unit: "-", total: total - precoBase },
      ],
      total,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (validateForm()) {
      setTimeout(() => {
        const newBudget = calculateBudget();
        const timestamp = new Date();
        setGeneratedTimestamp(timestamp);
        setBudget(newBudget);
        toast.success("Orçamento gerado com sucesso!");
        setLoading(false);
      }, 2000);
    } else {
      toast.error("Corrija os erros no formulário.");
      setLoading(false);
    }
  };

  const handleEnviarWhatsApp = () => {
    if (!budget || !generatedTimestamp) return;
    const { name, lastname, deadline } = formData;
    const { service, briefingSummary, total, details } = budget;
    const formattedDate = generatedTimestamp.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    const formattedTime = generatedTimestamp.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    enviarWhatsApp(
      name,
      lastname,
      serviceNames[service] || service, // Usa o serviceNames definido aqui
      deadline,
      briefingSummary,
      details[0].total,
      details[1].total,
      0,
      total,
      formattedDate,
      formattedTime
    );
    setShowModal(true);
  };

  const resetForm = () => {
    setFormData({ name: "", lastname: "", service: "", otherService: "", briefing: "", deadline: "", files: [] });
    setErrors({});
    setBudget(null);
    setGeneratedTimestamp(null);
    setUploadProgress({});
  };

  return (
    <section className={styles.realContainer}>
      <div className={styles.formSection}>
        <div className={styles.headerRow}>
          <button onClick={() => navigate("/")} className={styles.goBackButton}>
            <IoMdArrowBack className={styles.goBackIcon} /> Voltar
          </button>
        </div>
        <h1 data-aos="fade-up">Solicite seu Orçamento</h1>
        <p className={styles.umpasso} data-aos="fade-up" data-aos-delay="100">
          Transforme o futuro do seu negócio em realidade agora!
        </p>
        <div className={styles.description} data-aos="fade-up" data-aos-delay="200">
          <p>Preencha o formulário abaixo e gere um orçamento automático.</p>
          <p>É rápido, prático e sem compromisso!</p>
        </div>

        {!budget ? (
          <Form
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            handleFileChange={handleFileChange}
            handleSubmit={handleSubmit}
            files={formData.files}
            uploadProgress={uploadProgress}
            removeFile={removeFile}
          />
        ) : (
          <Receipt
            budget={budget}
            formData={formData}
            handleEnviarWhatsApp={handleEnviarWhatsApp}
            resetForm={resetForm}
            generatedTimestamp={generatedTimestamp}
            serviceNames={serviceNames} // Passa serviceNames como prop
          />
        )}
      </div>

      {loading && (
        <div className={styles.loader}>
          <div className={styles.spinner}></div>
          <p>Calculando seu orçamento...</p>
        </div>
      )}

      <Modal showModal={showModal} setShowModal={setShowModal} navigate={navigate} />
      <ToastContainer />
    </section>
  );
}

export default REAL;