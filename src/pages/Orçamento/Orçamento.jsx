import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { IoMdArrowBack } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import styles from "./Orçamento.module.scss";
import enviarWhatsAppTeste from "./EnviarMsgTeste";
import AOS from "aos";
import "aos/dist/aos.css";
import Modal from "./Modal";
import Form from "./Form";
import StarsBackground from "../../components/StarsBackground";
import { serviceNames } from "./serviceNames";

function Orçamento() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    isCompany: "nao",
    companyName: "",
    instagram: "",
    service: [],
    details: {},
    deadline: "",
    briefing: "",
  });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("details.")) {
      const detailKey = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        details: { ...prev.details, [detailKey]: value },
      }));
      setErrors((prev) => ({ ...prev, [detailKey]: "" }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
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
    setFormData((prev) => ({
      ...prev,
      files: prev.files.filter((f) => f.name !== fileName),
    }));
    setUploadProgress((prev) => {
      const newProgress = { ...prev };
      delete newProgress[fileName];
      return newProgress;
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.isCompany === "nao") {
      if (!formData.name.trim()) newErrors.name = "O nome é obrigatório";
      if (!formData.lastname.trim())
        newErrors.lastname = "O sobrenome é obrigatório";
    }
    if (formData.isCompany === "sim" && !formData.companyName.trim()) {
      newErrors.companyName = "O nome da empresa é obrigatório";
    }
    if (!formData.service || formData.service.length === 0) {
      newErrors.service = "Selecione pelo menos um serviço";
    }
    if (!formData.deadline) newErrors.deadline = "Selecione um prazo";

    if (Array.isArray(formData.service) && formData.service.includes("outro")) {
      if (!formData.details.outro_description?.trim()) {
        newErrors.outro_description =
          "A descrição é obrigatória para o serviço 'Outro'";
      }
    }

    setErrors(newErrors);
    return !Object.keys(newErrors).length;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (validateForm()) {
      setTimeout(() => {
        const timestamp = new Date();
        const locale = "pt-BR";

        const formattedDate = timestamp.toLocaleDateString(locale, {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });

        const formattedTime = timestamp.toLocaleTimeString(locale, {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });

        const selectedServiceNames = formData.service
          .map((key) => serviceNames[key])
          .join(", ");

        let outroSummary = "";
        if (
          formData.service.includes("outro") &&
          formData.details.outro_description
        ) {
          outroSummary = `Descrição do serviço 'Outro': ${formData.details.outro_description}`;
        } else {
          outroSummary = "Múltiplos serviços selecionados";
        }

        const deadlineOptions = {
          "1-semana": "1 semana",
          "2-semanas": "2 semanas",
          "1-mes": "1 mês",
          "2-meses": "2 meses",
          flexivel: "Flexível",
        };

        enviarWhatsAppTeste(
          formData.name,
          formData.lastname,
          formData.isCompany,
          `${formData.companyName} (Instagram: ${formData.instagram})`,
          formData.companyName,
          selectedServiceNames,
          deadlineOptions[formData.deadline],
          formData.briefing,
          outroSummary,
          formattedDate,
          formattedTime,
        );

        setShowModal(true);
        toast.success("Solicitação enviada com sucesso!");
        setLoading(false);
      }, 2000);
    } else {
      toast.error("Corrija os erros no formulário.");
      setLoading(false);
    }
  };

  return (
    <section className={styles.realContainer}>
      <StarsBackground section="hero" />
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

        <p
          className={styles.requiredNote}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Campos com * são obrigatórios
          <span className={styles.requiredAsterisk}>*</span>
        </p>

        <Form
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          handleFileChange={handleFileChange}
          handleSubmit={handleSubmit}
          files={formData.files}
          uploadProgress={uploadProgress}
          removeFile={removeFile}
          serviceNames={serviceNames}
        />
      </div>

      {loading && (
        <div className={styles.loader}>
          <div className={styles.spinner}></div>
          <p>Enviando sua solicitação...</p>
        </div>
      )}

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        navigate={navigate}
      />
      <ToastContainer />
    </section>
  );
}

export default Orçamento;
