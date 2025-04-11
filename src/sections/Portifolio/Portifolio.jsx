import { useState, useEffect } from "react";
import styles from "./Portifolio.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

import Tarefex from "../../assets/img/Tarefex.png";
import TarefexPreview from "../../assets/img/TarefexPreview.png";
import REAL from "../../assets/img/Logo Branco Simulador.png";
import REALPreview from "../../assets/img/REALPreview.png";

import MariaClaraPreview from "../../assets/img/MariaClaraPreview.png";
import MariaClara from "../../assets/img/Maria Clara Logo.png";
import PedrocezarPreview from "../../assets/img/PreviewPedrocezar.png";
import LogoPedroCezar from "../../assets/img/LogoPedroCezar.png";

import { FaSquareArrowUpRight } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa"; // Ícone para "Finalizado"
import { FaTools } from "react-icons/fa"; // Ícone para "Em Desenvolvimento"
import { FaLightbulb } from "react-icons/fa"; // Ícone para "Em Concepção"

function Portifolio() {
  const [selectedSection, setSelectedSection] = useState("clients");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Criações GGABS
  const ownProducts = [
    {
      title: "REAL - Simulador de Orçamentos",
      text: [
        "- O REAL é",

        " um ",
        <strong key="strong">simulador de orçamentos inteligente</strong>,
        " que transforma seus serviços em propostas instantâneas, claras e profissionais, com envio direto pelo WhatsApp para agilizar o fechamento de vendas.",
      ],
      link: "https://real-iota-ivory.vercel.app/",
      logo: REAL,
      cor1: "#00C49A",
      cor2: "#FFFFFF",
      sector: "tech",
      type: "landing-page",
      image: REALPreview,
      gender: "masculino",
      status: "finalizado",
    },
    {
      title: "Tarefex",
      text: [
        "- O Tarefex é um ",
        <strong key="strong">aplicativo de gerenciamento de tarefas</strong>,
        " perfeito para organizar suas tarefas diárias de forma simples, completamente intuitiva e organizada!",
      ],
      link: "#",
      logo: Tarefex,
      cor1: "#006FFF",
      cor2: "#ffffff",
      sector: "tech",
      type: "app",
      image: TarefexPreview,
      gender: "masculino",
      status: "em concepção",
    },
  ];

  // Projetos para Clientes
  const clientProjects = [
    {
      title: "Pedro Cezar Sites",
      text: [
        "- ",
        <strong key="strong">Identidade visual</strong>,
        " para o Pedro Cezar Sites",
      ],
      link: "https://pedrocezar-orcamento.vercel.app/",
      logo: LogoPedroCezar,
      cor1: "#040122",
      cor2: "#4B3CFF",
      sector: "design",
      type: "identidade-visual",
      image: PedrocezarPreview,
      gender: "masculino",
      status: "finalizado",
    },
    {
      title: "Maria Clara Arquitetura",
      text: [
        "- ",
        <strong key="strong">Portfólio e Identidade Visual</strong>,
        " para a Estudante de Arquitetura Maria Clara",
      ],
      link: "https://portfolio-maria-clara.vercel.app/",
      logo: MariaClara,
      cor1: "#FFFCED",
      cor2: "#273BB1",
      sector: "tech",
      type: "portfolio",
      image: MariaClaraPreview,
      gender: "feminino",
      status: "em desenvolvimento",
    },
  ];

  const projects = selectedSection === "clients" ? clientProjects : ownProducts;

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.sector === selectedCategory);

  return (
    <div className={styles["portifolio-container"]}>
      <div className={styles.title} data-aos="fade-down">
        <h1>Portfólio</h1>
      </div>
      <div className={styles.subtitle} data-aos="fade-up">
        <p>Veja o Meu trabalho: O que criei e já fiz para meus clientes!</p>
      </div>

      {/* Navegação entre seções */}
      <div className={styles["portifolio-section-nav"]} data-aos="fade-up">
        {[
          { id: "clients", label: "Feitos para Clientes" },
          { id: "own-products", label: "Criações GGABS" },
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
          { id: "all", label: "Tudo" },
          { id: "tech", label: "Tecnologia" },
          { id: "design", label: "Design" },
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
                alt={`${project.title} preview`}
              />
            </div>
            <div className={styles["card-content"]}>
              <img
                src={project.logo}
                alt={`${project.title} logo`}
                className={styles["card-logo"]}
                style={
                  project.title === "Pedro Cezar Sites"
                    ? { maxWidth: "450px", maxHeight: "450px" }
                    : {}
                }
              />
              <p
                className={styles["card-text"]}
                style={{ color: project.cor2 }}
              >
                {Array.isArray(project.text) ? project.text : project.text}
              </p>
              <div className={styles["project-status"]}>
                {project.status === "finalizado" && (
                  <>
                    <FaCheckCircle
                      className={styles["status-icon"]}
                      style={{ color: project.cor2 }}
                    />
                    <span style={{ color: project.cor2 }}>Finalizado</span>
                  </>
                )}
                {project.status === "em desenvolvimento" && (
                  <>
                    <FaTools
                      className={styles["status-icon"]}
                      style={{ color: project.cor2 }}
                    />
                    <span style={{ color: project.cor2 }}>
                      Em Desenvolvimento
                    </span>
                  </>
                )}
                {project.status === "em concepção" && (
                  <>
                    <FaLightbulb
                      className={styles["status-icon"]}
                      style={{ color: project.cor2 }}
                    />
                    <span style={{ color: project.cor2 }}>Em Concepção</span>
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
                    {project.gender === "feminino"
                      ? `Conheça a ${project.title}`
                      : `Conheça o ${project.title}`}
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
