import { useState, useEffect } from "react";
import styles from "./Portifolio.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

import uWed from "../../assets/img/uWed.png";
import Eazy from "../../assets/img/Eazy.png";
import PeladaFc from "../../assets/img/PeladaFC.png";
import Tarefex from "../../assets/img/Tarefex.png";
import { FaInstagram } from "react-icons/fa";
import { FaSquareArrowUpRight } from "react-icons/fa6";

function Portifolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const projects = [
    {
      title: "uWed",
      text: "Um projeto inovador para casamentos.",
      link: "#",
      logo: uWed,
      cor1: "#302B2B",
      cor2: "#EFAAA0",
      sector: "tech",
      type: "saas",
      instagram: "https://www.instagram.com/projeto1",
      video: "https://www.example.com/videos/uWed.mp4", // Substitua pelo link do vídeo
    },
    {
      title: "Eazy",
      text: "Design clean e moderno para aplicativos.",
      link: "#",
      logo: Eazy,
      cor1: "#24004A",
      cor2: "white",
      sector: "tech",
      type: "landing-page",
      instagram: "https://www.instagram.com/projeto2",
      video: "https://www.example.com/videos/Eazy.mp4", // Substitua pelo link do vídeo
    },
    {
      title: "Pelada FC",
      text: "App para organização de partidas de futebol.",
      link: "#",
      logo: PeladaFc,
      cor1: "#2E8B57",
      cor2: "white",
      sector: "tech",
      type: "app",
      instagram: "https://www.instagram.com/projeto3",
      video: "https://www.example.com/videos/PeladaFC.mp4", // Substitua pelo link do vídeo
    },
    {
      title: "Tarefex",
      text: "Plataforma para gerenciamento de tarefas.",
      link: "#",
      logo: Tarefex,
      cor1: "#1976D2",
      cor2: "white",
      sector: "tech",
      type: "app",
      instagram: "https://www.instagram.com/projeto4",
      video: "https://www.example.com/videos/Tarefex.mp4", // Substitua pelo link do vídeo
    },
  ];

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

  const types = ["all", "e-commerce", "landing-page", "saas", "sites institucionais", "app"];

  return (
    <div className={styles["portifolio-container"]}>
      <div className={styles.title} data-aos="fade-down">
        <h1>Portfolio</h1>
      </div>
      <div className={styles.subtitle} data-aos="fade-up">
        <p>Explore alguns dos projetos que já desenvolvemos.</p>
      </div>

      <div className={styles["portifolio-nav"]} data-aos="fade-up">
        {["all", "tech", "design"].map((category) => (
          <label
            key={category}
            className={`${styles["nav-button"]} ${
              selectedCategory === category ? styles.active : ""
            }`}
          >
            <input
              type="radio"
              name="category"
              value={category}
              checked={selectedCategory === category}
              onChange={() => {
                setSelectedCategory(category);
                setSelectedType("all"); // Reset type filter when category changes
              }}
            />
            {category === "all"
              ? "Todos"
              : category.charAt(0).toUpperCase() + category.slice(1)}
          </label>
        ))}
      </div>

      {selectedCategory === "tech" && (
        <div className={styles["portifolio-sub-nav"]} data-aos="fade-up">
          {types.map((type) => (
            <label
              key={type}
              className={`${styles["sub-nav-button"]} ${
                selectedType === type ? styles.active : ""
              }`}
            >
              <input
                type="radio"
                name="type"
                value={type}
                checked={selectedType === type}
                onChange={() => setSelectedType(type)}
              />
              {type === "all"
                ? "Todos"
                : type.charAt(0).toUpperCase() + type.slice(1)}
            </label>
          ))}
        </div>
      )}

      <div className={styles["portifolio-grid"]}>
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className={styles["portifolio-card"]}
            style={{ background: project.cor1 }}
            data-aos="zoom-in"
          >
            {/* Substitua a imagem pelo vídeo */}
            <video
              className={styles["card-image"]}
              autoPlay
              loop
              muted
              playsInline
              controls={false} // Remova os controles se não quiser que apareçam
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
              <p className={styles["card-text"]}>{project.text}</p>
              <div className={styles.links}>
                <a
                  href={project.link}
                  className={styles["card-button"]}
                  style={{ background: project.cor2, color: project.cor1 }}
                >
                  <FaSquareArrowUpRight className={styles.icon} />
                  Saiba mais sobre o {project.title}
                </a>
                <a
                  href={project.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["card-instagram"]}
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