import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { IoMdArrowBack } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import styles from "./REAl.module.scss";
import enviarWhatsApp from "./EnviarMensagem";
import AOS from "aos";
import "aos/dist/aos.css";

import Modal from "./Modal";
import Form from "./Form";
import Receipt from "./Receipt";

import { serviceNames } from "./serviceNames";
import { questionFlows } from "./questions";
import { pricingModels } from "./pricing";
import calculateBudget from "./calculateBudget";

function REAL() {
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
  const [budget, setBudget] = useState(null);
  const [generatedTimestamp, setGeneratedTimestamp] = useState(null);
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
      const { [fileName]: _, ...rest } = prev;
      return rest;
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "O nome é obrigatório";
    if (!formData.service) newErrors.service = "Selecione um serviço";
    if (!formData.deadline) newErrors.deadline = "Selecione um prazo";

    const questions = [
      ...(questionFlows.initial[formData.service] || []),
      ...(questionFlows.detailed[formData.service] || []),
    ];
    questions.forEach((q) => {
      const value = formData.details[q.id];
      // Só valida se o campo for obrigatório
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
        const newBudget = calculateBudget(
          formData,
          pricingModels,
          serviceNames
        );
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
    const { service, total, details } = budget;
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
      serviceNames[service],
      deadline,
      "Detalhes enviados no formulário",
      details[0].total, // Base price
      details.slice(1, -1).reduce((sum, item) => sum + item.total, 0), // Additional costs
      0, // Assuming no discount for now
      total,
      formattedDate,
      formattedTime
    );
    setShowModal(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      lastname: "",
      service: "",
      details: {},
      deadline: "",
      files: [],
    });
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
        <div
          className={styles.description}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p>Responda às perguntas abaixo e gere um orçamento personalizado.</p>
          <p>É rápido, prático e sem compromisso!</p>
        </div>
        <p className={styles.requiredNote} data-aos="fade-up" data-aos-delay="300">
          Campos com <span className={styles.requiredAsterisk}>*</span> são obrigatórios
        </p>

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
            serviceNames={serviceNames}
            questionFlows={questionFlows}
          />
        ) : (
          <Receipt
            budget={budget}
            formData={formData}
            handleEnviarWhatsApp={handleEnviarWhatsApp}
            resetForm={resetForm}
            generatedTimestamp={generatedTimestamp}
            serviceNames={serviceNames}
          />
        )}
      </div>

      {loading && (
        <div className={styles.loader}>
          <div className={styles.spinner}></div>
          <p>Calculando seu orçamento...</p>
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

export default REAL;
