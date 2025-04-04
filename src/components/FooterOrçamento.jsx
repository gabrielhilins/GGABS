import Logo from "../assets/img/Logo-ITSSL-Branco.png";
import styles from "./FooterOrçamento.module.scss";
import { SiThreads } from "react-icons/si";
import { FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function FooterOrçamento() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.copyright}>
        <p>© 2025 GGABS.</p>
        <p>Todos os direitos reservados</p>
      </div>

      <div className={styles.verticalLine}></div>

      <div className={styles.logo}>
        <img src={Logo} alt="Logo" />
      </div>

      <div className={styles.verticalLine}></div>

      <div className={styles.redesSociais}>
        <p>Acompanhe nas Redes Sociais</p>
        <div className={styles.icons}>
          <div className={styles.socialBox} data-tooltip="Instagram">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className={styles.icon} />
            </a>
          </div>
          <div className={styles.socialBox} data-tooltip="Pinterest">
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
              <FaPinterest className={styles.icon} />
            </a>
          </div>
          <div className={styles.socialBox} data-tooltip="LinkedIn">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className={styles.icon} />
            </a>
          </div>
          <div className={styles.socialBox} data-tooltip="X (Twitter)">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className={styles.icon} />
            </a>
          </div>
          <div className={styles.socialBox} data-tooltip="Threads">
            <a href="https://threads.net" target="_blank" rel="noopener noreferrer">
              <SiThreads className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterOrçamento;
