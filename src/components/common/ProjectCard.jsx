import PropTypes from "prop-types";
import styles from "./ProjectCard.module.scss";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { FaCheckCircle, FaTools, FaLightbulb } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  // Helper to parse text with {strong} tags
  const renderText = (text) => {
    return text.split(/(\{strong\}.*?\{\/strong\})/g).map((part, idx) => {
      if (part.startsWith("{strong}") && part.endsWith("{/strong}")) {
        return (
          <strong key={idx} style={{ color: project.cor2 }}>
            {part.replace("{strong}", "").replace("{/strong}", "")}
          </strong>
        );
      }
      return <span key={idx}>{part}</span>;
    });
  };

  return (
    <div
      className={styles["portifolio-card"]}
      style={{ background: project.cor1 }}
    >
      {/* Badge Label */}
      <div className={styles.projectLabel} style={{ backgroundColor: project.cor2, color: project.cor1 }}>
        {project.isOwnProduct ? "Criação GGABS" : "Cliente"}
      </div>

      <div className={styles["card-image-wrapper"]}>
        <img className={styles["card-image"]} src={project.image} alt={project.imageAlt} />
      </div>

      <div className={styles["card-content"]}>
        <img
          src={project.logo}
          alt={project.logoAlt}
          className={styles["card-logo"]}
        />

        <p className={styles["card-text"]} style={{ color: project.cor2 }}>
          {renderText(project.text)}
        </p>

        {/* Status */}
        <div className={styles["project-status"]}>
          {project.status === "finalizado" && (
            <>
              <FaCheckCircle className={styles["status-icon"]} style={{ color: project.cor2 }} />
              <span style={{ color: project.cor2 }}>Finalizado</span>
            </>
          )}
          {project.status === "em desenvolvimento" && (
            <>
              <FaTools className={styles["status-icon"]} style={{ color: project.cor2 }} />
              <span style={{ color: project.cor2 }}>Em Desenvolvimento</span>
            </>
          )}
          {project.status === "em concepção" && (
            <>
              <FaLightbulb className={styles["status-icon"]} style={{ color: project.cor2 }} />
              <span style={{ color: project.cor2 }}>Em Concepção</span>
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
              {project.linkText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    cor1: PropTypes.string,
    cor2: PropTypes.string,
    isOwnProduct: PropTypes.bool,
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    logo: PropTypes.string,
    logoAlt: PropTypes.string,
    text: PropTypes.string,
    status: PropTypes.string,
    link: PropTypes.string,
    linkText: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;
