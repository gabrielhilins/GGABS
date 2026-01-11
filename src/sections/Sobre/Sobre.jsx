import { useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./Sobre.module.scss";
import Logo from "../../assets/img/Logo-T-Branco-FundoAzul.png";
import profilePhoto from "../../assets/img/DSC_5656.png";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Sobre() {

  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-out" });
  }, []);

  return (
    <div className={styles["sobre-container"]}>
      <h1 className={styles.title}>Sobre a GGABS Tech & Design</h1>
      <div className={styles["profile-card"]} data-aos="fade-up">
        <div className={styles["logo-wrapper"]}>
          <img src={Logo} alt="Logotipo GGABS" className={styles.logo} />
          <img
            src={profilePhoto}
            alt="Foto de Gabriel Henrique Lins"
            className={styles["profile-photo"]}
          />
        </div>
        <h2 className={styles.name}>Gabriel Henrique Lins</h2>
        <div className={styles.founder}>
          <p>Fundador da GGABS Tech & Design</p>
        </div>
        <div className={styles.links}>
          <a
            href="https://www.linkedin.com/in/gabriel-henrique-lins/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            data-tooltip-id="linkedin-tooltip"
            data-tooltip-content="Visite meu LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/GabrielHenriqueLins"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            data-tooltip-id="github-tooltip"
            data-tooltip-content="Visite meu GitHub"
          >
            <FaGithub />
          </a>
        </div>
        <Tooltip id="linkedin-tooltip" place="bottom" />
        <Tooltip id="github-tooltip" place="bottom" />
        <hr className={styles.hr}></hr>
        <p className={styles.description}>
          A <strong>GGABS Tech & Design</strong> é uma agência independente especializada em soluções digitais sob medida. Atuamos na interseção entre tecnologia e design para desenvolver experiências únicas, funcionais e visualmente impactantes.
        </p>
        <p className={styles.description}>
          Com uma visão clara de transformar ideias em realidade, criei a <strong>GGABS</strong> para oferecer soluções digitais que impulsionam negócios e realizam sonhos.
        </p>
        <p className={styles.description}>
          A missão é unir criatividade e tecnologia para entregar projetos que fazem a diferença. Acreditamos que todos os negócios, independentemente do tamanho, merecem ter acesso a um design de qualidade e soluções tecnológicas inovadoras.
        </p>
        <p className={styles.description}>
          Através da <strong>GGABS</strong>, busco oferecer soluções personalizadas e acessíveis, ajudando empresas a transformarem suas ideias em realidade e alcançarem seu potencial máximo.
        </p>
        
      </div>
    </div>
  );
}

export default Sobre;