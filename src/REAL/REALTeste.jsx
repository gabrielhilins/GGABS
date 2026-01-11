import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { IoMdArrowBack } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import styles from "./REAl.module.scss";
import enviarWhatsAppTeste from "./EnviarMsgTeste";
import AOS from "aos";
import "aos/dist/aos.css";
import Modal from "./Modal";
import Form from "./Form";
import StarsBackground from "../components/StarsBackground";
import { serviceNames } from "./serviceNames";
import { questionFlows } from "./questions";

function REALTeste() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    service: "",
    details: {},
    deadline: "",
    files: [],
  });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
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
    if (!formData.name.trim()) newErrors.name = "O nome é obrigatório";
    if (!formData.lastname.trim()) newErrors.lastname = "O sobrenome é obrigatório";
    if (!formData.service) newErrors.service = "Selecione um serviço";
    if (!formData.deadline) newErrors.deadline = "Selecione um prazo";

    const questions = [
      ...(questionFlows.initial[formData.service] || []),
      ...(questionFlows.detailed[formData.service] || []),
    ];
    questions.forEach((q) => {
      const value = formData.details[q.id];
      if (q.required) {
        if (q.type === "number" && (!value || value < q.min))
          newErrors[q.id] = `${q.label} deve ser pelo menos ${q.min}`;
        if ((q.type === "text" || q.type === "textarea") && !value?.trim())
          newErrors[q.id] = `${q.label} é obrigatório`;
        if (q.type === "select" && !value)
          newErrors[q.id] = `Selecione uma opção para ${q.label}`;
      }
    });

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

        const questions = [
          ...(questionFlows.initial[formData.service] || []),
          ...(questionFlows.detailed[formData.service] || []),
        ];
        const briefingSummary = questions
          .map((q) => {
            const answer = formData.details[q.id];
            return answer ? `${q.label}: ${answer}` : null;
          })
          .filter(Boolean)
          .join("\n");

        const deadlineOptions = {
          "1-semana": "1 semana",
          "2-semanas": "2 semanas",
          "1-mes": "1 mês",
          "2-meses": "2 meses",
          "flexivel": "Flexível"
        };

        enviarWhatsAppTeste(
          formData.name,
          formData.lastname,
          serviceNames[formData.service],
          deadlineOptions[formData.deadline],
          briefingSummary,
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
          questionFlows={questionFlows}
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

export default REALTeste;