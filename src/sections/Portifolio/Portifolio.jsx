import { useState, useEffect, useMemo } from "react";
import styles from "./Portifolio.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

import Tarefex from "../../assets/img/Tarefex.png";
import TarefexPreview from "../../assets/img/TarefexPreview.png";
import REAL from "../../assets/img/Logo Branco Simulador.png";
import REALPreview from "../../assets/img/REALPreview.png";
import REF from '../../assets/img/LogoREF.png';
import REFPreview from '../../assets/img/REFPreview.png';
import MariaClaraPreview from "../../assets/img/MariaClaraPreview.png";
import MariaClara from "../../assets/img/Maria Clara Logo.png";
import PedrocezarPreview from "../../assets/img/PreviewPedrocezar.png";
import LogoPedroCezar from "../../assets/img/LogoPedroCezar.png";
import JhonSilva from '../../assets/img/WORDMARK PRINCIPAL JHON SILVA.png';
import LogoJhonSilva from '../../assets/img/JS GRADIENTE CLARO.png';

import { FaSquareArrowUpRight } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa"; // Ícone do Instagram

function Portifolio() {
  const { t } = useTranslation();
  const [selectedSection, setSelectedSection] = useState("clients");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Mapeamento de imagens
  const images = {
    real: { logo: REAL, preview: REALPreview },
    ref: { logo: REF, preview: REFPreview },
    tarefex: { logo: Tarefex, preview: TarefexPreview },
    pedro_cezar: { logo: LogoPedroCezar, preview: PedrocezarPreview },
    maria_clara: { logo: MariaClara, preview: MariaClaraPreview },
    jhon_silva: { logo: LogoJhonSilva, preview: JhonSilva },
  };

  // === PROJETOS PRÓPRIOS ===
  const ownProducts = [
    {
      id: "real",
      title: t("portifolio.ownProducts.real.title", "REAL"),
      text: t("portifolio.ownProducts.real.text", "- O REAL é um {strong}simulador de orçamentos inteligente{/strong} que transforma seus serviços em propostas instantâneas, claras e profissionais, com envio direto pelo WhatsApp para agilizar o fechamento de vendas."),
      link: "https://real-iota-ivory.vercel.app/",
      postInstagram: "https://instagram.com/p/exemplo_real", // Exemplo
      imageAlt: t("portifolio.ownProducts.real.imageAlt", "Preview do REAL"),
      logoAlt: t("portifolio.ownProducts.real.logoAlt", "Logo do REAL"),
      cor1: "#00C49A",
      cor2: "#FFFFFF",
      sector: "tech",
      type: "landing-page",
      gender: t("portifolio.ownProducts.real.gender", "masculino"),
      status: "finalizado",
      linkText: t("portifolio.ownProducts.real.linkText", "Conheça o {{title}}"),
      date: "2025-03-15",
    },
    {
      id: "ref",
      title: t("portifolio.ownProducts.ref.title", "REF"),
      text: t("portifolio.ownProducts.ref.text", "- O REF é um {strong}gerador de referências no formato ABNT{/strong} moderno e intuitivo."),
      link: "https://ref-gerador-abnt.vercel.app/",
      postInstagram: "https://instagram.com/p/exemplo_ref",
      imageAlt: t("portifolio.ownProducts.ref.imageAlt", "Preview do REF"),
      logoAlt: t("portifolio.ownProducts.ref.logoAlt", "Logo do REF"),
      cor1: "#1D4ED8",
      cor2: "#FFFFFF",
      sector: "tech",
      type: "landing-page",
      gender: t("portifolio.ownProducts.ref.gender", "masculino"),
      status: "finalizado",
      linkText: t("portifolio.ownProducts.ref.linkText", "Conheça o {{title}}"),
      date: "2025-02-20",
    },
  ].map(project => ({
    ...project,
    logo: images[project.id].logo,
    image: images[project.id].preview,
  }));

  const clientProjects = [
    {
      id: "jhon_silva",
      title: t("portifolio.clientProjects.jhon_silva.title", "Jhon Silva"),
      text: t("portifolio.clientProjects.Jhon_Silva.text", "- {strong}Identidade Visual{/strong} para o criador de plataformas Jhon Silva"),
      link: "https://portifolio-jhon-sites.vercel.app/",
      postInstagram: "https://www.instagram.com/p/DQM4bR6gbTe/?img_index=1", 
      imageAlt: t("portifolio.clientProjects.jhon_silva.imageAlt", "Preview do Jhon Silva"),
      logoAlt: t("portifolio.clientProjects.jhon_silva.logoAlt", "Logo do Jhon Silva"),
      cor1: "#101719",
      cor2: "#00F6FF",
      sector: "design",
      type: "identidade-visual",
      gender: t("portifolio.clientProjects.jhon_silva.gender", "masculino"),
      status: "finalizado",
      linkText: t("portifolio.clientProjects.jhon_silva.linkText", "Conheça a {{title}}"),
      date: "2025-04-10",
    },
    {
      id: "pedro_cezar",
      title: t("portifolio.clientProjects.pedro_cezar.title", "Pedro Cezar Sites"),
      text: t("portifolio.clientProjects.pedro_cezar.text", "- {strong}Criação de Logo{/strong} para o Pedro Cezar Sites"),
      link: "https://pedrocezar-orcamento.vercel.app/",
      postInstagram: "https://www.instagram.com/p/DJcuSe2SK9r/?img_index=1",
      imageAlt: t("portifolio.clientProjects.pedro_cezar.imageAlt", "Preview do Pedro Cezar Sites"),
      logoAlt: t("portifolio.clientProjects.pedro_cezar.logoAlt", "Logo do Pedro Cezar Sites"),
      cor1: "#040122",
      cor2: "#4B3CFF",
      sector: "design",
      type: "identidade-visual",
      gender: t("portifolio.clientProjects.pedro_cezar.gender", "masculino"),
      status: "finalizado",
      linkText: t("portifolio.clientProjects.pedro_cezar.linkText", "Conheça o {{title}}"),
      date: "2025-03-25",
    },
    {
      id: "maria_clara",
      title: t("portifolio.clientProjects.maria_clara.title", "Maria Clara Arquitetura"),
      text: t("portifolio.clientProjects.maria_clara.text", "- {strong}Pacote Profissional (Identidade Visual + Portfólio){/strong} para a Estudante de Arquitetura Maria Clara"),
      link: "https://portfolio-maria-clara.vercel.app/",
      imageAlt: t("portifolio.clientProjects.maria_clara.imageAlt", "Preview do Maria Clara Arquitetura"),
      logoAlt: t("portifolio.clientProjects.maria_clara.logoAlt", "Logo do Maria Clara Arquitetura"),
      cor1: "#FFFCED",
      cor2: "#273BB1",
      sector: "tech",
      type: "portfolio",
      gender: t("portifolio.clientProjects.maria_clara.gender", "feminino"),
      status: "em desenvolvimento",
      linkText: t("portifolio.clientProjects.maria_clara.linkText", "Conheça a {{title}}"),
      date: "2025-04-20",
    },
  ].map(project => ({
    ...project,
    logo: images[project.id].logo,
    image: images[project.id].preview,
  }));

  // === ORDENAÇÃO ===
  const sortProjects = (projects) => {
    return [...projects].sort((a, b) => {
      const statusOrder = { finalizado: 0, "em desenvolvimento": 1, "em concepção": 2 };
      const statusDiff = statusOrder[a.status] - statusOrder[b.status];
      if (statusDiff !== 0) return statusDiff;
      return new Date(b.date) - new Date(a.date);
    });
  };

  const projects = useMemo(() => {
    const base = selectedSection === "clients" ? clientProjects : ownProducts;
    return sortProjects(base);
  }, [selectedSection]);

  const filteredProjects = useMemo(() => {
    return selectedCategory === "all"
      ? projects
      : projects.filter(p => p.sector === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <div className={styles["portifolio-container"]}>
      <div className={styles.title} data-aos="fade-down">
        <h1>{t("portifolio.title", "Portfólio")}</h1>
      </div>
      <div className={styles.subtitle} data-aos="fade-up">
        <p>{t("portifolio.subtitle", "Veja o Meu trabalho: O que criei e já fiz para meus clientes!")}</p>
      </div>

      {/* Navegação de Seção */}
      <div className={styles["portifolio-section-nav"]} data-aos="fade-up">
        {[
          { id: "clients", label: t("portifolio.sections.clients", "Feitos para Clientes") },
          { id: "own-products", label: t("portifolio.sections.own-products", "Criações GGABS") },
        ].map(section => (
          <label
            key={section.id}
            className={`${styles["nav-button"]} ${selectedSection === section.id ? styles.active : ""}`}
          >
            <input
              type="radio"
              name="section"
              value={section.id}
              checked={selectedSection === section.id}
              onChange={() => {
                setSelectedSection(section.id);
                setSelectedCategory("all");
              }}
            />
            {section.label}
          </label>
        ))}
      </div>

      {/* Navegação de Categoria */}
      <div className={styles["portifolio-nav"]} data-aos="fade-up">
        {[
          { id: "all", label: t("portifolio.categories.all", "Tudo") },
          { id: "tech", label: t("portifolio.categories.tech", "Tecnologia") },
          { id: "design", label: t("portifolio.categories.design", "Design") },
        ].map(category => (
          <label
            key={category.id}
            className={`${styles["nav-button"]} ${selectedCategory === category.id ? styles.active : ""}`}
          >
            <input
              type="radio"
              name="category"
              value={category.id}
              checked={selectedCategory === category.id}
              onChange={() => setSelectedCategory(category.id)}
            />
            {category.label}
          </label>
        ))}
      </div>

      {/* Grid de Projetos */}
      <div className={styles["portifolio-grid"]} data-aos="zoom-in">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className={styles["portifolio-card"]}
            style={{ background: project.cor1 }}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className={styles["card-image-wrapper"]}>
              <img className={styles["card-image"]} src={project.image} alt={project.imageAlt} />
            </div>

            <div className={styles["card-content"]}>
              <img
                src={project.logo}
                alt={project.logoAlt}
                className={styles["card-logo"]}
                style={
                  project.id === "pedro_cezar"
                    ? { maxWidth: "clamp(200px, 50vw, 450px)", maxHeight: "clamp(200px, 50vw, 450px)" }
                    : {}
                }
              />

              <p className={styles["card-text"]} style={{ color: project.cor2 }}>
                {project.text.split(/(\{strong\}.*?\{\/strong\})/g).map((part, idx) => {
                  if (part.startsWith("{strong}") && part.endsWith("{/strong}")) {
                    return (
                      <strong key={idx} style={{ color: project.cor2 }}>
                        {part.replace("{strong}", "").replace("{/strong}", "")}
                      </strong>
                    );
                  }
                  return <span key={idx}>{part}</span>;
                })}
              </p>

              {/* Status */}
              <div className={styles["project-status"]}>
                {project.status === "finalizado" && (
                  <>
                    <FaCheckCircle className={styles["status-icon"]} style={{ color: project.cor2 }} />
                    <span style={{ color: project.cor2 }}>
                      {t("portifolio.status.finalizado", "Finalizado")}
                    </span>
                  </>
                )}
                {project.status === "em desenvolvimento" && (
                  <>
                    <FaTools className={styles["status-icon"]} style={{ color: project.cor2 }} />
                    <span style={{ color: project.cor2 }}>
                      {t("portifolio.status.em desenvolvimento", "Em Desenvolvimento")}
                    </span>
                  </>
                )}
                {project.status === "em concepção" && (
                  <>
                    <FaLightbulb className={styles["status-icon"]} style={{ color: project.cor2 }} />
                    <span style={{ color: project.cor2 }}>
                      {t("portifolio.status.em concepção", "Em Concepção")}
                    </span>
                  </>
                )}
              </div>

              {/* Botões */}
              <div className={styles.links}>
                {project.status !== "em concepção" && (
                  <a
                    href={project.link}
                    className={styles["card-button"]}
                    style={{ background: project.cor2, color: project.cor1 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaSquareArrowUpRight className={styles.icon} />
                    {project.linkText.replace("{{title}}", project.title)}
                  </a>
                )}

                {project.postInstagram && (
                  <a
                    href={project.postInstagram}
                    className={styles["instagram-button"]}
                    style={{ background: project.cor2, color: project.cor1 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className={styles.icon} />
                    {t("portifolio.seeOnInstagram")}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portifolio;