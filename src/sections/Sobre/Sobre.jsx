import { useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import styles from "./Sobre.module.scss";
import Logo from "../../assets/img/Logo-T-Branco-FundoAzul.png";
import profilePhoto from "../../assets/img/fotoGabriel.png";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css"; // Importando os estilos do Tooltip
import AOS from "aos";
import "aos/dist/aos.css"; // Importando os estilos

function Sobre() {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-out" }); // Ajuste conforme necessário
  }, []);

  return (
    <div className={styles["sobre-container"]}>
      <h1 className={styles.title}>Sobre a GGABS Software & Design</h1>
      <div className={styles["profile-card"]} data-aos="fade-up">
        <div className={styles["logo-wrapper"]}>
          <img src={Logo} alt="Logo GGABS" className={styles.logo} />
          <img
            src={profilePhoto}
            alt="Foto de Gabriel Henrique Lins"
            className={styles["profile-photo"]}
          />
        </div>
        <h2 className={styles.name}>Gabriel Henrique Lins</h2>
        <div className={styles.founder}>
          <p>Fundador da GGABS Software & Design</p>
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
          <a
            href="https://drive.google.com/file/d/1JZJZJZJZJZJZJZJZJZJZJZJZJZJZJZJZ/view"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            data-tooltip-id="curriculo-tooltip"
            data-tooltip-content="Veja meu Currículo"
          >
            <IoDocumentText />
          </a>
        </div>
        <Tooltip id="linkedin-tooltip" place="bottom" />
        <Tooltip id="github-tooltip" place="bottom" />
        <Tooltip id="curriculo-tooltip" place="bottom" />
        <hr className={styles.hr}></hr>
        <p className={styles.description}>
          Com uma visão clara de transformar ideias em realidade, criei a{" "}
          <strong>GGABS </strong>para oferecer soluções digitais que impulsionam
          negócios e realizam sonhos.
        </p>
        <p className={styles.description}>
          Minha missão é unir criatividade e tecnologia para entregar projetos
          que fazem a diferença. Acredito que todos os negócios,
          independentemente do tamanho, merecem ter acesso a um design de
          qualidade e soluções tecnológicas inovadoras.
        </p>
        <p className={styles.description}>
          Através da <strong>GGABS</strong>, busco oferecer soluções
          personalizadas e acessíveis, ajudando empresas a transformarem suas
          ideias em realidade e alcançarem seu potencial máximo.
        </p>
        <blockquote className={styles.quote}>
          <p className={styles.quotePt}>
            &quot;Para conseguir algo que você nunca teve, precisa fazer algo
            que nunca fez.&quot;
          </p>
          <p className={styles.quoteEn}>
            &quot;To get something you never had, you have to do something you
            never did.&quot;
          </p>
          <footer className={styles.quoteFooter}>
            <a
              href="https://youtu.be/tt4DFUmoM2o?si=OyHM8ef0hZvxoixK"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.videoLink}
            >
              Veja no YouTube
            </a>
            — Denzel Washington
          </footer>
        </blockquote>
      </div>
    </div>
  );
}

export default Sobre;
