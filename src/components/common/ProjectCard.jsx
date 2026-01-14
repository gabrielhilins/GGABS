import PropTypes from "prop-types";
import styles from "./ProjectCard.module.scss";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { FaCheckCircle, FaTools, FaLightbulb } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const renderText = (text) => {
    return text.split(/(\{strong\}.*?\{\/strong\})/g).map((part, idx) => {
      if (part.startsWith("{strong}") && part.endsWith("{/strong}")) {
        return (
          <strong key={idx}>
            {part.replace("{strong}", "").replace("{/strong}", "")}
          </strong>
        );
      }
      return <span key={idx}>{part}</span>;
    });
  };

  return (
    <div className={styles["portifolio-card"]}>
      {}
      <div className={styles.projectLabel}>
        {project.isOwnProduct ? "Criação GGABS" : "Cliente"}
      </div>

      <div className={styles["card-image-wrapper"]}>
        <img className={styles["card-image"]} src={project.image} alt={project.imageAlt} />
      </div>

      <div className={styles["card-content"]}>
        <div className={styles.logoWrapper}>
          <img
            src={project.logo}
            alt={project.logoAlt}
            className={styles["card-logo"]}
          />
        </div>

        <p className={styles["card-text"]}>
          {renderText(project.text)}
        </p>

        {}
        <div className={styles["project-status"]}>
          {project.status === "finalizado" && (
            <>
              <FaCheckCircle className={styles["status-icon"]} />
              <span>Finalizado</span>
            </>
          )}
          {project.status === "em desenvolvimento" && (
            <>
              <FaTools className={styles["status-icon"]} />
              <span>Em Desenvolvimento</span>
            </>
          )}
          {project.status === "em concepção" && (
            <>
              <FaLightbulb className={styles["status-icon"]} />
              <span>Em Concepção</span>
            </>
          )}
        </div>

        {}
        <div className={styles.links}>
          {project.status !== "em concepção" && (
            <a
              href={project.link}
              className={styles["card-button"]}
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
