import { useState, useEffect } from "react";
import styles from "./Portifolio.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

import Tarefex from "../../assets/img/Tarefex.png";
import TarefexPreview from "../../assets/img/TarefexPreview.png";
import REAL from "../../assets/img/Logo Branco Simulador.png";
import REALPreview from "../../assets/img/REALPreview.png";
import MariaClaraPreview from "../../assets/img/MariaClaraPreview.png";
import MariaClara from "../../assets/img/Maria Clara Logo.png";
import PedrocezarPreview from "../../assets/img/PreviewPedrocezar.png";
import LogoPedroCezar from "../../assets/img/LogoPedroCezar.png";

import { FaSquareArrowUpRight } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";

function Portifolio() {
  const { t } = useTranslation();
  const [selectedSection, setSelectedSection] = useState("clients");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Mapeamento de imagens por ID fixo
  const images = {
    real: { logo: REAL, preview: REALPreview },
    tarefex: { logo: Tarefex, preview: TarefexPreview },
    pedro_cezar: { logo: LogoPedroCezar, preview: PedrocezarPreview },
    maria_clara: { logo: MariaClara, preview: MariaClaraPreview },
  };

  // Criações GGABS com traduções
  const ownProducts = [
    {
      id: "real",
      title: t("portifolio.ownProducts.real.title", "REAL - Simulador de Orçamentos"),
      text: t("portifolio.ownProducts.real.text", "- O REAL é um {strong}simulador de orçamentos inteligente{/strong} que transforma seus serviços em propostas instantâneas, claras e profissionais, com envio direto pelo WhatsApp para agilizar o fechamento de vendas."),
      link: "https://real-iota-ivory.vercel.app/",
      imageAlt: t("portifolio.ownProducts.real.imageAlt", "Preview do REAL - Simulador de Orçamentos"),
      logoAlt: t("portifolio.ownProducts.real.logoAlt", "Logo do REAL - Simulador de Orçamentos"),
      cor1: "#00C49A",
      cor2: "#FFFFFF",
      sector: "tech",
      type: "landing-page",
      gender: t("portifolio.ownProducts.real.gender", "masculino"),
      status: "finalizado",
      linkText: t("portifolio.ownProducts.real.linkText", "Conheça o {{title}}"),
    },
    {
      id: "tarefex",
      title: t("portifolio.ownProducts.tarefex.title", "Tarefex"),
      text: t("portifolio.ownProducts.tarefex.text", "- O Tarefex é um {strong}aplicativo de gerenciamento de tarefas{/strong} perfeito para organizar suas tarefas diárias de forma simples, completamente intuitiva e organizada!"),
      link: "#",
      imageAlt: t("portifolio.ownProducts.tarefex.imageAlt", "Preview do Tarefex"),
      logoAlt: t("portifolio.ownProducts.tarefex.logoAlt", "Logo do Tarefex"),
      cor1: "#006FFF",
      cor2: "#FFFFFF",
      sector: "tech",
      type: "app",
      gender: t("portifolio.ownProducts.tarefex.gender", "masculino"),
      status: "em concepção",
      linkText: t("portifolio.ownProducts.tarefex.linkText", "Conheça o {{title}}"),
    },
  ].map((project) => ({
    ...project,
    logo: images[project.id].logo,
    image: images[project.id].preview,
  }));

  // Projetos para Clientes com traduções
  const clientProjects = [
    {
      id: "pedro_cezar",
      title: t("portifolio.clientProjects.pedro_cezar.title", "Pedro Cezar Sites"),
      text: t("portifolio.clientProjects.pedro_cezar.text", "- {strong}Criação de Logo{/strong} para o Pedro Cezar Sites"),
      link: "https://pedrocezar-orcamento.vercel.app/",
      imageAlt: t("portifolio.clientProjects.pedro_cezar.imageAlt", "Preview do Pedro Cezar Sites"),
      logoAlt: t("portifolio.clientProjects.pedro_cezar.logoAlt", "Logo do Pedro Cezar Sites"),
      cor1: "#040122",
      cor2: "#4B3CFF",
      sector: "design",
      type: "identidade-visual",
      gender: t("portifolio.clientProjects.pedro_cezar.gender", "masculino"),
      status: "finalizado",
      linkText: t("portifolio.clientProjects.pedro_cezar.linkText", "Conheça o {{title}}"),
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
    },
  ].map((project) => ({
    ...project,
    logo: images[project.id].logo,
    image: images[project.id].preview,
  }));

  const projects = selectedSection === "clients" ? clientProjects : ownProducts;

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.sector === selectedCategory);

  return (
    <div className={styles["portifolio-container"]}>
      <div className={styles.title} data-aos="fade-down">
        <h1>{t("portifolio.title", "Portfólio")}</h1>
      </div>
      <div className={styles.subtitle} data-aos="fade-up">
        <p>{t("portifolio.subtitle", "Veja o Meu trabalho: O que criei e já fiz para meus clientes!")}</p>
      </div>

      {/* Navegação entre seções */}
      <div className={styles["portifolio-section-nav"]} data-aos="fade-up">
        {[
          { id: "clients", label: t("portifolio.sections.clients", "Feitos para Clientes") },
          { id: "own-products", label: t("portifolio.sections.own-products", "Criações GGABS") },
        ].map((section) => (
          <label
            key={section.id}
            className={`${styles["nav-button"]} ${
              selectedSection === section.id ? styles.active : ""
            }`}
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

      {/* Navegação de categorias */}
      <div className={styles["portifolio-nav"]} data-aos="fade-up">
        {[
          { id: "all", label: t("portifolio.categories.all", "Tudo") },
          { id: "tech", label: t("portifolio.categories.tech", "Tecnologia") },
          { id: "design", label: t("portifolio.categories.design", "Design") },
        ].map((category) => (
          <label
            key={category.id}
            className={`${styles["nav-button"]} ${
              selectedCategory === category.id ? styles.active : ""
            }`}
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

      {/* Grid de projetos */}
      <div className={styles["portifolio-grid"]} data-aos="zoom-in">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className={styles["portifolio-card"]}
            style={{ background: project.cor1 }}
          >
            <div className={styles["card-image-wrapper"]}>
              <img
                className={styles["card-image"]}
                src={project.image}
                alt={project.imageAlt}
              />
            </div>
            <div className={styles["card-content"]}>
              <img
                src={project.logo}
                alt={project.logoAlt}
                className={styles["card-logo"]}
                style={
                  project.id === "pedro_cezar"
                    ? {
                        maxWidth: "clamp(200px, 50vw, 450px)",
                        maxHeight: "clamp(200px, 50vw, 450px)",
                      }
                    : {}
                }
              />
              <p className={styles["card-text"]} style={{ color: project.cor2 }}>
                {project.text.split(/(\{strong\}.*?\{\/strong\})/g).map((part, idx) => {
                  if (part.startsWith("{strong}") && part.endsWith("{/strong}")) {
                    return (
                      <strong key={idx}>
                        {part.replace("{strong}", "").replace("{/strong}", "")}
                      </strong>
                    );
                  }
                  return <span key={idx}>{part}</span>;
                })}
              </p>
              <div className={styles["project-status"]}>
                {project.status === "finalizado" && (
                  <>
                    <FaCheckCircle
                      className={styles["status-icon"]}
                      style={{ color: project.cor2 }}
                    />
                    <span style={{ color: project.cor2 }}>
                      {t("portifolio.status.finalizado", "Finalizado")}
                    </span>
                  </>
                )}
                {project.status === "em desenvolvimento" && (
                  <>
                    <FaTools
                      className={styles["status-icon"]}
                      style={{ color: project.cor2 }}
                    />
                    <span style={{ color: project.cor2 }}>
                      {t("portifolio.status.em desenvolvimento", "Em Desenvolvimento")}
                    </span>
                  </>
                )}
                {project.status === "em concepção" && (
                  <>
                    <FaLightbulb
                      className={styles["status-icon"]}
                      style={{ color: project.cor2 }}
                    />
                    <span style={{ color: project.cor2 }}>
                      {t("portifolio.status.em concepção", "Em Concepção")}
                    </span>
                  </>
                )}
              </div>
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portifolio;