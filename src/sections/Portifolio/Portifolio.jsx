import { useState, useEffect } from "react";
import styles from "./Portifolio.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

import uWed from "../../assets/img/uWed.png";
import Eazy from "../../assets/img/Eazy.png";
import PeladaFc from "../../assets/img/PeladaFC.png";
import Tarefex from "../../assets/img/Tarefex.png";
import REAL from '../../assets/img/Logo Branco Simulador.png'
import MesaPronta from '../../assets/img/MesaPronta.png'
import MariaClara from '../../assets/img/Maria Clara.png'

import { FaInstagram } from "react-icons/fa";
import { FaSquareArrowUpRight } from "react-icons/fa6";

function Portifolio() {
  const [selectedSection, setSelectedSection] = useState("solutions");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  
  // Produtos Próprios (criados e mantidos por você)
  const ownProducts = [
    {
      title: "uWed",
      text: "Site para organizar casamentos, feito para um cliente especial.",
      link: "#",
      logo: uWed,
      cor1: "#302B2B",
      cor2: "#EFAAA0",
      sector: "tech",
      type: "app",
      instagram: "https://www.instagram.com/uwed",
      video: "https://www.example.com/videos/uWed.mp4",
    },
    {
      title: "Pelada FC",
      text: "Aplicativo para marcar jogos de futebol, criado para um grupo de amigos.",
      link: "#",
      logo: PeladaFc,
      cor1: "#2E8B57",
      cor2: "#ffffff",
      sector: "tech",
      type: "app",
      instagram: "https://www.instagram.com/peladafc",
      video: "https://www.example.com/videos/PeladaFC.mp4",
    },
    {
      title: "Tarefex",
      text: "Um aplicativo criado por nós para organizar suas tarefas diárias de forma simples.",
      link: "#",
      logo: Tarefex,
      cor1: "#006FFF",
      cor2: "#ffffff",
      sector: "tech",
      type: "app",
      instagram: "https://www.instagram.com/tarefex",
      video: "https://www.example.com/videos/Tarefex.mp4",
    },
  ];

  // Soluções Oferecidas (serviços que você oferece)
  const solutions = [
    {
      title: "REAL",
      text: "Simulador de Orçamentos",
      link: "https://real-iota-ivory.vercel.app/",
      logo: REAL,
      cor1: "#00C49A",
      cor2: "#FFFFFF",
      sector: "tech",
      type: "landing-page",
      instagram: "https://www.instagram.com/eazy",
      video: "https://www.example.com/videos/Eazy.mp4",
    },
    {
      title: "Mesa Pronta",
      text: "Página inicial personalizável para destacar seu negócio online.",
      link: "#",
      logo: MesaPronta,
      cor1: "#EBE5BD",
      cor2: "#450D0D",
      sector: "tech",
      type: "landing-page",
      instagram: "https://www.instagram.com/eazy",
      video: "https://www.example.com/videos/Eazy.mp4",
    },
    {
      title: "Eazy",
      text: "Página inicial personalizável para destacar seu negócio online.",
      link: "#",
      logo: Eazy,
      cor1: "#24004A",
      cor2: "#ffffff",
      sector: "tech",
      type: "landing-page",
      instagram: "https://www.instagram.com/eazy",
      video: "https://www.example.com/videos/Eazy.mp4",
    },
  ];

  // Projetos para Clientes (feitos para outros)
  const clientProjects = [
    {
      title: "Maria Clara Arquitetura",
      text: "Portfólio para a arquiteta Maria Clara",
      link: "#",
      logo: MariaClara,
      cor1: "#FFFCED",
      cor2: "#273BB1",
      sector: "tech",
      type: "portfolio",
      instagram: "https://www.instagram.com/uwed",
      video: "https://www.example.com/videos/uWed.mp4",
    },
  ];

  const projects =
    selectedSection === "own-products"
      ? ownProducts
      : selectedSection === "solutions"
      ? solutions
      : clientProjects;

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => {
          if (selectedCategory === "tech" && selectedType !== "all") {
            return (
              project.sector === selectedCategory &&
              project.type === selectedType
            );
          } else {
            return project.sector === selectedCategory;
          }
        });

  const types = [
    "all",
    "e-commerce",
    "landing-page",
    "app",
    "sites institucionais",
  ];

  return (
    <div className={styles["portifolio-container"]}>
      <div className={styles.title} data-aos="fade-down">
        <h1>Portfólio</h1>
      </div>
      <div className={styles.subtitle} data-aos="fade-up">
        <p>Veja o Meu trabalho: O que criei, ofereço e já fiz para meus clientes!</p>
      </div>
      <div className={styles.obs}>
        <p>Obs: Todas as landing pages dos produtos que criei e ofereço foram desenvolvidas por mim!</p>
      </div>

      {/* Navegação entre seções */}
      <div className={styles["portifolio-section-nav"]} data-aos="fade-up">
        {[
          { id: "solutions", label: "O Que Oferecemos" },
          { id: "clients", label: "Para Clientes" },
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
                setSelectedType("all");
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
              onChange={() => {
                setSelectedCategory(category.id);
                setSelectedType("all");
              }}
            />
            {category.label}
          </label>
        ))}
      </div>

      {/* Sub-navegação para tipos (apenas em tech) */}
      {selectedCategory === "tech" && (
        <div className={styles["portifolio-sub-nav"]} data-aos="fade-up">
          {[
            { id: "all", label: "Tudo" },
            { id: "e-commerce", label: "Lojas Online" },
            { id: "landing-page", label: "Páginas de Venda" },
            { id: "app", label: "Aplicativos" },
            { id: "sites institucionais", label: "Sites Completos" },
          ].map((type) => (
            <label
              key={type.id}
              className={`${styles["sub-nav-button"]} ${
                selectedType === type.id ? styles.active : ""
              }`}
            >
              <input
                type="radio"
                name="type"
                value={type.id}
                checked={selectedType === type.id}
                onChange={() => setSelectedType(type.id)}
              />
              {type.label}
            </label>
          ))}
        </div>
      )}

      {/* Grid de projetos */}
      <div className={styles["portifolio-grid"]}>
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className={styles["portifolio-card"]}
            style={{ background: project.cor1 }}
            data-aos="zoom-in"
          >
            <video
              className={styles["card-video"]}
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            >
              <source src={project.video} type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
            <div className={styles["card-content"]}>
              <img
                src={project.logo}
                alt={`${project.title} logo`}
                className={styles["card-logo"]}
              />
              <p className={styles["card-text"]} style={{ color: project.cor2 }}>{project.text}</p>
              <div className={styles.links}>
                <a
                  href={project.link}
                  className={styles["card-button"]}
                  style={{ background: project.cor2, color: project.cor1 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareArrowUpRight className={styles.icon} />
                  Conheça o {project.title}
                </a>
                <a
                  href={project.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["card-instagram"]}
                  style={{ color: project.cor2 }}
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portifolio;